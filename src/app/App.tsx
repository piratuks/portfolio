import { AlertContainer } from 'components/notifications/Alert/AlertContainer';
import { Loader } from 'components/ui/Loader';
import { FC, useEffect, useRef } from 'react';
import { apiError } from 'state/alertHelper';
import { useFetchConfigurationQuery } from 'state/configurationApi';
import { configurationLoaded, selectIsconfigurationInitialized } from 'state/configurationSlice';
import { useAppDispatch, useAppSelector } from 'state/configureStore';
import { AppHeader } from './AppHeader';
import { AppPage } from './AppPage';

export const App: FC = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const { data, isFetching, error } = useFetchConfigurationQuery();
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(selectIsconfigurationInitialized);

  useEffect(() => {
    if (data) dispatch(configurationLoaded(data));
  }, [data]);

  if (error) apiError({ error, id: 'CONFIGURATION_ERROR' });
  if (!error && (isFetching || !isInitialized)) return <Loader />;

  return (
    <>
      <AppHeader sectionRefs={sectionRefs} />
      <div className="container mt-3">
        <AlertContainer />
        <AppPage sectionRefs={sectionRefs} />
      </div>
    </>
  );
};

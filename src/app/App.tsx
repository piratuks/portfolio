import { AlertContainer } from 'components/notifications/Alert/AlertContainer';
import { Spinner } from 'components/ui/Spinner';
import { FC, useEffect } from 'react';
import { apiError } from 'state/alertHelper';
import { useFetchConfigurationQuery } from 'state/configurationApi';
import { configurationLoaded, selectIsconfigurationInitialized } from 'state/configurationSlice';
import { useAppDispatch, useAppSelector } from 'state/configureStore';
import { AppPage } from './AppPage';

export const App: FC = () => {
  const { data, isFetching, error } = useFetchConfigurationQuery();
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(selectIsconfigurationInitialized);

  useEffect(() => {
    if (data) dispatch(configurationLoaded(data));
  }, [data]);

  if (error) apiError({ error, id: 'CONFIGURATION_ERROR' });
  if (!error && (isFetching || !isInitialized)) return <Spinner />;

  return (
    <div className="container mt-3">
      <AlertContainer />
      <AppPage />
    </div>
  );
};

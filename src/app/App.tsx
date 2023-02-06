import { AlertContainer } from 'components/notifications/Alert/AlertContainer';
import { Loader } from 'components/ui/Loader';
import { FC, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { apiError } from 'state/alertHelper';
import { useFetchConfigurationQuery } from 'state/configurationApi';
import { configurationLoaded, selectIsconfigurationInitialized } from 'state/configurationSlice';
import { useAppDispatch, useAppSelector } from 'state/configureStore';
import { ErrorCode } from 'state/errorCode';
import { AppHeader } from './AppHeader';
import { AppRoutes } from './AppRoutes';

export interface AppProps {
  sectionRefs: React.MutableRefObject<null | HTMLDivElement>[];
}
export const App: FC = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const { data, isFetching, error } = useFetchConfigurationQuery();
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(selectIsconfigurationInitialized);

  useEffect(() => {
    if (data) dispatch(configurationLoaded(data));
  }, [data]);

  if (error) apiError({ error, id: ErrorCode.configError });
  if (!error && (isFetching || !isInitialized)) return <Loader />;

  return (
    <>
      <AppHeader sectionRefs={sectionRefs} />
      <Container className="mt-3">
        <AlertContainer />
        <AppRoutes sectionRefs={sectionRefs} />
      </Container>
    </>
  );
};

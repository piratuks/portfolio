import { AlertCode, AlertType } from 'components/notifications/Alert/Alert';
import { AlertContainer } from 'components/notifications/Alert/AlertContainer';
import { Loader } from 'components/ui/Loader';
import { FC, useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { alertAdd } from 'state/alertSlice';
import { isSerializedError } from 'state/apiError';
import { useFetchConfigurationQuery } from 'state/configurationApi';
import { configurationLoaded, selectIsconfigurationInitialized } from 'state/configurationSlice';
import { useAppDispatch, useAppSelector } from 'state/configureStore';
import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';
import { AppRoutes } from './AppRoutes';

export interface AppProps {
  sectionRefs: React.MutableRefObject<null | HTMLDivElement>[];
}
export interface PageProps {
  sectionRef?: React.MutableRefObject<null | HTMLDivElement>;
}
export const App: FC = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const { data, isFetching, error } = useFetchConfigurationQuery();
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(selectIsconfigurationInitialized);

  useEffect(() => {
    if (data) dispatch(configurationLoaded(data));
  }, [data]);

  if (error) {
    let msg = 'Something happened durring request';
    if (isSerializedError(error) && error.message) {
      msg = error.message;
    }
    dispatch(
      alertAdd({
        isOpen: true,
        message: msg,
        id: AlertCode.configError,
        type: AlertType.danger
      })
    );
  }

  if (!error && (isFetching || !isInitialized)) return <Loader />;

  return (
    <>
      <AppHeader sectionRefs={sectionRefs} />
      <Container className="mt-3">
        <AppRoutes sectionRefs={sectionRefs} />
        <AlertContainer />
      </Container>
      <AppFooter sectionRef={sectionRefs[0]} contactsRef={sectionRefs[5]} />
    </>
  );
};

import { ApiError } from 'components/notifications/ApiError';
import { Spinner } from 'components/ui/Spinner';
import { FC, useEffect } from 'react';
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

  let errorElement = null;

  if (error) errorElement = <ApiError error={error} />;
  if (!error && (isFetching || !isInitialized)) return <Spinner />;

  return (
    <>
      {errorElement}
      <AppPage />
    </>
  );
};

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

  if (error) return <ApiError error={error} />;
  if (isFetching || !isInitialized) return <Spinner />;

  return <AppPage />;
};

import { FC } from 'react';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { selectAlerts } from 'state/alertSlice';
import { useAppSelector } from 'state/configureStore';
import { Alert } from './Alert';

export const AlertContainer: FC = () => {
  const alerts = useAppSelector(selectAlerts);
  console.log(alerts);
  return (
    <ToastContainer position={'bottom-start'}>
      {alerts.map(alert => {
        return (
          <Alert
            key={alert.id}
            autohide={alert.autohide}
            isOpen={alert.isOpen}
            autoHideDuration={alert.autoHideDuration}
            message={alert.message}
          />
        );
      })}
    </ToastContainer>
  );
};

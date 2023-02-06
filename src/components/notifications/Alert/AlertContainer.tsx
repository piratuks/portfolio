import { FC } from 'react';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { selectAlerts } from 'state/alertSlice';
import { useAppSelector } from 'state/configureStore';
import { Alert } from './Alert';

export const AlertContainer: FC = () => {
  const alerts = useAppSelector(selectAlerts);

  return (
    <ToastContainer position={'bottom-start'} className="position-fixed">
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

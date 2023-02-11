import { FC, useState } from 'react';
import { Toast } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import { alertRemove } from 'state/alertSlice';
import { useAppDispatch } from 'state/configureStore';

export enum AlertType {
  success = 'success',
  danger = 'danger'
}
export enum AlertCode {
  configError = 'CONFIGURATION_ERROR',
  failedSentEmail = 'EMAIL_SENT_FAILED',
  successEmail = 'EMAIL_SENT'
}
export interface AlertProps {
  isOpen: boolean;
  autoHideDuration?: number;
  message: string;
  autohide?: boolean;
  type: AlertType;
  id: AlertCode;
}
export const Alert: FC<AlertProps> = ({ isOpen, autoHideDuration = 6000, message, autohide = true, type, id }) => {
  const [opened, setOpen] = useState(isOpen);
  const dispatch = useAppDispatch();

  const onClosed = () => {
    dispatch(alertRemove(id));
    setOpen(false);
  };

  return (
    <Toast
      className="m-1"
      show={opened}
      bg={type}
      autohide={autohide}
      delay={autoHideDuration}
      onClose={() => onClosed()}
    >
      <div className="d-flex">
        <Toast.Body className={'text-white'}>{message}</Toast.Body>
        <CloseButton className="btn-close me-2 m-auto btn-close-white" onClick={() => onClosed()} />
      </div>
    </Toast>
  );
};

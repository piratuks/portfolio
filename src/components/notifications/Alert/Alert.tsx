import { FC, useState } from 'react';
import { Toast } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import { AlertType } from 'state/alertHelper';
export interface AlertProps {
  isOpen: boolean;
  autoHideDuration: number;
  message: string;
  autohide: boolean;
  type: AlertType;
}
export const Alert: FC<AlertProps> = ({ isOpen, autoHideDuration, message, autohide, type }) => {
  const [opened, setOpen] = useState(isOpen);

  return (
    <Toast className="m-1" show={opened} bg={type} autohide={autohide} delay={autoHideDuration}>
      <div className="d-flex">
        <Toast.Body className={'text-white'}>{message}</Toast.Body>
        <CloseButton className="btn-close me-2 m-auto btn-close-white" onClick={() => setOpen(false)} />
      </div>
    </Toast>
  );
};

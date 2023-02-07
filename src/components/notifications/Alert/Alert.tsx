import { FC, useState } from 'react';
import { Toast } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import styled from 'styled-components';

const StyledToast = styled(Toast)`
  background-color: #f85c70 !important;
`;
export interface AlertProps {
  isOpen: boolean;
  autoHideDuration: number;
  message: string;
  autohide: boolean;
}
export const Alert: FC<AlertProps> = ({ isOpen, autoHideDuration, message, autohide }) => {
  const [opened, setOpen] = useState(isOpen);

  return (
    <StyledToast className="m-1" show={opened} bg={'danger'} autohide={autohide} delay={autoHideDuration}>
      <div className="d-flex">
        <Toast.Body className={'text-white'}>{message}</Toast.Body>
        <CloseButton className="btn-close me-2 m-auto btn-close-white" onClick={() => setOpen(false)} />
      </div>
    </StyledToast>
  );
};

import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { alertAdd } from './alertSlice';
import { isSerializedError } from './apiError';
import { AppDispatch } from './configureStore';

export enum AlertType {
  success = 'success',
  danger = 'danger'
}
export enum AlertCode {
  configError = 'CONFIGURATION_ERROR',
  failedSentEmail = 'EMAIL_SENT_FAILED',
  successEmail = 'EMAIL_SENT'
}
interface DispatchProps {
  dispatcher: AppDispatch;
}
interface IdProps {
  id: string;
}
interface MsgProps extends IdProps, DispatchProps {
  message?: string;
}
interface ErrorProps extends IdProps, MsgProps, DispatchProps {
  error: FetchBaseQueryError | SerializedError;
}
interface TechnicalErrorProps extends IdProps, DispatchProps {}

export const apiErrorToast = ({ error, id, message, dispatcher }: ErrorProps) => {
  let msg = message ?? 'Something happened durring request';
  if (isSerializedError(error) && error.message) {
    msg = error.message;
  }
  dispatcher(
    alertAdd({
      isOpen: true,
      autoHideDuration: 6000,
      message: msg,
      autohide: true,
      id: id,
      type: AlertType.danger
    })
  );
};
export const technicalErrorToast = ({ id, dispatcher }: TechnicalErrorProps) => {
  dispatcher(
    alertAdd({
      isOpen: true,
      autoHideDuration: 6000,
      message: 'Technical error',
      autohide: true,
      id: id,
      type: AlertType.danger
    })
  );
};
export const successToast = ({ id, message, dispatcher }: MsgProps) => {
  const msg = message ?? 'Something happened durring request';
  dispatcher(
    alertAdd({
      isOpen: true,
      autoHideDuration: 6000,
      message: msg,
      autohide: true,
      id: id,
      type: AlertType.success
    })
  );
};

import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { FC } from 'react';
import { isSerializedError } from 'state/apiError';
import { Toast, ToastType } from './Toast';

interface Props {
  error: FetchBaseQueryError | SerializedError;
}
export const ApiError: FC<Props> = ({ error }) => {
  let message = 'Something happened durring request';
  if (isSerializedError(error) && error.message) {
    message = error.message;
  }

  return <Toast isOpen={true} autoHideDuration={6000} type={ToastType.error} message={message} />;
};

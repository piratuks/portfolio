import { FC } from 'react';
import { Toast, ToastType } from './Toast';

export const TechnicalError: FC = () => {
  return <Toast isOpen={true} autoHideDuration={6000} type={ToastType.error} message={'Technical error'} />;
};

import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { alertAdd } from './alertSlice';
import { isSerializedError } from './apiError';
import { useAppDispatch } from './configureStore';

interface IdProps {
  id: string;
}
interface Props extends IdProps {
  error: FetchBaseQueryError | SerializedError;
}
export const apiError = ({ error, id }: Props) => {
  let message = 'Something happened durring request';
  if (isSerializedError(error) && error.message) {
    message = error.message;
  }
  const dispatch = useAppDispatch();
  dispatch(
    alertAdd({
      isOpen: true,
      autoHideDuration: 6000,
      message: message,
      autohide: true,
      id: id
    })
  );
};
export const TechnicalError = ({ id }: IdProps) => {
  const dispatch = useAppDispatch();
  dispatch(
    alertAdd({
      isOpen: true,
      autoHideDuration: 6000,
      message: 'Technical error',
      autohide: true,
      id: id
    })
  );
};

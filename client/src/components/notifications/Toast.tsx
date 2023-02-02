import { AlertProps, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import React, { FC, useState } from 'react';

const FilledAlert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export enum ToastType {
  error = 'error',
  warning = 'warning',
  info = 'info',
  success = 'success'
}
interface Props {
  isOpen: boolean;
  autoHideDuration: number;
  type: ToastType;
  message: string;
}
export const Toast: FC<Props> = ({ isOpen, autoHideDuration, type, message }) => {
  const [opened, setOpen] = useState(isOpen);

  const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={opened} autoHideDuration={autoHideDuration} onClose={handleClose}>
      <FilledAlert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </FilledAlert>
    </Snackbar>
  );
};

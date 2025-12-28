import { Snackbar, Alert } from '@mui/material';
import { useAppContext } from '../../lib/Context';

export default function NotificationSystem() {
  const { notification, clearNotification } = useAppContext();

  const open = Boolean(notification);

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') return;
    clearNotification();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      {notification && (
        <Alert
          onClose={handleClose}
          severity={notification.type || 'info'}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      )}
    </Snackbar>
  );
}

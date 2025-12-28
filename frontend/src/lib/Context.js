import { createContext, useCallback, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppContextProvider({ children }) {
  const [notification, setNotification] = useState(null); // { type, message }

  const notify = useCallback((type, message) => {
    setNotification({ type, message });
  }, []);

  const notifyError = useCallback(
    (message) => {
      notify('error', message);
    },
    [notify]
  );

  const notifySuccess = useCallback(
    (message) => {
      notify('success', message);
    },
    [notify]
  );

  const clearNotification = useCallback(() => {
    setNotification(null);
  }, []);

  const value = {
    notification,
    notify,
    notifyError,
    notifySuccess,
    clearNotification,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return ctx;
}

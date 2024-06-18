import  { createContext, useContext, ReactNode, useState } from 'react';
import Toast from '../components/Toast';
import { useQuery } from 'react-query';
import * as apiClient from '../api-client';

// Define the types for ToastMessage and AppContext
type ToastMessage = {
  message: string;
  type: 'SUCCESS' | 'ERROR';
};

type AppContextType = {
  showToast: (toastMessage: ToastMessage) => void;
  isLoggedIn: boolean;
};

// Create the context with an initial undefined value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Define the AppContextProvider component with clear error handling
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastMessage | undefined>(undefined);

  const {isError} = useQuery('validateToken', apiClient.validateToken, {
    retry: false,
  });

  const showToast = (toastMessage: ToastMessage) => {
    setToast(toastMessage);
  };

  return (
    <AppContext.Provider value={{ showToast, isLoggedIn:!isError }}>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(undefined)} />}
      {children}
    </AppContext.Provider>
  );
};

// Define the custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

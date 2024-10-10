import { useContext } from 'react';
import { ToastContext } from '@components/common/Toast';
import { useQueryUser } from '@queries';

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastContextProvider');
  }
  return context;
};

export const useCurrentUser = () => {
  const { data } = useQueryUser({ id: 1 });
  return data;
};

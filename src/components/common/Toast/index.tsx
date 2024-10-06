import { createContext, useState, ReactNode } from 'react';
import * as Toast from '@radix-ui/react-toast';
import { Flex, Text } from '@radix-ui/themes';
import { CheckCircledIcon, Cross2Icon, CrossCircledIcon } from '@radix-ui/react-icons';
import './styles.css';

interface ToastContextType {
  showToast: (title: string, type: ToastType) => void;
}

type ToastType = 'success' | 'error';

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastContextProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [type, setType] = useState<ToastType>('success');

  const showToast = (title: string, type: ToastType) => {
    setTitle(title);
    setType(type);
    setOpen(true);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast.ToastProvider swipeDirection={'right'}>
        {children}
        <Toast.Root className='ToastRoot' open={open} onOpenChange={setOpen}>
          <Toast.Title className='ToastTitle'>
            <Flex justify={'start'} align={'center'} gap={'1'}>
              {type === 'success' ? (
                <CheckCircledIcon height={16} width={16} color={'green'} />
              ) : (
                <CrossCircledIcon height={16} width={16} color={'red'} />
              )}
              <Text weight={'medium'}>{title}</Text>
            </Flex>
          </Toast.Title>
          <Toast.Action className='ToastAction' asChild altText='Goto schedule to undo'>
            <button>
              <Cross2Icon />
            </button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className='ToastViewport' />
      </Toast.ToastProvider>
    </ToastContext.Provider>
  );
};

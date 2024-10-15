// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'grapesjs/dist/css/grapes.min.css';
import '@radix-ui/themes/styles.css';
import './index.css';
import './grapejs.css';
import { Theme } from '@radix-ui/themes';
import router from './router/index.tsx';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContextProvider } from '@components/common/Toast';
import { initializeYupLocale, seedData } from '@utils';

const queryClient = new QueryClient();

seedData();
initializeYupLocale();

createRoot(document.getElementById('root')!).render(
  <Theme accentColor={'red'} radius={'full'}>
    <QueryClientProvider client={queryClient}>
      <ToastContextProvider>
        <RouterProvider router={router} />
      </ToastContextProvider>
    </QueryClientProvider>
  </Theme>
);

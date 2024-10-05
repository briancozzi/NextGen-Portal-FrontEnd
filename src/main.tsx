import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import './index.css';
import { Theme } from '@radix-ui/themes';
import router from './router/index.tsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor={'red'} radius={'full'}>
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>
);

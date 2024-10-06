import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(root, 'components'),
      '@pages': resolve(root, 'pages'),
      '@icons': resolve(root, 'icons'),
      '@queries': resolve(root, 'queries'),
      '@mutations': resolve(root, 'mutations'),
      '@api': resolve(root, 'api'),
      '@queryKeys': resolve(root, 'queryKeys'),
      '@utils': resolve(root, 'utils'),
    },
  },
});

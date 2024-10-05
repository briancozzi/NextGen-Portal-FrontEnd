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
      '@api': resolve(root, 'api'),
    },
  },
});

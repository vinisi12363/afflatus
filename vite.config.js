import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base:'/vite-gh-pages/',
  plugins: [react()],
  resolve: {
    alias: {
      '@emotion/styled': '@emotion/styled/base',
    },
  },
});
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@/lib',
        replacement: path.resolve(__dirname, './src/components/lib/')
      },
      {
        find: '@/pages',
        replacement: path.resolve(__dirname, './src/pages/')
      },
      {
        find: '@/components',
        replacement: path.resolve(__dirname, './src/components/')
      },
      {
        find: '@/src',
        replacement: path.resolve(__dirname, './src/')
      }
    ]
  },
})

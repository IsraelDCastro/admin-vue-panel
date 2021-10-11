import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader()
  ],
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
        find: '@/assets',
        replacement: path.resolve(__dirname, './src/assets/')
      },
      {
        find: '@/layouts',
        replacement: path.resolve(__dirname, './src/layouts/')
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

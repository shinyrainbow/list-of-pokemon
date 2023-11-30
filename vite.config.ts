import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'tailwind.config.js': path.resolve(__dirname, 'tailwind.config.js'),
    },
  },
  build: {
    outDir: 'build',
    commonjsOptions: {
      include: ['tailwind.config.js', 'node_modules/**'],
    },
  },
  server: {
    open: true,
    port: 8080,
  },
})

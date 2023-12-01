import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'tailwind.config.ts': path.resolve(__dirname, 'tailwind.config.ts'),
    },
  },
  build: {
    outDir: 'build',
    commonjsOptions: {
      include: ['tailwind.config.ts', 'node_modules/**'],
    },
  },
  server: {
    open: true,
    port: 8080,
  },
})

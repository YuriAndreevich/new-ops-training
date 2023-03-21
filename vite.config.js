import { defineConfig } from 'vite'
import { ErrorOverlay } from 'vite-plugin-error-overlay'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    watch: {
      usePolling: true
    }
  },
  plugins: [react({
    exclude: /\.stories\.(t|j)sx?$/,
    include: '**/*.tsx',
  }),
  ErrorOverlay()
  ],

  base: '/',
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    'process.env': process.env
  }
})


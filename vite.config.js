import { defineConfig } from 'vite'
// import { ErrorOverlay } from 'vite-plugin-error-overlay'
import checker from 'vite-plugin-checker';
// import reactRefresh from '@vitejs/plugin-react-refresh'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    watch: {
      usePolling: true
    }
  },
  plugins: [react({
    exclude: /\.stories\.(t|j)sx?$/,
    include: '**/*.jsx',
  }),
  // ErrorOverlay({
  //   exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
  //   include: '**/*.jsx'
  // }),
  checker({
    // typescript: true,
  }),
    // reactRefresh({
    //   exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
    //   include: '**/*.jsx'
    // })
  ],

  base: '/',
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    'process.env': process.env
  }
})


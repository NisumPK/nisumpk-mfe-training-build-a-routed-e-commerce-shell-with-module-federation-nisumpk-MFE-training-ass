import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        home: 'http://localhost:5001/assets/remoteEntry.js',
        product: 'http://localhost:5002/assets/remoteEntry.js',
        shop: 'http://localhost:5003/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5000,
  },
  build: {
    target: 'esnext',
  },
})

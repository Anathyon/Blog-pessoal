import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2022',
    // O SDK do Firestore (~590 kB) só é baixado quando alguém envia o formulário de contato.
    chunkSizeWarningLimit: 650,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-dom/client', 'scheduler'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})

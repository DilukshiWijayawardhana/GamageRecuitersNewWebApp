import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      'react-hook-form': 'react-hook-form',
      'next/router': 'next/dist/client/router.js',
    },
  },
})

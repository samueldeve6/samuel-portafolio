import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CONFIG ESPECIAL PARA WINDOWS (HMR FIX)
export default defineConfig({
  plugins: [react()]
});


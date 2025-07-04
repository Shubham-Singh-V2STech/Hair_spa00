import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Hair_spa00/', // ✅ Must match the repo name
  server: {
    host: true
  }
})

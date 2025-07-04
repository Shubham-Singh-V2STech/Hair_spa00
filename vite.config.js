import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hello-world-app/', // ✅ Must match the repo name
  server: {
    host: true
  }
})

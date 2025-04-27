import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Nike-store/',   // ✅ Important! Your repo name with slashes
  plugins: [react()],
})

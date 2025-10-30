import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚙️ Ganti nama repo sesuai yang di GitHub
export default defineConfig({
  plugins: [react()],
  base: '/majulancar/', 
})

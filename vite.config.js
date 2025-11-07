import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Todo-Web/', // ⚠️ <-- yahan apne GitHub repo ka exact naam likh (case sensitive)
  server: {
    port: 3000,
    open: true
  }
})

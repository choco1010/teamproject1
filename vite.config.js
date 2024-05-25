import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src") // @ 符號：直接指向到 src 資料夾
    }
  },
  build: {
    rollupOptions: {
      input: {
        b_home: path.resolve(__dirname, 'b_home.html'),
        admin_account: path.resolve(__dirname, 'admin_account.html')
      }
    }
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// Настройка Vite для проекта Vue.js
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.js',
      },
    },
  },
})

// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        shop: resolve(__dirname, './views/shop.html'),
        detail: resolve(__dirname, './views/detail.html'),
        checkout: resolve(__dirname, './views/checkout.html'),
        cart: resolve(__dirname, './views/cart.html'),
        login: resolve(__dirname, './views/login.html'),
      },
    },
  },
})
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';


console.log(path.resolve(__dirname, '../konva/**'))

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      // ignored: ['!**/node_modules/konva/**']
      ignored: ['!**/node_modules/konva/**', '!../konva/**']
    }
  },
  plugins: [svelte()],
  optimizeDeps: {
    include: ['konva']
    // exclude: ['konva']
  },
  build: {
    commonjsOptions: {
      include: [path.resolve(__dirname, '../konva/**'), "/node_modules/"],
    },
  },
  resolve: {
    alias: {
      // Ensure Vite resolves the symlinked konva package correctly
      'konva': path.resolve(__dirname, '../konva')
    }
  }
})

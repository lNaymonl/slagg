import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: [
      "bootstrap/dist/js/bootstrap.min.js"
    ]
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@common': fileURLToPath(new URL('../common/src', import.meta.url))
    }
  },
  build: {
    outDir: '../dist/client',
    emptyOutDir: false,
    sourcemap: true,
    minify: true,
    cssMinify: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // WORKARROUND this is needed because of a new version of scss
        // For more information see: https://github.com/twbs/bootstrap/issues/40849
        quietDeps: true,
        silenceDeprecations: ['legacy-js-api']
      }
    }
  }
})

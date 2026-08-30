import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          minSize: 10000,    // 10 KB minimum chunk size
          maxSize: 450000,   // 👈 Force Rolldown to split files if they cross 450 KB
          groups: [
            {
              name: 'vendor-libs',
              test: /node_modules/,
              priority: 10
            }
          ]
        }
      }
    }
  }
})

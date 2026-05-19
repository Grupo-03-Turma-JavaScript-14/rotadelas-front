import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // adicione essa linha

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // adicione essa linha
  ],
})
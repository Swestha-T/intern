
import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    // Tailwind CSS should be configured through PostCSS in Vite
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  ],
})
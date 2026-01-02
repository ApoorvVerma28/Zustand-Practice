// Import Vite configuration function
import { defineConfig } from 'vite'
// Import Tailwind CSS Vite plugin for utility-first CSS framework
import tailwindcss from '@tailwindcss/vite'

// Export Vite configuration with Tailwind CSS support
export default defineConfig({
  plugins: [
    // Enable Tailwind CSS processing during build
    tailwindcss(),
  ],
})
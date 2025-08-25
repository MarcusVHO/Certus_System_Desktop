import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"


import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "src/renderer"),
  build: {
    outDir: "../../dist/renderer"
  },
  server: {
    port: 6969,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/renderer"),
    },
  },
});

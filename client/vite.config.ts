import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   define: {
    'process.env.VITE_API': JSON.stringify(process.env.VITE_API)
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

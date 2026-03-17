import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  base: mode === "production" ? "/smart-cv-narrator/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Force Vite to emit assets (like small PNGs) as separate files
    // instead of inlining them as data URIs. This makes them appear in
    // dist/assets and is helpful for verifying deployment artifacts.
    assetsInlineLimit: 0,
  },
}));

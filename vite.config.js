import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "script",
      registerType: "autoUpdate",
      // pre-cache workbox options
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 2000, // handle warning on vendor.js bundle size
  },
});

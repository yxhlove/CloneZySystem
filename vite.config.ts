import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@/*": resolve(__dirname, "src/*"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {},
    },
  },
  server: {
    proxy: {
      "/base": {
        target: "http://127.0.0.1:8888",
        changeOrigin: true,
      },
    },
  },
});

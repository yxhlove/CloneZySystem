import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
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
    // proxy: {
    //   "/intelligent-web": {
    //     target: "http://192.168.60.123:80",
    //     changeOrigin: true,
    //   },
    // },
  },
});

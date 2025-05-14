import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 8000,
    proxy: {
      "/api": {
        target: "https://devsow.wpengine.com",
        changeOrigin: true,
        secure: true, // if your API uses HTTPS
        rewrite: (path) => path.replace(/^\/api/, "/wp-json/communities/all/"),
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "shell",

      remotes: {
        home: {
          external: "http://localhost:5001/assets/remoteEntry.js",
          from: "vite",
          format: "esm",
        },

        product: {
          external: "http://localhost:5002/assets/remoteEntry.js",
          from: "vite",
          format: "esm",
        },

        shop: {
          external: "http://localhost:5003/assets/remoteEntry.js",
          from: "vite",
          format: "esm",
        },
      },
    }),
  ],

  server: {
    port: 5000,
  },
});

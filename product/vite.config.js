import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "product",
      filename: "remoteEntry.js",

      exposes: {
        "./App": "./src/App.jsx",
      },
    }),
  ],

  server: {
    port: 5002,
  },

  preview: {
    port: 5002,
  },
});
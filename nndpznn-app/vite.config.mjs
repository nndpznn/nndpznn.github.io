import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => {
  return {
    assetsInclude: "**/*.JPG",
    server: { port: 3000 },
    build: {
      outDir: "build",
    },
    plugins: [react(), tailwindcss()],
  };
});

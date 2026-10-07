import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),

    ...(mode === "analyze"
      ? [
          visualizer({
            filename: "dist/bundle-analysis.html",
            open: true,
            gzipSize: true,
            brotliSize: true,
          }),
        ]
      : []),
  ],

  build: {
    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return undefined;
          }

          if (
            id.includes("react") ||
            id.includes("react-dom")
          ) {
            return "react";
          }

          if (id.includes("react-router")) {
            return "router";
          }

          if (id.includes("lucide-react")) {
            return "icons";
          }

          return undefined;
        },
      },
    },

    chunkSizeWarningLimit: 500,
  },
}));
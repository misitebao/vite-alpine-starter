import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: false,
      pages: [
        {
          // entry: "src/main.ts",
          filename: "index.html",
          template: "index.html",
          injectOptions: {
            data: {
              title: "Index",
            },
          },
        },
        {
          filename: "404.html",
          template: "404.html",
          injectOptions: {
            data: {
              title: "404",
            },
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});

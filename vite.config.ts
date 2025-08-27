import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: isProd ? "/widgets/spa" : "/",
    logLevel: "error",
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName: "[folder]_[local]--[hash:base64:5]",
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        react: path.resolve("./node_modules/react"),
        pages: path.resolve("./src/pages/"),
        shared: path.resolve("./src/shared/"),
        widgets: path.resolve("./src/widgets/"),
        features: path.resolve("./src/features/"),
        app: path.resolve("./src/app/"),
        src: path.resolve("./src/"),
      },
    },
    server: {
      host: env.HOST,
      port: 3000,
      open: true,
      allowedHosts: true,
      cors: true,
      watch: {
        usePolling: true,
      },
    },
    preview: {
      host: env.HOST,
      port: 3000,
      open: true,
      allowedHosts: true,
      cors: true,
      watch: {
        usePolling: true,
      },
    },
    build: {
      target: "esnext",
      minify: true,
      cssCodeSplit: true,
      modulePreload: true,
      manifest: true,
      outDir: "build",
      rollupOptions: {
        output: {
          chunkFileNames: "static/[name]-[hash].js",
          entryFileNames: "static/[name]-[hash].js",
          assetFileNames: "static/[name]-[hash][extname]",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
    define: {
      "process.browser": true,
      global: "window",
      "process.env": {},
    },
  };
});

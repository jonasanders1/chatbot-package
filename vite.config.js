import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: "./src/components/Chatbot.vue",
      name: "Chatbot",
      fileName: (format) => `chatbot.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  server: {
    open: true,
  },
});

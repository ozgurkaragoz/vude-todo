import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [
    Vue(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reportsDirectory: './src/tests/coverage'
    },
  },
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src')
    },
  }
});
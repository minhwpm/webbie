import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/Button/Button.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));

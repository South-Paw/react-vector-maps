import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  inject: ['./lib/react-shim.js'],
  metafile: true,
  sourcemap: true,
  splitting: false,
});

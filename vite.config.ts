import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [remix({
    publicPath: '/example',
    assetsBuildDirectory: 'dist',
    serverBuildPath: 'dist/server/index.js',
  }), tsconfigPaths()],
  base: '/example'
});

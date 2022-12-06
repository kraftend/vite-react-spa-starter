import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import postcssViewportHeightCorrection from 'postcss-viewport-height-correction';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer(), postcssViewportHeightCorrection()],
    },
  },
  plugins: [viteCommonjs({ include: ['tailwind.config.cjs'] }), react(), tsconfigPaths()],
});

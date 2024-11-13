import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer';


export default defineConfig({
  plugins: [react(), visualizer({ open: false })],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name?.split('.').pop();

          if (extType === 'css') {
            return 'assets/css/[name]-[hash][extname]';
          } else if (extType === 'png' || extType === 'jpg' || extType === 'jpeg' || extType === 'svg') {
            return 'assets/images/[name]-[hash][extname]';
          } else if (extType === 'woff' || extType === 'woff2' || extType === 'ttf' || extType === 'otf' || extType === 'eot') {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return '[name]-[hash][extname]';
        }
      }
    }
  }
});

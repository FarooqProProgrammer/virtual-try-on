import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name?.split('.').pop();

          if (extType === 'css') {
            return 'css/[name]-[hash][extname]';
          } else if (extType === 'png' || extType === 'jpg' || extType === 'jpeg' || extType === 'svg') {
            return 'images/[name]-[hash][extname]';
          } else if (extType === 'woff' || extType === 'woff2' || extType === 'ttf' || extType === 'otf' || extType === 'eot') {
            return 'fonts/[name]-[hash][extname]';
          }
          return '[name]-[hash][extname]';
        }
      }
    }
  }
});

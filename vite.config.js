import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: new URL('./index.html', import.meta.url).pathname,
        confirm: new URL('./views/confirm.html', import.meta.url).pathname,
        pickup: new URL('./views/pickup.html', import.meta.url).pathname,
        spectate: new URL('./views/spectate.html', import.meta.url).pathname,
      },
    },
  },
});

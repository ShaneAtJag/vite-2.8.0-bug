import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const testBoolean = false;

/*
This is incorrectly being interpreted as "" | "esbuild"
instead of "esbuild".
*/
const testComparisonResult = !testBoolean && 'esbuild';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    /*
    This is also incorrectly being interpreted as "" | "esbuild"
    instead of "esbuild".
    */
    minify: !process.env.TAURI_DEBUG && 'esbuild',
  },
});

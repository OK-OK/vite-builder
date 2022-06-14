import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import compressPlugin from 'vite-plugin-compression'
import { terser } from "rollup-plugin-terser"
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    compressPlugin(),
    terser(),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: "sass",
      })],
    }),
  ],
  server: {
    open: true,
    host: 'localhost'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/style/theme.scss" as *;`,
      },
    },
  },
  resolve: {
    extensions: ['.scss', '.vue', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})

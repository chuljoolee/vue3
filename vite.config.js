import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => {
  const isGithub = process.env.DEPLOY_TARGET === 'GITHUB'

  return {
    base: isGithub ? '/vue3/' : '/', // GitHub Pages 배포 시 base 경로 필수
    plugins: [
      vue(),
      vueDevTools(),
    ],
    build: {
      outDir: 'dist/app',
      assetsDir: 'assets',
      sourcemap: false,
      target: 'es2015',
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/variables.scss";`,
        },
      },
    },
  }
})

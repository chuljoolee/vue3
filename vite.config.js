import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    // 빌드 결과물이 저장될 디렉토리
    outDir: 'dist/app', // <- 기본은 'dist', 여기서 'app'으로 커스터마이징

    // 정적 자산이 저장될 디렉토리
    assetsDir: 'assets', // 기본값 'assets', 필요시 변경 가능

    // source map 포함 여부 (디버깅용)
    sourcemap: false,

    // ES 모듈 타겟
    target: 'es2015',

    // 빌드 시 디렉토리 정리 여부
    emptyOutDir: true,

    // 라이브러리 형태로 빌드 시 사용
    // lib: { ... }, <- 필요시
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variables.scss";` // 공통 변수 자동 포함
      }
    }
  },
  // resolve: {
  //   alias: {
  //     '@': '/src',
  //   }
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       // 전역 변수 사용 시 필요
  //       additionalData: `@import "@/assets/scss/style.scss";`
  //     }
  //   }
  // },
})

<template>
  <!--<LoadingLayer />-->
  <component :is="layout"><RouterView /></component>
</template>

<script setup>
import { computed, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head'; // 혹은 @unhead/vue depending on setup

// 퍼블리싱용 로딩 레이어
//import LoadingLayer from '@/components/ui/layout/LoadingLayer.vue';

// 퍼블리싱 중심 레이아웃 컴포넌트 import
//import DefaultLayout from '@/layouts/DefaultLayout.vue';
//import NoneLayout from '@/layouts/NoneLayout.vue';
//import FullLayout from '@/layouts/FullLayout.vue';
import MainBenefitLayout from '@/layouts/MainBenefitLayout.vue';
//import DocumentLayout from '@/layouts/DocumentLayout.vue';

// HTML Head 설정
useHead({
  titleTemplate: (title) => (title ? `${title} | 마이사이트` : '마이사이트'),
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // 기타 공통 메타
  ],
});

// 라우트 및 레이아웃 매핑
const route = useRoute();

const layouts = {
  // default: DefaultLayout,
  // none: NoneLayout,
  // full: FullLayout,
  mainBenefit: MainBenefitLayout,
  //document: DocumentLayout,
};

// 레이아웃 선택 로직
const layout = computed(() => {
  return layouts[route.meta.layout] //|| DefaultLayout;
});

// 퍼블 확장을 위한 resize 등 기본 설정
const resize = () => {
  // 화면 리사이즈 시 레이아웃 동작 등 퍼블 제어용
};

onMounted(() => {
  window.addEventListener('resize', resize);
});

onUnmounted(() => {
  window.removeEventListener('resize', resize);
});

// 라우트 변경 감지(필요 시)
watch(route, () => {
  // 레이아웃 변경 트리거 등 확장 가능
});
</script>

<style scoped lang="scss">
// 공통 퍼블리싱용 스타일 확장 영역
</style>
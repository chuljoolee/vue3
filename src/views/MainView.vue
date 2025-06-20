<script setup>
import { useHead } from '@vueuse/head';

useHead({
  title: '메인 혜택 페이지',
  meta: [
    { name: 'description', content: '우리 서비스의 메인 혜택을 소개합니다.' },
    { property: 'og:title', content: '메인 혜택 - 마이사이트' },
  ],
});
</script>

<template>
  <div>혜택 내용</div>
</template>
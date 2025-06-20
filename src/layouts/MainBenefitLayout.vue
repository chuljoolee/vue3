<!-- MainBenefitLayout.vue -->
<template>
  <div class="main-layout">
    <MainHeader />
    <main><slot /></main>
    <MainFooter />
  </div>
</template>

<script setup>
import MainHeader from '@/layouts/main/MainHeader.vue';
import MainFooter from '@/layouts/main/MainFooter.vue';
</script>

<style scoped lang="scss">
.main-layout {
  background-color: #f4f4f4;
  // 전체 퍼블리싱 스타일
}
</style>
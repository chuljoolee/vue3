<template>
  <ContentContainer
    id="mainContent"
    name="main"
    width="auto"
    custom-class="main-content-wrapper"
    :custom-style="{ backgroundColor: '#f9f9f9' }"
  >
    <h2>콘텐츠 제목</h2>
    <p>여기에 페이지에 맞는 내용을 삽입합니다.</p>
  </ContentContainer>
</template>

<script setup>
import ContentContainer from '@/components/layouts/ContentContainer.vue';
</script>
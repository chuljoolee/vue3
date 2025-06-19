<template>
  <BaseLayout pageType="main" customClass="main-page">
    <template #header>
      <MainHeader />
    </template>

    <div>
      <h1>main 콘텐츠</h1>
      <p>여기에 콘텐츠가 들어갑니다.</p>
    </div>

    <template #footer>
      <MainFooter />
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/MainLayout.vue';
import MainHeader from '@/layouts/main/MainHeader.vue';
import MainFooter from '@/layouts/main/MainFooter.vue';

export default {
  components: {
    BaseLayout,
    MainHeader,
    MainFooter
  }
}
</script>
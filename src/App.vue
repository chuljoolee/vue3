<template>
  <BaseLayout pageType="main" customClass="main-page">
    <template #header>
      <MainHeader customClass="main-header"/>
    </template>

    <div :class="$style['text-1']">
      컨텐츠
    </div>

    <template #footer>
      <MainFooter customClass="inner-footer" />
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layouts/BaseLayout.vue';
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

<style module lang="scss">
.inner-footer {
  border-top:1px solid #000;
}
.main-header {
  margin: 0;
  padding: 0;
}
.text-1 {
  color: #eee;
}
</style>
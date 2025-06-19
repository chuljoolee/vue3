<template>
  <div class="tab-menu">
    <div class="tab-headers">
      <slot name="headers" :activeIndex="activeIndex" :setActive="setActive" />
    </div>

    <div class="tab-contents">
      <slot name="contents" :activeIndex="activeIndex" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 활성 탭 index 관리
const activeIndex = ref(0)

// 외부에서 탭 변경을 요청할 수 있게 함수 제공
const setActive = (index) => {
  activeIndex.value = index
}
</script>

<style scoped lang="scss">
.tab-menu {
  .tab-headers {
    border-bottom: 1px solid #ddd;
  }
  .tab-contents {
    padding: 16px;
    background-color: #f9f9f9;
  }
}
</style>
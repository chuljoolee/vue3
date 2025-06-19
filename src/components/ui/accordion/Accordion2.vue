<script setup>
import { ref, provide } from 'vue'

// 어떤 index가 열려 있는지를 관리
const openIndex = ref(null)
const setOpenIndex = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

provide('openIndex', openIndex)
provide('setOpenIndex', setOpenIndex)
</script>

<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<style scoped>
.accordion {
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
}
</style>
<!-- AccordionItem.vue -->
<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const toggle = () => isOpen.value = !isOpen.value
</script>

<template>
  <div class="accordion-item">
    <button class="accordion-header" @click="toggle">
      <slot name="title" />
      <span class="arrow" :class="{ open: isOpen }">▾</span>
    </button>
    <div v-show="isOpen" class="accordion-content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.accordion-item {
  border-top: 1px solid #ccc;

  &:first-child {
    border-top: none;
  }

  .accordion-header {
    width: 100%;
    padding: 1rem;
    font-weight: bold;
    background: #f5f5f5;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .accordion-content {
    padding: 1rem;
    background: #fff;
    border-top: 1px solid #eee;
  }

  .arrow {
    transition: transform 0.3s;
  }
  .arrow.open {
    transform: rotate(180deg);
  }
}
</style>
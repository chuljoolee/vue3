<script setup>
import { inject, computed } from 'vue'

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
})

const openIndex = inject('openIndex')
const setOpenIndex = inject('setOpenIndex')

// 본인이 열려야 하는 상태인지 계산
const isOpen = computed(() => openIndex.value === props.index)

const toggle = () => {
  setOpenIndex(props.index)
}
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

<style scoped>
.accordion-item {
  border-top: 1px solid #ccc;

  .accordion-header {
    width: 100%;
    padding: 1rem;
    font-weight: bold;
    background: #f9f9f9;
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

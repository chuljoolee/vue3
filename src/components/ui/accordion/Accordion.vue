<!-- Accordion.vue -->
<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.accordion {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
}
</style>
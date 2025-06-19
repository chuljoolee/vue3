<template>
  <li class="gnb-item" @mouseenter="open" @mouseleave="close">
    <div class="gnb-link" :class="{ active: isOpen }">
      <slot name="label" />
    </div>
    <div v-if="isOpen" class="gnb-sub">
      <slot name="submenu" />
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const open = () => (isOpen.value = true)
const close = () => (isOpen.value = false)
</script>

<style scoped lang="scss">
.gnb-item {
  position: relative;

  .gnb-link {
    padding: 10px 16px;
    font-weight: 500;
    color: #222;
    font-size: 16px;
    cursor: pointer;
    position: relative;

    &.active {
      color: #0088cc;

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #0088cc;
      }
    }
  }

  .gnb-sub {
    position: absolute;
    top: 43px;
    left: 0;
    width: 100vw;
    background: #fff;
    padding: 30px 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;

    ul {
      display: flex;
      flex-direction: column;
      gap: 14px;

      li a {
        font-size: 15px;
        color: #333;
        transition: color 0.3s;

        &:hover {
          font-weight: bold;
        }
      }
    }
  }
}
</style>

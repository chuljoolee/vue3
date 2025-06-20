<template>
  <button
    :class="[
      $style['menu-button'],
      { [$style['is-active']]: isActive },
      customClass,
    ]"
    @click="handleClick"
    :id="id"
    :name="name"
  >
    <slot />
  </button>
</template>

<script>
import { inject, computed } from 'vue'

export default {
  name: 'ButtonMenuItem',
  props: {
    index: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const activeIndex = inject('menuActiveIndex')
    const setActiveIndex = inject('setMenuActiveIndex')

    const isActive = computed(() => activeIndex?.value === props.index)

    const handleClick = () => {
      setActiveIndex(props.index)
    }

    return {
      isActive,
      handleClick,
    }
  },
}
</script>

<style module lang="scss">
.menu-button {
  padding: 10px 20px;
  background: white;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: all 0.3s;

  &.is-active {
    border-color: #007BFF;
    color: #007BFF;
  }
}
</style>
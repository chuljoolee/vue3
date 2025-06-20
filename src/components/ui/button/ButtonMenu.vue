<template>
  <div
    :id="id"
    :class="[$style['menu-container'], customClass]"
    :name="name"
  >
    <slot />
  </div>
</template>

<script>
import { provide, ref } from 'vue'

export default {
  name: 'ButtonMenu',
  props: {
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
  setup() {
    const activeIndex = ref(null)

    const setActive = (index) => {
      activeIndex.value = index
    }

    provide('menuActiveIndex', activeIndex)
    provide('setMenuActiveIndex', setActive)

    return {
      activeIndex,
    }
  },
}
</script>

<style module lang="scss">
.menu-container {
  display: flex;
  gap: 8px;
}
</style>
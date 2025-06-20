<template>
  <div
    :id="id"
    :name="name"
    :class="[
      $style['align-block'],
      $style[`align--${align}`],
      customClass,
    ]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AlignBlock',
  props: {
    name: String,
    id: String,
    customClass: {
      type: [String, Array, Object],
      default: '',
    },
    align: {
      type: String,
      default: 'left',
      validator: (val) => ['left', 'center', 'right', 'full'].includes(val),
    },
  },
};
</script>

<style module lang="scss">
.align-block {
  width: 100%;

  &.align--left {
    text-align: left;
  }

  &.align--center {
    text-align: center;
  }

  &.align--right {
    text-align: right;
  }

  &.align--full {
    display: flex;
    justify-content: stretch;
  }
}
</style>
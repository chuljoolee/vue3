<template>
  <div
    :id="id"
    :class="[
      'wrap-col',
      `col-${col}`,
      sass,
      customClass
    ]"
    :name="name"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WrapCol',
  props: {
    col: {
      type: [Number, String],
      default: 2, // 기본은 col-2
      validator: (value) => [2, 3, 4].includes(Number(value))
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    customClass: {
      type: [String, Array, Object],
      default: ''
    },
    sass: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return { ...props };
  }
};
</script>

<style lang="scss" scoped>
.wrap-col {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  &.col-2 > * {
    flex: 0 0 calc(50% - 0.5rem);
  }

  &.col-3 > * {
    flex: 0 0 calc(33.3333% - 0.66rem);
  }

  &.col-4 > * {
    flex: 0 0 calc(25% - 0.75rem);
  }
}
</style>
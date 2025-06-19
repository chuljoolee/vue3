<template>
  <div :class="[$style['radio-group'], customClass]">
    <slot />
  </div>
</template>

<script>
import { computed, provide } from 'vue';

export default {
  name: 'RadioGroup',
  props: {
    name: String,
    modelValue: String,
    customClass: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const updateValue = (value) => emit('update:modelValue', value);

    provide('radioGroup', {
      name: props.name,
      modelValue: computed(() => props.modelValue), // ✅ reactive
      updateValue,
    });

    return {};
  },
};
</script>

<style module lang="scss">
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
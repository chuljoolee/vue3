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
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  provide() {
    return {
      radioGroup: {
        name: this.name,
        modelValue: this.modelValue,
        updateValue: this.updateValue,
      },
    };
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
    },
  },
  //보더값
  setup(props, { emit }) {
    const updateValue = (value) => {
      emit('update:modelValue', value);
    };

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
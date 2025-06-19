<template>
  <div :class="[$style['checkbox-group'], customClass]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'checkboxGroup',
  props: {
    type: {
      type: String,
      default: 'checkbox', // 또는 'radio'
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [Array, String],
      default: () => ([]),
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  provide() {
    return {
      checkboxGroup: {
        type: this.type,
        name: this.name,
        modelValue: this.modelValue,
        updateValue: this.updateValue,
      },
    };
  },
  emits: ['update:modelValue'],
  methods: {
    updateValue(value, checked) {
      if (this.type === 'checkbox') {
        const newValue = [...this.modelValue];
        if (checked) {
          if (!newValue.includes(value)) newValue.push(value);
        } else {
          const index = newValue.indexOf(value);
          if (index > -1) newValue.splice(index, 1);
        }
        this.$emit('update:modelValue', newValue);
      } else {
        this.$emit('update:modelValue', value);
      }
    },
  },
};
</script>

<style lang="scss" module>
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>

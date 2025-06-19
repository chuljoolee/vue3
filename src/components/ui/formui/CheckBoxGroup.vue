<template>
  <div :class="[$style['checkbox-group'], customClass]">
    <slot />
  </div>
</template>

<script>
import { computed, provide } from 'vue';

export default {
  name: 'CheckBoxGroup',
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
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    /**
     * 자식 컴포넌트에 전달할 모델 및 핸들러 제공
     */
    const updateValue = (value, checked) => {
      if (props.type === 'checkbox') {
        const newValue = [...props.modelValue];
        if (checked) {
          if (!newValue.includes(value)) newValue.push(value);
        } else {
          const index = newValue.indexOf(value);
          if (index > -1) newValue.splice(index, 1);
        }
        emit('update:modelValue', newValue);
      } else {
        emit('update:modelValue', value);
      }
    };

    /**
     * provide를 통해 하위 컴포넌트와 연결
     * - modelValue는 computed로 reactive 전달
     */
    provide('checkboxGroup', {
      type: props.type,
      name: props.name,
      modelValue: computed(() => props.modelValue),
      updateValue,
    });

    return {};
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
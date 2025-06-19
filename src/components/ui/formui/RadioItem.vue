<template>
  <div :class="[$style['radio-item'], { [$style['checked']]: isChecked }]">
    <label :for="id" :class="[$style['radio-label'], { [$style['disabled']]: disabled }]">
      <input
        type="radio"
        :id="id"
        :name="radioGroup?.name"
        :value="value"
        :checked="isChecked"
        :disabled="disabled"
        :class="$style['radio-input']"
        @change="onChange"
      />
      <span :class="$style['radio-icon']"></span>
      <span :class="$style['radio-text']">
        <slot />
      </span>
    </label>
  </div>
</template>

<script>
import { inject, computed } from 'vue';

export default {
  name: 'RadioItem',
  props: {
    id: { type: String, required: true },
    value: { type: String, required: true },
    disabled: { type: Boolean, default: false },
  },
  setup(props) {
    const radioGroup = inject('radioGroup');

    //const isChecked = computed(() => radioGroup?.modelValue === props.value);
    const isChecked = computed(() => {
      return radioGroup?.modelValue?.value === props.value;
    });

    const onChange = () => {
      radioGroup?.updateValue(props.value);
    };

    return { radioGroup, isChecked, onChange };
  },
};
</script>

<style module lang="scss">
.radio-item {
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  padding: 8px;
  border-radius: 6px;
  transition: border 0.2s ease;
}

// ✅ 체크된 경우 강조 스타일
.checked {
  border: 1px solid #007aff;
  background-color: #f5faff;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  width: 100%;

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.radio-input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.radio-icon {
  width: 20px;
  height: 20px;
  border: 2px solid #999;
  border-radius: 50%;
  background-color: #fff;
  position: relative;
  flex-shrink: 0;

  input[type='radio']:checked + &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    background-color: #007aff;
    border-radius: 50%;
  }

  input:disabled + & {
    border-color: #ccc;
    background-color: #f5f5f5;
  }

  input:disabled:checked + &::after {
    background-color: #aaa;
  }
}

.radio-text {
  color: #333;
}
</style>
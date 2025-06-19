<template>
  <div :class="[$style['checkbox-item'], { [$style['checked']]: isChecked }]">
    <label :for="id" :class="[$style['checkbox-label'], { [$style['disabled']]: disabled }]">
      <input
        :id="id"
        :type="group?.type"
        :name="group?.name"
        :value="value"
        :checked="isChecked"
        :disabled="disabled"
        @change="onChange"
        :class="$style['checkbox-input']"
        v-bind="$attrs"
      />
      <span :class="$style['checkbox-icon']" />
      <span><slot /></span>
    </label>
  </div>
</template>

<script>
import { inject, computed } from 'vue';

export default {
  name: 'CheckBoxItem',
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const group = inject('checkboxGroup');

    const isChecked = computed(() => {
      if (!group) return false;
      if (group.type === 'checkbox') {
        return Array.isArray(group.modelValue.value) && group.modelValue.value.includes(props.value);
      } else {
        return group.modelValue.value === props.value;
      }
    });

    const onChange = (e) => {
      group?.updateValue(props.value, e.target.checked);
    };

    return {
      group,
      isChecked,
      onChange,
    };
  },
};
</script>

<style lang="scss" module>
.checkbox-item {
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 6px;
  transition: border-color 0.2s, background-color 0.2s;
  padding: 8px;
}

.checked {
  border-color: #143b75;
  background-color: #f0f8ff;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  width: 100%;
}

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.checkbox-icon {
  width: 20px;
  height: 20px;
  border: 2px solid #999;
  border-radius: 4px;
  background-color: #fff;
  display: inline-block;
  position: relative;
  flex-shrink: 0;
  transition: all 0.2s;

  // 체크 상태 (checkbox)
  input[type='checkbox']:checked + &::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 0px;
    width: 8px;
    height: 14px;
    border: solid #007aff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  // 라디오 상태
  input[type='radio'] + & {
    border-radius: 50%;
  }

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

  // disabled 상태
  input:disabled + & {
    border-color: #ccc;
    background-color: #f5f5f5;
  }

  input:disabled:checked + &::after {
    background-color: #aaa;
  }
}
</style>
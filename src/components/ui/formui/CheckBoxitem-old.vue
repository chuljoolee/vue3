<template>
  <div :class="[$style['checkbox-item'], { [$style['checked']]: isChecked }]">
    <label :for="id" :class="$style['checkbox-label']">
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
      <slot />
    </label>
  </div>
</template>

<script>
import { inject, computed } from 'vue';

export default {
  name: 'checkboxItem',
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
        return Array.isArray(group.modelValue) && group.modelValue.includes(props.value);
      }
      return group.modelValue === props.value;
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
}

.checkbox-item.checked {
  border: 1px solid #143b75;
  border-radius: 8px;
  padding: 8px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 8px;

  /*disabled 상태 스타일*/
  input:disabled + .checkbox-icon {
    border-color: #ccc;
    background-color: #f5f5f5;
  }

  input:disabled + .checkbox-icon::after {
    border-color: #aaa;
    background-color: #aaa;
  }

  input:disabled ~ * {
    color: #aaa;
  }

  input:disabled {
    cursor: not-allowed;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.checkbox-input {
  /*접근성을 위해 화면 밖으로 숨김 (display: none은 피함) */
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

/*
.checkradio-item:has(input:checked) {
  border: 2px solid #007aff;
  border-radius: 8px;
}
*/

.checkbox-icon {
  width: 20px;
  height: 20px;
  border: 2px solid #999;
  border-radius: 4px;
  background-color: #fff;
  display: inline-block;
  position: relative;
  transition: background-color 0.2s, border-color 0.2s;

  /*체크박스 상태*/ 
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

  /*라디오 상태*/
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
}

</style>
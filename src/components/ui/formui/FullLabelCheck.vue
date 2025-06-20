<template>
  <label
    :for="id"
    :class="[
      $style['full-check'],
      disabled ? $style['disabled'] : '',
      customClass
    ]"
  >
    <span class="label-text">
      <slot>체크박스 항목</slot>
    </span>
    <input
      type="checkbox"
      :id="id"
      :name="name"
      :value="value"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
  </label>
</template>

<script>
export default {
  name: 'FullLabelCheck',
  props: {
    id: String,
    name: String,
    value: [String, Number, Boolean],
    modelValue: Boolean,
    disabled: Boolean,
    customClass: String, // 확장 클래스
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return {};
  },
};
</script>

<style module lang="scss">
.full-check {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.75em 1em;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    accent-color: #007bff; // 기본 체크 색상
  }

  &.disabled {
    background-color: #f9f9f9;
    cursor: not-allowed;

    input[type='checkbox'] {
      accent-color: #bbb; // 비활성 시 회색
    }

    .label-text {
      color: #999;
    }
  }
}

.label-text {
  flex: 1;
  font-size: 1rem;
}
</style>

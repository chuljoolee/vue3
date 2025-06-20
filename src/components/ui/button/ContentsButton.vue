<template>
  <button
    :id="id"
    :name="name"
    :class="[$style.button, customClass]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ContentsButton',
  props: {
    name: String,
    id: String,
    class: String,
    customClass: String,
    disabled: Boolean,
  },
  setup() {
    return {};
  },
};
</script>

<style module lang="scss">
.button {
  width: 100%;
  padding: 12px 16px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #007aff;
  }

  &:disabled {
    background-color: #f5f5f5;
    border-color: #ddd;
    color: #aaa;
    cursor: not-allowed;
  }
}
</style>
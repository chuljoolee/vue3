<template>
  <label :class="['checkbox-wrapper', { checked: modelValue }]" @click="toggle">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span class="checkbox-custom"></span>
    <slot />
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue'])

function toggle(e) {
  e.preventDefault()
  emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped>
.checkbox-wrapper {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}
.checkbox-wrapper input {
  display: none;
}
.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin-right: 8px;
  position: relative;
}
.checkbox-wrapper.checked .checkbox-custom::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: #2196f3;
  top: 4px;
  left: 4px;
  border-radius: 2px;
}
</style>
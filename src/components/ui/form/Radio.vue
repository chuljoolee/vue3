<template>
  <label :class="['radio-wrapper', { selected: modelValue === value }]" @click="select">
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
    />
    <span class="radio-custom"></span>
    <slot />
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: [String, Number],
  value: [String, Number],
  name: String,
})
const emit = defineEmits(['update:modelValue'])

function select(e) {
  e.preventDefault()
  emit('update:modelValue', props.value)
}
</script>

<style scoped>
.radio-wrapper {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}
.radio-wrapper input {
  display: none;
}
.radio-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #aaa;
  border-radius: 50%;
  margin-right: 8px;
  position: relative;
}
.radio-wrapper.selected .radio-custom::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: #2196f3;
  border-radius: 50%;
  top: 4px;
  left: 4px;
}
</style>
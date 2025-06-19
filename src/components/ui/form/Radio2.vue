<template>
  <label :for="id" class="radio-wrapper">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
    />
    <span class="radio-custom"></span>
    <span class="radio-label"><slot /></span>
  </label>
</template>

<script setup>
const props = defineProps({
  id: String,
  name: String,
  value: [String, Number],
  modelValue: [String, Number],
})
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
.radio-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  user-select: none;
  font-size: 16px;
  line-height: 1.5;
}

.radio-wrapper input {
  display: none;
}

.radio-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #999;
  border-radius: 50%;
  position: relative;
  transition: all 0.2s ease;
  background-color: #fff;
}

.radio-wrapper input:checked + .radio-custom::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2196f3;
}
</style>
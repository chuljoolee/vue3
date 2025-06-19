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
    <div class="radio-slot-content">
      <slot />
    </div>
  </label>
</template>

<script setup>
const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  value: { type: [String, Number], required: true },
  modelValue: [String, Number],
})
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
.radio-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  padding: 12px 0;
}

input {
  display: none;
}

.radio-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #bbb;
  border-radius: 50%;
  background: #fff;
  position: relative;
}

input:checked + .radio-custom::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 8px;
  height: 8px;
  background: #007aff;
  border-radius: 50%;
}

.radio-slot-content {
  flex: 1;
}
</style>
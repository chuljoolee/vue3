<template>
  <label :for="id" :class="['radio-wrapper', { selected: modelValue === value }]">
    <input
      type="radio"
      :id="id"
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
  id: String,
  name: String,
  value: [String, Number],
  modelValue: [String, Number],
})
const emit = defineEmits(['update:modelValue'])
</script>
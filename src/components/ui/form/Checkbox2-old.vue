<template>
  <label :for="id" :class="['checkbox-wrapper', { checked: modelValue }]">
    <input
      type="checkbox"
      :id="id"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span class="checkbox-custom"></span>
    <slot />
  </label>
</template>

<script setup>
const props = defineProps({
  id: String,
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue'])
</script>
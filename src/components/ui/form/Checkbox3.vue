<template>
  <label :for="id" class="checkbox-wrapper">
    <input
      type="checkbox"
      :id="id"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span class="checkbox-custom"></span>
    <div class="checkbox-slot-content">
      <slot />
    </div>
  </label>
</template>

<script setup>
const props = defineProps({
  id: String,
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
  padding: 8px 0;
}

input {
  display: none;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background: #fff;
  position: relative;
}

input:checked + .checkbox-custom {
  background-color: #4CAF50;
  border-color: #4CAF50;
}

input:checked + .checkbox-custom::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 6px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-slot-content {
  flex: 1;
}
</style>
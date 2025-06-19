<template>
  <label :for="id" class="checkbox-wrapper">
    <input
      type="checkbox"
      :id="id"
      :name="name"
      :value="value"
      :checked="modelValue?.includes(value)"
      @change="toggle"
    />
    <span class="checkbox-custom"></span>
    <div class="checkbox-slot-content">
      <slot />
    </div>
  </label>
</template>

<script setup>
const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  value: { type: [String, Number], required: true },
  modelValue: { type: Array, default: () => [] },
})

const emit = defineEmits(['update:modelValue'])

function toggle(event) {
  const newValue = [...props.modelValue]
  if (event.target.checked) {
    newValue.push(props.value)
  } else {
    const index = newValue.indexOf(props.value)
    if (index !== -1) newValue.splice(index, 1)
  }
  emit('update:modelValue', newValue)
}
</script>

<style scoped>
.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  padding: 12px 0;
}

input {
  display: none;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #bbb;
  border-radius: 4px;
  background: #fff;
  position: relative;
}

input:checked + .checkbox-custom::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 7px;
  width: 5px;
  height: 10px;
  border: solid #007aff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-slot-content {
  flex: 1;
}
</style>
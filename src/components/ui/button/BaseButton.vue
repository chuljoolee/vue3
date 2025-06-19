<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="['base-button', variantClass, { 'is-disabled': disabled }, customClass]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'primary', // primary, secondary, etc
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: [String, Array, Object],
    default: '',
  },
})

const emit = defineEmits(['click'])

const variantClass = computed(() => {
  return `btn-${props.variant}`
})

function handleClick(event) {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.base-button {
  padding: 0.5em 1.2em;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
  border: none;
}

/* Variant styles */
.btn-primary {
  background-color: #007bff;
  color: white;
}
.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}
.btn-secondary:hover {
  background-color: #545b62;
}

.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>

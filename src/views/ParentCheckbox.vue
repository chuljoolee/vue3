<template>
  <div>
    <Checkbox2
      v-for="(item, index) in checkboxOptions"
      :key="item.id"
      :id="item.id"
      :modelValue="checkedValues.includes(item.value)"
      @update:modelValue="updateCheckbox(item.value, $event)"
    >
      {{ item.label }}
    </Checkbox2>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox2 from '@/components/ui/form/Checkbox2.vue'

const checkboxOptions = [
  { id: 'check1', value: 'apple', label: '사과' },
  { id: 'check2', value: 'banana', label: '바나나' },
  { id: 'check3', value: 'orange', label: '오렌지' },
]

const checkedValues = ref([])

function updateCheckbox(value, isChecked) {
  if (isChecked && !checkedValues.value.includes(value)) {
    checkedValues.value.push(value)
  } else if (!isChecked) {
    checkedValues.value = checkedValues.value.filter(v => v !== value)
  }
}
</script>
<template>
  <div>
    <Radio2
      v-for="(item, index) in radioOptions"
      :key="item.id"
      :id="item.id"
      :name="radioGroupName"
      :value="item.value"
      :modelValue="selectedRadio"
      @update:modelValue="val => selectedRadio = val"
    >
      {{ item.label }}
    </Radio2>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Radio2 from '@/components/ui/form//Radio2.vue'

const radioOptions = [
  { id: 'radio1', value: 'male', label: '1' },
  { id: 'radio2', value: 'female', label: '2' },
]

const selectedRadio = ref('')
const radioGroupName = 'gender'
</script>
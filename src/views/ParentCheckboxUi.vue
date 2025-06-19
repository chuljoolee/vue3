<template>
  <div>
    <Checkbox3
      v-for="item in checkboxList"
      :key="item.id"
      :id="item.id"
      :modelValue="checked.includes(item.value)"
      @update:modelValue="(val) => toggleCheckbox(item.value, val)"
    >
      <div class="option-content">
        <img :src="item.icon" alt="" class="option-icon" />
        <div class="option-text">
          <strong>{{ item.label }}</strong>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </Checkbox3>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox3 from '@/components/ui/form/Checkbox3.vue'

const checkboxList = [
  {
    id: 'chk1',
    value: 'apple',
    label: '사과',
    description: '달콤한 과일입니다.',
    icon: '/img/apple.png',
  },
  {
    id: 'chk2',
    value: 'banana',
    label: '바나나',
    description: '에너지를 채워줘요.',
    icon: '/img/banana.png',
  },
]

const checked = ref([])

function toggleCheckbox(value, isChecked) {
  if (isChecked) {
    checked.value.push(value)
  } else {
    checked.value = checked.value.filter((v) => v !== value)
  }
}
</script>

<style scoped>
.option-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.option-icon {
  width: 32px;
  height: 32px;
  object-fit: cover;
}

.option-text p {
  font-size: 13px;
  color: #666;
}
</style>
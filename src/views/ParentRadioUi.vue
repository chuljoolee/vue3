<template>
  <div>
    <Radio3
      v-for="item in radioList"
      :key="item.id"
      :id="item.id"
      :name="radioGroupName"
      :value="item.value"
      :modelValue="selected"
      @update:modelValue="(val) => selected = val"
    >
      <div class="option-content">
        <img :src="item.icon" alt="" class="option-icon" />
        <div class="option-text">
          <strong>{{ item.label }}</strong>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </Radio3>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Radio3 from '@/components/ui/form/Radio3.vue'

const radioGroupName = 'fruits'

const radioList = [
  {
    id: 'radio1',
    value: 'apple',
    label: '사과',
    description: '새콤달콤한 과일',
    icon: '/img/apple.png',
  },
  {
    id: 'radio2',
    value: 'banana',
    label: '바나나',
    description: '탄수화물과 칼륨 풍부',
    icon: '/img/banana.png',
  },
  {
    id: 'radio3',
    value: 'grape',
    label: '포도',
    description: '달콤한 보랏빛 과일',
    icon: '/img/grape.png',
  },
]

const selected = ref('')
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
  border-radius: 4px;
}

.option-text p {
  font-size: 13px;
  color: #666;
  margin: 0;
}
</style>
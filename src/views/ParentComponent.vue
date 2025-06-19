<template>
  <div>
    <h3>체크박스</h3>
    <Checkbox v-model="checked">동의합니다</Checkbox>

    <h3>라디오 버튼 </h3>
    <Radio v-model="selected" name="gender" value="male">남자</Radio>
    <Radio v-model="selected" name="gender" value="female">여자</Radio>

    <p>선택된 성별: {{ selected }}</p>
  </div>
</template>

<script setup>
import Checkbox from '@/components/ui/form/Checkbox.vue'
import Radio from '@/components/ui/form/Radio.vue'
import { ref } from 'vue'

const checked = ref(false)
const selected = ref('')
</script>
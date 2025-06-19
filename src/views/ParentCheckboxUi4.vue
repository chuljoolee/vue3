<template>
  <div class="checkbox-list">
    <Checkbox4
      id="option_news"
      name="marketing"
      value="news"
      :modelValue="selected"
      @update:modelValue="(val) => selected = val"
    >
      <div class="checkbox-option">
        <div class="option-icon">option-icon</div>
       <!-- <img src="/img/news.png" class="option-icon" />-->
        <div>
          <strong>뉴스 수신 동의</strong>
          <p>이벤트 및 업데이트 정보를 받아보세요</p>
        </div>
      </div>
    </Checkbox4>

    <Checkbox4
      id="option_sms"
      name="marketing"
      value="sms"
      :modelValue="selected"
      @update:modelValue="(val) => selected = val"
    >
      <div class="checkbox-option">
        <svg class="option-icon" viewBox="0 0 24 24" width="24" height="24">
          <!-- 아이콘 -->
        </svg>
        <div>
          <strong>SMS 수신</strong>
          <p>문자 메시지로 할인 소식을 받아볼 수 있어요</p>
        </div>
      </div>
    </Checkbox4>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox4 from '@/components/ui/form/Checkbox4.vue'

const selected = ref([]) // 여러 값이 들어갈 수 있으므로 배열
</script>

<style scoped>
.checkbox-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.checkbox-option {
  display: flex;
  align-items: center;
  gap: 10px;
}

.option-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
}

.checkbox-option p {
  font-size: 13px;
  color: #666;
  margin: 0;
}
</style>

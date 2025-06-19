<template>
  <div class="radio-list">
    <RadioUi
      id="pay_kakao"
      name="payment"
      value="kakao"
      :modelValue="selected"
      @update:modelValue="(val) => selected = val"
    >
      <div class="radio-option">
        <!--<img src="/img/kakao.png" alt="카카오페이" class="option-icon" />-->
        <div  class="option-icon">kakao</div>
        <div class="option-info">
          <strong>카카오페이</strong>
          <p>카카오톡으로 간편 결제</p>
        </div>
      </div>
    </RadioUi>

    <RadioUi
      id="pay_naver"
      name="payment"
      value="naver"
      :modelValue="selected"
      @update:modelValue="(val) => selected = val"
    >
      <div class="radio-option">
        <!--<img src="/img/naver.png" alt="네이버페이" class="option-icon" />-->
        <div  class="option-icon">naver</div>
        <div class="option-info">
          <strong>네이버페이</strong>
          <p>네이버 아이디로 빠르게 결제</p>
        </div>
      </div>
    </RadioUi>

    <RadioUi
      id="pay_card"
      name="payment"
      value="card"
      :modelValue="selected"
      @update:modelValue="(val) => selected = val"
    >
      <div class="radio-option">
        <svg class="option-icon" viewBox="0 0 24 24" width="24" height="24">
          <!-- 카드 아이콘 -->
        </svg>
        <div class="option-info">
          <strong>신용카드</strong>
          <p>모든 국내외 카드 사용 가능</p>
        </div>
      </div>
    </RadioUi>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RadioUi from '@/components/ui/form/Radio4.vue'

const selected = ref('')
</script>

<style scoped>
.radio-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-option {
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

.option-info p {
  font-size: 13px;
  margin: 0;
  color: #666;
}
</style>
<template>
  <button @click="isPopupOpen = true">팝업 열기</button>

  <BasePopup v-model:visible="isPopupOpen" title="커스텀 제목" @confirm="handleConfirm">
    <template #default>
      <p>여기에 원하는 콘텐츠 삽입</p>
      <input type="text" placeholder="예: 이름 입력" />
    </template>

    <template #footer>
      <button @click="isPopupOpen = false">취소</button>
      <button @click="handleConfirm">확인</button>
    </template>
  </BasePopup>
</template>

<script setup>
import { ref } from 'vue'
import BasePopup from '@/components/ui/layer/BasePopup.vue'

const isPopupOpen = ref(false)

const handleConfirm = () => {
  alert('확인 클릭됨')
  isPopupOpen.value = false
}
</script>

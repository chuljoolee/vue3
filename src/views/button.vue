<template>
  <div>
    <BaseButton variant="primary" @click="handleSubmit" customClass="w-full text-lg">
      제출하기
    </BaseButton>

    <BaseButton variant="etc" @click="handleSubmit" customClass="w-full text-lg"> etc </BaseButton>

    <BaseButton variant="secondary" :disabled="true" customClass="mt-4"> 비활성 버튼 </BaseButton>
  </div>
</template>

<script setup>
import BaseButton from '@/components/ui/button/BaseButton.vue'
</script>

<style scoped lang="scss"></style>

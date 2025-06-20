<template>
  <FullLabelCheck
    id="agree"
    name="agreement"
    v-model="agree"
    :disabled="false"
  >
    개인정보 제공에 동의합니다.
</FullLabelCheck>
</template>

<script setup>
import FullLabelCheck from '@/components/ui/formui/FullLabelCheck.vue'
</script>
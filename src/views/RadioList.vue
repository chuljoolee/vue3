<template>
  <div>
    <BoxCheckRadioGroup
      v-model="selectedFruit"
      :options="[
        { label: '사과', value: 'apple' },
        { label: '바나나', value: 'banana' },
        { label: '포도', value: 'grape' }
      ]"
    />
    <p>선택한 과일: {{ selectedFruit }}</p>
  </div>
</template>

<script>
import BoxCheckRadioGroup from '@/components/ui/formbox/BoxCheckRadioGroup.vue';

export default {
  components: { BoxCheckRadioGroup },
  data() {
    return {
      selectedFruit: 'apple',
    };
  },
};
</script>
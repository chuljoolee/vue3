<template>
  <RadioGroup name="gender" v-model="selectedGender">
    <RadioItem id="radio-male" value="male"> 선택1</RadioItem>
    <RadioItem id="radio-female" value="female">선택2</RadioItem>
    <RadioItem id="radio-none" value="none" :disabled="true">선택 안 함</RadioItem>
  </RadioGroup>
</template>

<script>
import RadioGroup from '@/components/ui/formui/RadioGroup.vue';
import RadioItem from '@/components/ui/formui/RadioItem.vue';

export default {
  components: { RadioGroup, RadioItem },
  data() {
    return {
      selectedGender: '',
    };
  },
};
</script>
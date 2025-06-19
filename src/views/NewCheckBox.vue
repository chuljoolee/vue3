<template>
  <CheckRadioGroup
    type="checkbox"
    name="agreeOptions"
    v-model="selected"
  >
    <CheckRadioItem id="agree-1" value="terms">
      <!--이용약관 동의-->테스트-1
    </CheckRadioItem>

    <CheckRadioItem id="agree-2" value="privacy">
    <!--개인정보 수집 동의 -->테스트-2
    </CheckRadioItem>

    <CheckRadioItem id="agree-3" value="marketing" :disabled="true">
      <!--마케팅 수신 동의-->테스트-3
    </CheckRadioItem>
  </CheckRadioGroup>
</template>

<script>
import CheckRadioGroup from '@/components/ui/formui/CheckBoxGroup.vue';
import CheckRadioItem from '@/components/ui/formui/CheckBoxitem.vue';

export default {
  components: {
    CheckRadioGroup,
    CheckRadioItem,
  },
  data() {
    return {
      selected: [],
    };
  },
};
</script>

<style lang="scss" module>
</style>
<template>
  <div class="box-check">
    <input
      type="radio"
      class="sr-only"
      :id="id"
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
    />

    <BoxCheckObjectRadio />
    <BoxCheckLabel>{{ label }}</BoxCheckLabel>
  </div>
</template>

<script>
import { ref, provide } from 'vue';
import BoxCheckObjectRadio from '@/components/ui/formbox/BoxCheckObjectRadio.vue';
import BoxCheckLabel from '@/components/ui/formbox/BoxCheckLabel.vue';

export default {
  components: { BoxCheckObjectRadio, BoxCheckLabel },
  props: {
    value: String,
    label: String,
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(props) {
    const id = ref(`radio-${props.value}`);
    provide('boxCheckId', id);
    return { id };
  },
};
</script>
<template>
  <div class="box-check-group">
    <BoxCheckItem
      v-for="(item, index) in options"
      :key="index"
      :value="item.value"
      :label="item.label"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<script>
import { provide } from 'vue';
import BoxCheckItem from '@/components/ui/formbox/BoxCheckItem.vue';
import style from '@/assets/scss/boxCheck.module.scss';

export default {
  components: { BoxCheckItem },
  props: {
    options: { type: Array, required: true },
    modelValue: { type: String, default: '' },
  },
  emits: ['update:modelValue'],
  setup() {
    provide('boxCheckType', { value: 'radio' });
    provide('boxCheckstyleModule', style);
  },
};
</script>
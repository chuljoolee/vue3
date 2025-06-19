<script>
import { computed, inject } from 'vue';
import IconCheckL from '@/assets/images/icon/check-l.svg?component';

const defaultClassNames = () => ({
  object: '',
  objectInner: '',
});

export default {
  components: {
    IconCheckL,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
  },
  setup(props) {
    const styleModule = inject('boxCheckstyleModule');
    const type = inject('boxCheckType');
    const size = inject('boxCheckSize');

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      type,
      size,
      styleModule,
      customClassNames,
    };
  },
};
</script>

<template>
  <span :class="[styleModule['box-check__object'], customClassNames.object]">
    <span
      :class="[
        styleModule['box-check__object-inner'],
        customClassNames.objectInner,
      ]"
    >
      <IconCheckL v-if="type.value === 'checkbox'" />
    </span>
  </span>
</template>
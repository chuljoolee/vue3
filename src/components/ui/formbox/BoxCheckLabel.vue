<script>
import { computed, inject } from 'vue';

const defaultClassNames = () => ({
  label: '',
});

export default {
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
    const id = inject('boxCheckId');

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    return {
      styleModule,
      id,
      customClassNames,
    };
  },
};
</script>

<template>
  <label
    :for="id.value"
    :class="[styleModule['box-check__label'], customClassNames.label]"
  >
    <slot />
  </label>
</template>
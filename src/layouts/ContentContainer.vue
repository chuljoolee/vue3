<template>
  <section
    :id="id"
    :name="name"
    :class="[$style['container'], customClass]"
    :style="containerStyle"
  >
    <slot />
  </section>
</template>

<script>
export default {
  name: 'ContentContainer',
  props: {
    id: { type: String, default: null },
    name: { type: String, default: null },
    width: { type: String, default: '600px' }, // 'auto'도 허용
    customClass: { type: [String, Array, Object], default: '' },
    customStyle: { type: Object, default: () => ({}) }, // style 확장 가능
  },
  computed: {
    containerStyle() {
      return {
        width: this.width,
        ...this.customStyle,
      };
    },
  },
};
</script>

<style module lang="scss">
.container {
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>

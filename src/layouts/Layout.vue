<template>
  <div :id="id" :class="[$style.layout, customClass]">
    <div :class="$style.header">
      <slot name="header" />
    </div>

    <main :class="[$style.main, pageTypeClass]">
      <div :class="$style['page-contents']">
        <slot />
      </div>
    </main>

    <div :class="$style.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout',
  props: {
    id: { type: String, default: null },
    customClass: { type: String, default: null }, // 퍼블 확장용
    pageType: { // main or sub
      type: String,
      default: 'main',
      validator: val => ['main', 'sub'].includes(val)
    }
  },
  computed: {
    pageTypeClass() {
      return this.$style[`type--${this.pageType}`]
    }
  }
}
</script>

<style module lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
  border-bottom: 1px solid #ddd;
}

.main {
  flex: 1 0 auto;
  padding: 40px 20px;

  &.type--main .page-contents {
    max-width: 1460px;
  }

  &.type--sub .page-contents {
    max-width: 1200px;
  }
}

.page-contents {
  margin: 0 auto;
  width: 100%;
}

.footer {
  flex-shrink: 0;
  background: #f8f8f8;
  padding: 20px;
  text-align: center;
}
</style>

<template>
  <div :id="id" :class="[$style.footerWrap, customClass]">
    <div :class="$style.inner">
      <slot>
        <p>© 2025 Your Company. All rights reserved.</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainFooter',
  props: {
    id: { type: String, default: null },
    customClass: { type: String, default: null }
  }
}
</script>

<style module lang="scss">
.footerWrap {
  background: #f8f8f8;
  border-top: 0px solid #ddd;
  padding: 30px 0px;
  text-align: center;
}

.footerWrap .inner {
  max-width: 1460px;
  margin: 0 auto;
  font-size: 14px;
  color: #e1e1e1;
}
</style>

<template>
  <footer :id="id" :class="[$style.footer, customClass]">
    <div :class="$style.inner">
      <slot>
        <p>© 2025 Your Company. All rights reserved.</p>
      </slot>
    </div>
  </footer>
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
.footer {
  background: #f8f8f8;
  border-top: 1px solid #ddd;
  padding: 30px 0px;
  text-align: center;
}

.inner {
  max-width: 1460px;
  margin: 0 auto;
  font-size: 14px;
  color: #555;
}
</style>

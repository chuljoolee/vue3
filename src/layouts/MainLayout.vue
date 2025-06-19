<template>
  <div :id="id" :class="[$style.layout, customClass]">
    <header :class="$style.header">
      <slot name="header" />
    </header>

    <main :class="$style.main">
      <div :class="$style.contents">
        <slot />
      </div>
    </main>

    <footer :class="$style.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  props: {
    id: { type: String, default: null },
    customClass: { type: String, default: null }
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
  background: #fff;
  z-index: 100;
  border-bottom: 1px solid #ddd;
}

.main {
  flex: 1;
  padding: 40px 20px;
}

.contents {
  max-width: 1460px;
  margin: 0 auto;
  width: 100%;
}

.footer {
  background: #f8f8f8;
  text-align: center;
  padding: 20px;
}
</style>
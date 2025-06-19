<template>
  <nav class="gnb">
    <ul class="gnb-list">
      <slot />
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'GnbMenu',
}
</script>

<style scoped lang="scss">
.gnb {
  border-bottom: 0px solid #eaeaea;
  position: relative;

  .gnb-list {
    display: flex;
    gap: 40px;
    padding: 0 20px;
    list-style: none;
    height: 60px;
    align-items: center;
    width: 100%;
  }
}
</style>

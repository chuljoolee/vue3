<template>
  <div v-if="visible" class="popup-overlay" @click.self="close">
    <div class="popup-content">
      <header class="popup-header">
        <slot name="header">
          <h2 class="default-title">{{ title }}</h2>
        </slot>
        <button class="close-btn" @click="close">×</button>
      </header>

      <section class="popup-body">
        <slot>
          <!-- 기본 콘텐츠 영역 -->
          <p>내용이 들어갑니다.</p>
        </slot>
      </section>

      <footer class="popup-footer">
        <slot name="footer">
          <!-- 기본 버튼 -->
          <button class="confirm-btn" @click="confirm">확인</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasePopup',
  props: {
    title: {
      type: String,
      default: '기본 제목',
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:visible', 'confirm'],
  setup(props, { emit }) {
    const close = () => emit('update:visible', false)
    const confirm = () => emit('confirm')

    return { close, confirm }
  },
}
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.popup-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  overflow: hidden;
}
.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f2f2f2;
}
.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
.popup-body {
  padding: 1rem;
}
.popup-footer {
  padding: 1rem;
  text-align: right;
}
.confirm-btn {
  padding: 0.5rem 1rem;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>

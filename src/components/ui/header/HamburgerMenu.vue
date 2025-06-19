<template>
  <div class="hamburger-menu-wrapper">
    <button @click="toggleMenu" class="hamburger-btn" aria-label="전체 메뉴 열기">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <div class="menu-overlay" v-if="isOpen" @click.self="toggleMenu">
      <div class="menu-content" @click="handleMenuClick">
        <slot>
          <!-- 기본 슬롯 -->
          <p>메뉴를 여기에 넣어주세요.</p>
        </slot>
        <button class="close-btn" @click="toggleMenu">x</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HamburgerMenu',
  setup() {
    const isOpen = ref(false)

    const toggleMenu = () => {
      isOpen.value = !isOpen.value
    }

    const handleMenuClick = (event) => {
      const target = event.target
      // a 태그를 클릭했을 경우 메뉴 닫기
      if (target.tagName === 'A') {
        isOpen.value = false
      }
    }

    return {
      isOpen,
      toggleMenu,
      handleMenuClick,
    }
  },
}
</script>

<style scoped>
.hamburger-menu-wrapper {
  position: relative;
  flex: none;
}

.hamburger-btn {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
.hamburger-btn .bar {
  height: 3px;
  background-color: #eee;
  width: 100%;
  border-radius: 2px;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
}

.menu-content {
  width: 300px;
  height: 100%;
  background-color: #fff;
  padding: 1rem;
  overflow-y: auto;
}

.close-btn {
  display: block;
  margin-top: 1rem;
  background-color: #eee;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>

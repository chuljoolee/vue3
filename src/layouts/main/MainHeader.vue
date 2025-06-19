<template>
  <header :id="id" :class="[$style.header, customClass]">
    <div :class="$style.inner">
      <slot name="logo">
        <h1 class="logo">LOGO</h1>
      </slot>

      <nav :class="$style.nav">
        <slot name="nav">
          <!-- 기본 네비게이션 예시 -->
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </slot>
      </nav>
      <!--햄버거 메뉴 슬롯 예시-->
      <div :class="$style.extra">
        <!--<slot name="extra" />-->
        <HamburgerMenu>
          <nav class="main-nav">
            <ul>
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" to="/radio-ui4"
                  >radio-ui4</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" to="/checkbox-ui4"
                  >checkbox-ui4</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" to="/tab">tab</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" to="/accview">AccView</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" to="/accview2"
                  >AccView2</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" to="/layer">layer</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" to="/button">button</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" to="/swiper">swiper</RouterLink>
              </li>
              
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" to="/new-checkbox">new-checkbox</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" to="/new-check-radio">new-check-radio</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" to="/Main">Main</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" to="/Sub">Sub</RouterLink>
              </li>
              
            </ul>
          </nav>
        </HamburgerMenu>
      </div>
      <!--//햄버거 메뉴 슬롯-->
      
    </div>
  </header>
</template>

<script setup>
import HamburgerMenu from '@/components/ui/header/HamburgerMenu.vue'
</script>
<script>
export default {
  name: 'MainHeader',
  props: {
    id: { type: String, default: null },
    customClass: { type: String, default: null }
  }
}
</script>

<style module lang="scss">
h1 {
  font-size: 0;
  flex: none;
  width: 163px;
  height: 38px;
}
.header {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ddd;
  position: relative;
  z-index: 100;
}

.inner {
  max-width: 1460px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  //justify-content: space-between;
}

.nav {
  flex: 1;
    min-width: 0;
    display: flex;
}
.nav ul {
  display: flex;
  gap: 20px;
}

.extra {
  display: flex;
  align-items: center;
}
.header > header {
  max-width: 1460px;
  margin: 0 auto;
}
.header ul li a{
  color: #ddd;
}
</style>
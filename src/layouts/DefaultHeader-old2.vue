<template>
  <div class="gnbWrap">
    <GnbMenu>
      <GnbItem>
        <template #label>
          <a>자동차</a>
        </template>
        <template #submenu>
          <ul>
            <li><a href="#">다이렉트 장기렌터카</a></li>
            <li><a href="#">다이렉트 오토리스</a></li>
            <li><a href="#">오토할부</a></li>
            <li><a href="#">오토론</a></li>
            <li><a href="#">중고차 오토론</a></li>
            <li><a href="#">오토승계</a></li>
          </ul>
        </template>
      </GnbItem>

      <GnbItem>
        <template #label>
          <a>개인대출</a>
        </template>
      </GnbItem>

      <GnbItem>
        <template #label>
          <a>의료기·설비</a>
        </template>
      </GnbItem>

      <GnbItem>
        <template #label>
          <a>마이페이지</a>
        </template>
      </GnbItem>
    </GnbMenu>
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
            <RouterLink class="nav-link" active-class="active" to="/accview2">AccView2</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/layer">layer</RouterLink>
          </li>
        </ul>
      </nav>
    </HamburgerMenu>
  </div>
</template>

<script setup>
import GnbMenu from '@/components/ui/header/GnbMenu.vue'
import GnbItem from '@/components/ui/header/GnbItem.vue'
import HamburgerMenu from '@/components/ui/header/HamburgerMenu.vue'
</script>
<style scoped>
.gnbWrap {
  display: flex;
  align-items: center;
  width: 1460px;
  margin: 0 auto -1px;
}
.main-nav ul {
  list-style: none;
  padding: 0;
}
.main-nav li {
  margin-bottom: 1rem;
}
.main-nav a {
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
}
</style>

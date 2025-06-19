<template>
  <div>
    <GnbMenu>
      <GnbItem>
        <template #label>
          <a href="#">1</a>
        </template>
        <template #submenu>
          <li><a href="#">서브메뉴 1-1</a></li>
          <li><a href="#">서브메뉴 1-2</a></li>
        </template>
      </GnbItem>

      <GnbItem>
        <template #label>
          <a href="#"> 2</a>
        </template>
        <template #submenu>
          <li><a href="#">서브메뉴 2-1</a></li>
          <li><a href="#">서브메뉴 2-2</a></li>
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

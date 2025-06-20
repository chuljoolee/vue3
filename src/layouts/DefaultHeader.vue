<template>
  <header class="header">
    <div class="gnbWrap">
      <GnbMenu>
        <GnbItem>
          <template #label>
            <a>1dep</a>
          </template>
          <template #submenu>
            <ul>
              <li><a href="#">2dep</a></li>
            </ul>
          </template>
        </GnbItem>

        <GnbItem>
          <template #label>
            <a>1dep</a>
          </template>
        </GnbItem>

        <GnbItem>
          <template #label>
            <a>1dep</a>
          </template>
        </GnbItem>

        <GnbItem>
          <template #label>
            <a>1dep</a>
          </template>
        </GnbItem>
      </GnbMenu>
      <div>
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
                <RouterLink class="nav-link" active-class="active" to="/accview"
                  >AccView</RouterLink
                >
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
                <RouterLink class="nav-link" active-class="active" to="/ContContainer">ContContainer</RouterLink>
              </li>
              
            </ul>
          </nav>
        </HamburgerMenu>
      </div>
    </div>
  </header>
</template>

<script setup>
import GnbMenu from '@/components/ui/header/GnbMenu.vue'
import GnbItem from '@/components/ui/header/GnbItem.vue'
import HamburgerMenu from '@/components/ui/header/HamburgerMenu.vue'
</script>
<style scoped>
.ml-auto {
  margin-left: auto;
}
.header {
  padding: 0 20px;
  border-bottom: 1px solid #eaeaea;
}
.gnbWrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*width: 1460px;*/
  max-width: 1460px;
  margin: 0 auto;
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

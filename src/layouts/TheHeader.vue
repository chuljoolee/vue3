<template>
  <header>
    <nav class="navbar">
      <ul class="nav-items">
        <li class="nav-item">
          <RouterLink class="nav-link" active-class="active" to="/">Home</RouterLink>
        </li>
        <!--
        <li class="nav-item">
          <RouterLink class="nav-link" active-class="active" to="/about">about</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" active-class="active" to="/parent-vue">parent-vue</RouterLink>
        </li>
        
        <li class="nav-item">
          <RouterLink class="nav-link" active-class="active" to="/parent-checkbox">checkbox</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" active-class="active" to="/parent-radio">parent-radio</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" active-class="active" to="/parent-checkbox-ui">parent-checkbox-ui</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" active-class="active" to="/parent-radio-ui">parent-radio-ui</RouterLink>
        </li>
        -->
        <!--
        <li class="nav-item">
          <RouterLink class="nav-link" active-class="active" to="/radio-ui4">radio-ui4</RouterLink>
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
        -->
        <!--
        <li class="nav-item">
          <RouterLink class="nav-link" active-class="active" to="/Toska">Toska</RouterLink>
        </li>
        -->
      </ul>
      <!--
      <form class="d-flex">
        <button class="btn btn-outline-success" type="button">btn</button>
      </form>
      -->
      <HamburgerMenu class="ml-auto">
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
            <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" to="/ContContainer">ContContainer</RouterLink>
              </li>
          </ul>
        </nav>
      </HamburgerMenu>
    </nav>
  </header>
</template>
<script setup>
import HamburgerMenu from '@/components/ui/header/HamburgerMenu.vue'
</script>

<style scoped>
.ml-auto {
  margin-left: auto;
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

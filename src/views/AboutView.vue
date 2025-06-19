<template>
  <div>
    About Vuew
    <p>{{ $route.path }}</p>
    <button class="btn btn-wite" @click="$router.push('/')">Home</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log('route.path', route.path)
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

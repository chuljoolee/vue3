<template>
  <div>
    <!--
    <div>Home View</div>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-wite" @click="goAboutPage">About move</button>
    -->
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goAboutPage = () => {
  router.push('/about')
}
</script>

<style lang="scss" scoped></style>

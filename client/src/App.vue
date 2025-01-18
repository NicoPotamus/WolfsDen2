<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app has-background-dark">
    <header>
      <NavBar />
    </header>
    <div class="container has-background-dark">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  min-width: 100vw;
}
</style>

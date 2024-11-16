
<script setup lang="ts">
  import { RouterLink } from 'vue-router'

  import { ref } from 'vue'

  const showMenu = ref(false)

  function toggleMenu() {
    showMenu.value = !showMenu.value
  }

</script>

<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand is-justify-content-center">
    <img alt="WolfsDen Logo" class="logo" src="@/assets/WolfDenLogo.png" width="100rem" />

    <a role="button" class="navbar-burger" :class="{ 'is-active' : showMenu }" aria-label="menu" :aria-expanded="false" data-target="navbarBasicExample" @click="toggleMenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

  </div>

  <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active' : showMenu }" style="transition: width 2s;">
    <div class="navbar-start">
        <RouterLink to="/" class="navbar-item">Home</RouterLink>
        <RouterLink to="/about" class="navbar-item">About</RouterLink>
        <RouterLink to="/services" class="navbar-item">Services</RouterLink>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <RouterLink to="/apply" class="button is-primary">
            <strong>Apply Now</strong>
          </RouterLink>
          <a href="https://booksy.com/en-us/831640_the-wolf-s-den-barbershop_barber-shop_29658_hopewell-junction#ba_s=seo" class="button is-light">
            Book Now
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>

.navbar-burger span {
    background-color: lightgray;
}

@media (max-width: 1024px) {
    .navbar-brand {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .navbar-burger {
      position: absolute;
      right: 1rem;
    }
    .logo {
      width: 100px;
    }
  }
  
</style>

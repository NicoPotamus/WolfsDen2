
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
        <a href="https://www.google.com/search?q=The+Wolf%27s+Den+Barbershop&sca_esv=fe9f719d59c6d571&source=hp&ei=gBmMZ5OjA9CGptQPjsX46As&iflsig=AL9hbdgAAAAAZ4wnkBgI50OgUnzOr8ccGt_CD0crmOlM&ved=0ahUKEwiT4-iAmICLAxVQg4kEHY4iHr0Q4dUDCBA&uact=5&oq=The+Wolf%27s+Den+Barbershop&gs_lp=Egdnd3Mtd2l6IhlUaGUgV29sZidzIERlbiBCYXJiZXJzaG9wMg4QLhiABBjHARiOBRivATIFEAAYgAQyBRAAGIAEMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5IoQlQ0QdY0QdwAXgAkAEAmAFnoAFnqgEDMC4xuAEDyAEA-AEC-AEBmAICoAJ6qAIKwgIKEAAYAxjqAhiPAcICChAuGAMY6gIYjwGYAwzxBUNFN4__oOoSkgcDMS4xoAeYDA&sclient=gws-wi#lrd=0x89dd473f81e9cded:0xefb09e9d1c69c091,3,,,," class="navbar-item">Review</a>
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

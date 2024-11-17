<script setup lang="ts">
import { getAll, type Service } from '../model/services'
import { ref } from 'vue'

const services = ref<Service[]>(getAll().data)

services.value.forEach((service) => {
  service.isOpen = false
})

const masterPrice = ref(true)
</script>

<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-narrow" @click="masterPrice = !masterPrice">
        <button class="button masterPrice is-fullwidth" v-if="masterPrice">Master Price</button>
        <button class="button apprenticePrice is-fullwidth" v-else>Apprentice Price</button>
      </div>
    </div>

    <div class="card" v-for="service in services" :key="service.name as string">
      <header class="card-header is-block">
        <nav class="level is-mobile">
          <!-- Left side -->
          <div class="level-left">
            <p class="level-item card-header-title">{{ service.name }}</p>
          </div>
          <!-- Right side -->
          <div class="level-right">
            <p class="level-item card-header-title" v-if="masterPrice">
              ${{ service.price_master }}
            </p>
            <p class="level-item card-header-title" v-else>${{ service.price_apprentice }}</p>
            <button
              class="level- item card-header-icon"
              aria-label="more options"
              @click="service.isOpen = !service.isOpen"
            >
              <span class="icon">
                <i class="fa-solid fa-angle-down"></i>
              </span>
            </button>
          </div>
        </nav>
      </header>
      <transition name="dropdown">
        <div v-if="service.isOpen" class="card-content">
          <div class="content">{{ service.description }} <br /></div>
        </div>
      </transition>
      <footer class="card-footer">
        <a
          href="https://booksy.com/en-us/831640_the-wolf-s-den-barbershop_barber-shop_29658_hopewell-junction#ba_s=seo"
          class="card-footer-item"
        >
          Book Now
        </a>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    max-height 0.5s ease,
    opacity 0.5s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  max-height: 0;
  opacity: 0;
}
.dropdown-enter-to,
.dropdown-leave-from {
  max-height: 500px; /* Adjust this value based on your content */
  opacity: 1;
}
.masterPrice {
  background-color: #f0d9a9c2;
  color: black;
}
.apprenticePrice {
  background-color: #a31c52b0;
  color: white;
}
</style>

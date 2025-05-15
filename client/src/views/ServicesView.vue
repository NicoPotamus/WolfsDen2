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
  <section class="hero has-background-dark">
    <div class="hero-body">
      <p class="title has-text-light">Services</p>
    </div>
  </section>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-narrow" @click="masterPrice = !masterPrice">
        <button class="button masterPrice is-fullwidth" v-if="masterPrice">
          <div class="level is-mobile">
            <div class="level-left"><div class="level-item">Level 3</div></div>
            <div class="level-right">
              <span class="icon">
                <i class="fa-solid fa-angle-down"></i>
              </span>
            </div>
          </div>
        </button>
        <button class="button apprenticePrice is-fullwidth" v-else>
          <div class="level is-mobile">
            <div class="level-left"><div class="level-item">Level 2</div></div>
            <div class="level-right">
              <span class="icon">
                <i class="fa-solid fa-angle-down"></i>
              </span>
            </div>
          </div>
        </button>
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
              class="level-item card-header-icon"
              aria-label="Description"
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
.masterPrice {
  background-color: #e5d3c3;
  color: black;
}
.apprenticePrice {
  background-color: #a31c52b0;
  color: white;
}

/* Keyframe animations */
@keyframes dropdown-open {
  from {
    transform: rotateX(-90deg);
    opacity: 0;
  }
  to {
    transform: rotateX(0deg);
    opacity: 1;
  }
}

@keyframes dropdown-close {
  from {
    transform: rotateX(0deg);
    opacity: 1;
  }
  to {
    transform: rotateX(-90deg);
    opacity: 0;
  }
}

/* Apply animations to dropdown elements */
.dropdown-enter-active {
  animation: dropdown-open 0.5s ease-out forwards;
}

.dropdown-leave-active {
  animation: dropdown-close 0.5s ease-in forwards;
}

.dropdown-content {
  transform-origin: top;
}
</style>

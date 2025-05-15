<script setup lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map'
import Footer from '@/components/Footer.vue'

const center = { lat: 41.555035, lng: -73.784569 }
</script>

<template>
  <main class="has-background-dark">
    <div class="container">
      <!--cody and shop description with book banner-->
      <div class="columns">
        <!--left side-->
        <div class="column is-half">
          <div><img class="image is-5by3" src="@/assets/Cody.jpg" alt="Wolf's Den Logo" /></div>
        </div>
        <!--right side-->
        <div class="column is-half">
          <div class="box has-background-dark has-text-light has-text-centered">
            At The Wolf's Den Barbershop, we take pride in being a welcoming and inclusive grooming
            destination for everyone. Our skilled barbers cater to clients of all ages, from adults
            to seniors, offering expert haircuts and grooming services tailored to each individual's
            unique style and preferences. <br />
            <br />
            One of our specialties is providing a safe and supportive environment for kids with
            special needs. We understand the importance of patience, understanding, and expertise
            when working with these young clients, and we strive to make their grooming experience
            comfortable and enjoyable.
          </div>
          <div class="box has-background-dark">
            <div class="columns is-mobile content">
              <div class="column is-one-third">
                <div class="has-text-left has-background-dark">
                  <a href="https://www.facebook.com/profile.php?id=61551534329921">
                    <i class="fa-brands fa-facebook has-text-grey-lighter is-size-2"></i>
                  </a>
                </div>
              </div>
              <div class="column is-one-third is-flex is-justify-content-center">
                <span>
                  <a
                    href="https://booksy.com/en-us/831640_the-wolf-s-den-barbershop_barber-shop_29658_hopewell-junction#ba_s=seo"
                    class="button is-maroon is-large has-text-light has-text-centered-mobile has-text-left-tablet"
                    >Book Now</a
                  >
                </span>
              </div>
              <div class="column is-one-third">
                <div class="has-text-right has-background-dark">
                  <a href="https://www.instagram.com/thewolfsdenbarbershop/">
                    <i class="fa-brands fa-instagram has-text-grey-lighter is-size-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--hours and info-->
      <div class="columns">
        <!--left side-->
        <div class="column is-half">
          <div class="content">
            <h2 class="has-text-light has-text-centered">Hours</h2>
            <br />
            <div class="has-text-light box has-background-dark">
              <div class="columns is-centered is-mobile">
                <div class="column has-text-left">
                  <p>Tue-Fri</p>
                  <p>Sat</p>
                  <p>Sun-Mon</p>
                </div>
                <div class="column has-text-right">
                  <p>8:30am - 6pm</p>
                  <p>8:30am - 4pm</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--right side-->
        <div class="column is-half content">
          <h2 class="has-text-light has-text-centered">Contact</h2>
          <br />
          <div class="has-text-light box has-background-dark">
            <a href="tel:8455921277" class="has-text-light">
              <p><b>Phone:</b> (845)-592-1277</p>
            </a>
            <br />
            <a href="mailto:gilleocody456@gmail.com" class="has-text-light">
              <p><b>Email:</b> gilleocody456@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
      <!--map and location-->
      <div class="columns">
        <!--left side-->
        <div class="column is-half">
            <iframe
              class="gmap"
              style="border: 0"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBSypqfOLa_El-MNjJqXo1Gt-W4oM6FTRA
    &q=The+Wolfs+Den+Barbershop,Hopewell+Junction+NY"
            >
            </iframe>
          
        </div>
        <!--right side-->
        <div class="column is-half content">
          <div class="content">
            <h2 class="has-text-light has-text-centered">Location</h2>
            <br />
            <div class="has-text-light box has-background-dark">
              <a
                href="https://www.google.com/maps/place/The+Wolf's+Den+Barbershop/@41.554993,-73.786937,17z/data=!3m1!4b1!4m6!3m5!1s0x89dd473f81e9cded:0xefb09e9d1c69c091!8m2!3d41.554993!4d-73.7843621!16s%2Fg%2F11vm1gkm87?entry=ttu"
                class="has-text-light"
              >
                <p>2593 NY-52 Suite 9</p>
                <p>Hopewell Junction, NY 12533</p>
                <p>United States</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--footer-->
    <Footer />
  </main>
</template>

<style scoped>
.is-maroon {
  background-color: maroon;
}
.gmap {
  width: 100%;
  height: 250px;
}
</style>

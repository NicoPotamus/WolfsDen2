<script setup lang="ts"></script>

<template>
  <section class="hero is-cream">
  <div class="hero-body">
    <p class="title">About Us</p>
    <p class="subtitle">Barbers</p>
  </div>
</section>

  <div class="container has-text-light">
    <!--CODY-->
    <div class="columns">
      <!--left side-->
      <div class="column is-half">
        <img src="../assets/Cody.jpg" alt="Photo of Barber" class="image is-5by3" />
      </div>

      <!--right side-->
      <div class="column is-half">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </p>
      </div>
    </div>
    <br />
    <!--Nick-->
    <div class="columns reverse-columns-mobile">
      <!--left side-->
      <div class="column is-half">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </div>
      <!--right side-->
      <div class="column is-half">
        <img
          src="../assets/Chris_head.jpeg"
          alt="Photo of Barber"
          class="image 128x128px is-pulled-right"
        />
      </div>
    </div>
    <br />
    <!--Joe-->
    <div class="columns">
      <!--left side-->
      <div class="column is-half">
        <img src="../assets/Joe_head.jpeg" alt="Photo of Barber" class="image 128x128px" />
      </div>
      <!--right side-->
      <div class="column is-half">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </div>
    </div>

    <br />
    <!--Gianni-->
    <div class="columns reverse-columns-mobile">
      <!--left side-->
      <div class="column is-half">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </div>
      <!--right side-->
      <div class="column is-half">
        <img
          src="../assets/Gianni_head.jpeg"
          alt="Photo of Barber"
          class="image 128x128px is-pulled-right"
        />
      </div>
    </div>
  </div>
</template>

<style>
.is-cream{
  background-color: #e5d3c3;
}
@media(max-width: 767px) { /* <== You can change this break point as per your  needs */
  .reverse-columns-mobile {
    flex-direction: column-reverse;
    display: flex;
  }
}
</style>

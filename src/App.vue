<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <header class="sticky-top shadow">
    <Navbar />
  </header>
  <main class="exo">
    <RouterView/>
  </main>
  <!-- <footer class=" text-center">
    Made with <i class="mdi mdi-heart text-pink"></i> by CodeWorks
  </footer> -->
</template>

<style lang="scss">


</style>

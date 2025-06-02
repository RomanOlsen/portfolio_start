<script setup>
import { ref, watch } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';

const theme = ref(loadState('theme') || 'light')

function toggleTheme() {
  theme.value = theme.value == 'light' ? 'dark' : 'light'
}

watch(theme, () => {
  document.documentElement.setAttribute('data-bs-theme', theme.value)
  saveState('theme', theme.value)
}, { immediate: true })

</script>

<template>
  <nav class="navbar navbar-expand-md bg-black border-bottom border-vue">
    <div class="container gap-2">
      <RouterLink :to="{ name: 'Home' }" class="d-flex align-items-center text-light">
        <img class="navbar-brand" alt="logo"
          src="@/assets/img/GrayscalePFP.png" height="45" />
        <b class="fs-5">Roman Olsen</b>
      </RouterLink>
      <!-- collapse button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-links"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="mdi mdi-menu text-light"></span>
      </button>
      <!-- collapsing menu -->
      <div class="collapse navbar-collapse d-flex justify-content-between" id="navbar-links">
        <ul class="navbar-nav">
          <li>
            <RouterLink :to="{ name: 'About' }" class="btn text-green selectable">
              About Me
            </RouterLink>
          </li>



        </ul>
        <div class="text-light">

          <a href="https://github.com/RomanOlsen/" target="_blank" rel="noopener noreferrer" title="View my github!">
            <span class="btn text-light selectable mdi mdi-github"> GitHub</span>

          </a>
          <a href="https://www.linkedin.com/in/romanolsen1/" target="_blank" rel="noopener noreferrer" title="View my linkedin">

            <span class="btn text-light selectable mdi mdi-linkedin"> LinkedIn</span>

          </a>
          <a href="https://x.com/RomanOlsenHQ" target="_blank" rel="noopener noreferrer" title="View my Twitter/X profile!">

            <span class="btn text-light selectable mdi mdi-twitter"> Twitter</span>


          </a>
          <a href="https://www.youtube.com/RomanOnFire" target="_blank" rel="noopener noreferrer" title="View my youtube channel where I have over 4k subscribers!">

            <span class="btn text-light selectable mdi mdi-youtube"> YouTube</span>


          </a>





        </div>
        <!-- LOGIN COMPONENT HERE -->
        <!-- <div class="ms-auto">
          <button class="btn text-light" @click="toggleTheme"
            :title="`Enable ${theme == 'light' ? 'dark' : 'light'} theme.`">
            <i v-if="theme == 'dark'" class="mdi mdi-weather-sunny"></i>
            <i v-if="theme == 'light'" class="mdi mdi-weather-night"></i>
          </button>
        </div> -->

      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.navbar-brand {
  border-radius: 50%;
}
</style>

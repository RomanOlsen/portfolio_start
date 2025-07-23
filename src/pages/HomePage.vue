<script setup>
import { AppState } from '@/AppState.js';
import ProjectCard from '@/components/ProjectCard.vue';


const projects = AppState.projects


</script>

<template>
  <div class="container-fluid hero">
    <div class="row">
      <div class="col-12 pt-5">
        <div class="text-center pt-5 mt-5">
          <div class="tshadow2 fs-1 text-uppercase fw-bold">Roman Olsen</div>
          <div class="tshadow">Developer | Digital Builder | Entrepreneur</div>

        </div>
      </div>
    </div>
  </div>
  <!-- NOTE we could have a modal pop up for each card instead of router linking -->
  <div class="container">
    <div class="row">
      <h1 class="fs-1 text-center py-3">Projects</h1>


      <div v-for="project in projects" :key="project.name">
        <ProjectCard :project="project" />
      </div>














      <div class="col-12 mb-4 col-md-3">
        <div class="card hover-pop shadow">
          <div class="card-header fw-bold">
            YouTube Channel

          </div>
          <img src="/img/yt.png" alt="">
          <div class="card-footer text-center">
            Ongoing project!
          </div>
        </div>


      </div>
    </div>
  </div>
  <!-- <div class="container">
    <div class="row">
      <h1 class="fs-1 text-center py-3">Education</h1>
      <div class="col-12 text-center">
        CodeWorks
      </div>
      <div class="col-12 text-center">
        One Stone Lab School (Highschool)
      </div>
      <div class="col-12 text-center">
        Currently studying: IXDF
      </div>
    </div>
  </div> -->
</template>

<style scoped lang="scss">
.hero {
  // background-image: url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-image: url("https://wallpaperbat.com/img/374170-forest-wallpaper-free-hd-download-hq.jpg");
  flex-grow: 1; // not needed now, most likely 
  min-height: 80dvh;
  // object-fit: cover;
  // width: 100%;
  background-size: cover;
  // background-position: center;
}

.tshadow {
  text-shadow: 1px 1px 0.5rem rgb(105, 105, 105);
}

.tshadow2 {
  text-shadow: 1px 1px 0.1rem rgb(0, 247, 123);
}

// .keeper {
//   // background-image: url(C:\Users\Roman\source\codeworks\May\portfolio_start\src\assets\img\keeper-logo.png);
// }

.hover-pop {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-pop:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.keeper-icon {
  height: 2rem;
}

.card {
  aspect-ratio: 1/1;

}

.card-footer {
  flex-grow: 1;
  // text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

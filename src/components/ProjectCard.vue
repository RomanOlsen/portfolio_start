<script setup>

defineProps({
  project: {
    type: Object,
    required: true
  }
});

// ANCHOR This is if we want the whole card to open the link
// class: selectable | @click="open(project.link)"
function open(link) {
  window.open(link, '_blank');
}

</script>


<template>
  <div class="card my-2 hover-pop shadow rounded-5 text-dark">
    <div class="card-header fw-bold justify-content-between d-flex bg-none">
      <div class="fs-4" title="Check it out">
        {{ project.name }}
      </div>
      <small class="">June 2025 | Visit Site | <span class="mdi mdi-github"></span></small>
    </div>
    <div class="card-body py-0 d-flex align-items-center flex-column flex-md-row">


      <img class="image me-0 me-md-5" :src="'/img/' + project.image" alt="">


      <div> {{ project.description }}</div>


<!-- NOTE no footer. have tags be on right of body on PC. and bottom on mobile as if it were a footer -->
    </div>
    <div class="card-footer text-center">
      <small class="bg-purple rounded px-2 py-1 text-light" v-for="tag in project.tags" :key="tag.name">{{ tag }}</small>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.card {
  // aspect-ratio: 1/1;

  // background-color: #00f77c50;
  // border-radius: 20%;
  overflow: hidden;
  border: none;
  // max-height: 40dvh;
}

.card-footer {
  flex-grow: 1;
  // text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}

.card-header {
  border: none;
}

// .card-body {
// padding: 0;
// }

.image {
  width: auto;
  height: 10rem;
  object-fit: contain;
  aspect-ratio: 1/1;
}

// .hover-pop {
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
// }

// .hover-pop:hover {
//   transform: translateX(-5px);
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
// }

.keeper-icon {
  height: 2rem;
}
</style>
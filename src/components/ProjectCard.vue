<script setup>

defineProps({
  project: {
    type: Object,
    required: true
  }
});

</script>


<template>
  <div class="col-12 mb-4 col-md-3">
    <div class="card hover-pop shadow">
      <div class="card-header fw-bold justify-content-between d-flex">
        <a href="https://www.imeditated.com" target="_blank" rel="noopener noreferrer" title="Check it out">
          {{ project.name }}
        </a>
        <small class="bg-purple rounded px-2 py-1 text-light">Fullstack</small>
      </div>
      <img :src="'/img/' + project.image" alt="">
      <div class="card-footer text-center">
        {{ project.description }}
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>
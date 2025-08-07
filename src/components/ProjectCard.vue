<script setup>
import { computed, onMounted } from 'vue';


const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

// ANCHOR This is if we want the whole card to open the link.
// NOTE we should have this and just the remove selectable and @click if no link to project
// class: selectable | @click="open(project.link)"
function open(link) {
  window.open(link, '_blank');
}

// TODO make projects with links selectable with icon and title text, satisfying button.

const tagColors = {
  'SaaS': { bg: '#f29109', text: '' },
  'Game': { bg: '#FFF3E0', text: '' },
  'Logo': { bg: '', text: '' },
  'Frontend': { bg: '#F1F8E9', text: '' },
  'Fullstack': { bg: '#212529', text: '' },
  'Vue': { bg: '#42b883', text: '', icon: 'mdi-vuejs' },
  'CodeWorks': { bg: '#333333', text: '#3AA5DC', icon: '' },
  'Node': { bg: '#8CC84B', text: 'white', icon: 'mdi-nodejs' },
  'C# .NET': { bg: '#512BD4', text: 'white', icon: 'mdi-microsoft' },
  'MongoDB': { bg: '#4DB33D', text: 'white', icon: 'mdi-mongodb' },
  'SQL': { bg: '#00758F', text: '', icon: 'mdi-database' },
  'Unity': { bg: '#080808', text: '', icon: 'mdi-unity' },
  'One Stone': { bg: '#31AFC5', text: '', icon: 'mdi-school' },
  'Blender': { bg: '#EA7A16', text: '#265787', icon: 'mdi-blender-software' },
  'Lua': { bg: '#000080', text: 'white', icon: 'mdi-language-lua' },
  'Skool': { text: '#263396', bg: '#D3513E', icon: '' },
}

const sortedTags = computed(() => {
  return props.project.tags.slice().sort();
});

</script>


<template>
  <div class="card my-2 hover-pop shadow rounded-5 text-dark">
    <div class="card-header fw-bold justify-content-between d-flex bg-none align-items-center">
      <div class="fs-4 p-1">
        <!-- padding 0 possibly above? -->
        {{ project.name }} <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer"
          class="mdi mdi-open-in-new" title="Check it out"></a>
      </div>
      <div class="d-flex align-items-center"><small v-if="project.date" class="p-2 rounded">{{ project.date }}</small>
        <a v-if="project.github" class="mdi mdi-github fs-5 text-dark" :href="project.github"
          title="View Github Repo"></a>
      </div>
    </div>
    <div class="card-body py-0 d-flex align-items-center flex-column flex-md-row">

      <div class="col-12 col-md-2">

        <img class="image me-0 me-md-" :src="'/img/' + project.image" alt="">
      </div>

      <div class="col-12 col-md-6 text-center text-md-start px-md-5 py-3">
        <div> {{ project.description }}</div>

      </div>
      <div class="col-12 col-md-4 d-flex flex-wrap justify-content-center justify-content-md-start pb-3 pb-md-0">

        <small class="rounded px-2 py-1 m-1" v-for="tag in sortedTags" :key="tag.name" :style="{
          backgroundColor: tagColors[tag]?.bg || 'gray', color: tagColors[tag]?.text || '#f8f9fa'
        }"> <span :class="'mdi ' + tagColors[tag]?.icon"></span>
          {{ tag
          }}</small>
      </div>



      <!-- NOTE no footer. have tags be on right of body on PC. and bottom on mobile as if it were a footer -->
    </div>
    <!-- <div class="card-footer text-center">
    </div> -->
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
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media (min-width: 768px) {
  .image {
    object-fit: contain;
    /* only on md and up */
    aspect-ratio: 1/1;
  }
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
<script setup>

</script>

<template>
  <div class="about">
    <h1 class="text-center py-3">About Me</h1>
    <!-- <div class="text-center"><span class="mdi mdi-pin">Idaho,</span></div> -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="d-flex justify-content-center pb-4">

            <img class="me rounded" src="/img/me.png?url" alt="">
          </div>
          <p>I am a software engineer and what I call a digital builder. I chose digital builder because I have always
            been passionate about making things, and I noticed that I excel especially within the digital worlds. From
            building games using Roblox Studio/Unity/Scratch, 3D modeling in Blender, logo design with Adobe
            Illustrator/GIMP/Canva, video editing, and even building in Minecraft, I've always been curious to explore
            whats out there, and how what I make might solve a problem.</p>
          <p>I'm also an outdoor enthusiast. I also love walking along the foothills in my city, Boise. And always down for a
            hike
            wherever I'm traveling. Love running, specifically sprinting. Love the adrenaline rush. Love weightlifting! My bench press is 135 lbs, and my goal is to hit 225.
          </p>
          <p>I am a firm believer in both technology and nature and how they can go hand-in-hand. I strongly believe the
            importance of coding hard, and resting hard!</p>
            <!-- <p>Fitness enthusiast! Am into weightlifting </p> -->
          <!-- <p>I am a firm believer in both technology and nature and how they can go hand-in-hand. I strongly believe the importance of coding hard, and resting hard. I believe that whatever I build or contribute in the future will be for the benefit of humanity.</p> -->

          <ul>
            <li>Favorite animal: Polar Bear</li>
            <li>Favorite getaway: The Oregon Coast (where the picture is taken)</li>
            <li>Want to visit next: Anywhere in Europe, more of the East Coast, Hawaii</li>
            <li>MBTI type: INTP</li>
            <!-- <li>Bench: 135 (Goal is 225)</li> -->
          </ul>





        </div>
        <h2 class="text-center py-3">Education</h2>
        <!-- <hr> -->

        <div class="col-6 text-center">



          <img class="education img-fluid" src="@/assets/img/cw-logo-circle.png" alt="CodeWorks">
          <div class="pt-2">
            <a href="https://boisecodeworks.com/" target="_blank" rel="noopener noreferrer"
              title="View my software development school">CodeWorks
            </a>

          </div>
        </div>

        <div class="col-6 text-center mb-5">

          <img class="education img-fluid" src="/img/os.png" alt="One Stone">
          <div class="pt-2">
            <a href="https://onestone.org/" target="_blank" rel="noopener noreferrer"
              title="View my highschool i went to">One Stone
            </a>

          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.education {
  height: 20dvh;
  object-fit: cover;
}

.me {
  height: 20rem;
  object-fit: cover;
  // object-position: center;
  display: flex;
  justify-content: center;
  // border-radius: 50%;
  // zoom: 100%;
  // scale: 1.2;
  // overflow: hidden;

}
</style>
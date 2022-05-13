<template>
  <main>
    <div class="hero-text">
      <h2 ref="name">Matthew Senick</h2>
      <div ref="profession" @click="goToMe" class="title-wrapper">
        <h3>MA Economics</h3>
      </div>
    </div>
    <aside class="hero-image">
      <img
        @mouseenter="imagePopup"
        @mouseleave="imagePopdown"
        ref="img"
        src="../assets/images/portrait.jpg"
        alt="Portrait photo of Matthew"
      />
    </aside>
  </main>
</template>

<script>
import { TimelineLite } from "gsap/dist/gsap";
export default {
  name: "IntroHero",
  mounted() {
    const name = this.$refs.name;
    const profession = this.$refs.profession;
    const img = this.$refs.img;
    const timeline = new TimelineLite();
    const tl = new TimelineLite();
    timeline.from(name, {
      y: -20,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
    timeline.from(profession, {
      y: -40,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(2.5)",
    });
    tl.from(img, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
    });
  },
  methods: {
    imagePopup() {
      const img = this.$refs.img;
      const tl = new TimelineLite();
      tl.to(img, {
        boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.4)",
        scale: 1.1,
      });
    },
    imagePopdown() {
      const img = this.$refs.img;
      const tl = new TimelineLite();
      tl.to(img, {
        scale: 1,
      });
    },
    goToMe() {
      document.getElementById("me").scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-flow: row wrap-reverse;
  justify-content: space-between;
  width: 100%;
}
h2 {
  margin: 0;
  color: #2eca91;
  font-size: clamp(52px, 6vw, 120px);
  font-weight: 600;
}
h3 {
  text-align: center;
  font-size: clamp(15px, 2.8vw, 33px);
  margin: 0;
  font-weight: 700;
}
img {
  border: 10px solid white;
  border-radius: 50%;
  width: clamp(200px, 20vw, 20vw);
}
.title-wrapper {
  cursor: pointer;
  margin-top: 1.4em;
  padding: 1em;
  width: 100%;
  background-color: white;
  color: #1c1c1c;
  transition: all 0.4s ease-out;
  z-index: 2;
  border-radius: 50px;
}
.title-wrapper:hover {
  background-color: #3ff1a7;
}
@media (max-width: 700px) {
  main {
    justify-content: center;
    width: 100%;
  }
  img {
    margin-bottom: 2em;
  }
}
</style>
<template>
  <div id="home">
    <IntroHero class="hero" />
  </div>
</template>

<script>
import IntroHero from "../components/IntroHero";
export default {
  name: "IntroHome",
  components: { IntroHero }
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#home::before {
  content: "";
  position: absolute;
  top: 20; left: 0;
  width: 100vw; height: 100vh;
  background-image: url("../assets/pattern/skyline.JPG");
  background-size: cover;
  filter:brightness(0.4);
  z-index: 0;
}
.hero {
  width: 80vw;
}
</style>
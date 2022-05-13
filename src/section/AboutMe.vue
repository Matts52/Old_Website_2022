<template>
  <div>
    <AboutMeComp class="description" />
  </div>
</template>

<script>
import AboutMeComp from "../components/AboutMeComp";
export default {
  name: "AboutMe",
  components: { AboutMeComp },
};
</script>

<style scoped>
div {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-size: 100%;
  background:linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)), url("../assets/pattern/whiteboard.jpg");
  background-size: cover;
}
h1 {
  margin-top: 1em;
  text-align: center;
}
.description {
  width: 60vw;
}
@media (max-width: 700px) {
  div {
    padding: 4em 0em;
  }
  .description {
    text-align: justify;
    width: 90vw;
  }
}
</style>
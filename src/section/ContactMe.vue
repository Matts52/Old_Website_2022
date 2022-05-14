<template>
  <div class="main-container">
    <h1>Find Me</h1>
    <div class="find-me-container">
      <div class="icons">
        <FindMeIcons
          style="margin-bottom: 2em;"
          class="email"
          title="email"
          content="senick.matthew@gmail.com"
        />
        
        <FindMeIcons
          style="margin-bottom: 2em;"
          title="github"
          content="Matts52"
          link="https://github.com/Matts52"
        />

        <FindMeIcons
          style="margin-bottom: 2em;"
          title="linkedin"
          content="Matthew Senick"
          link="https://www.linkedin.com/in/matthew-senick/"
        />

      </div>
    </div>
  </div>
</template>

<script>
import FindMeIcons from "../components/FindMeIcons";

export default {
  name: "FindMe",
  components: {
    FindMeIcons,
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)), url("../assets/pattern/street.jpg");
  background-size: cover;
}
h1 {
  margin-top: 1em;
  text-align: center;
  color: aliceblue;
}
img {
  border: 10px solid white;
  border-radius: 50%;
  width: clamp(200px, 20vw, 20vw);
}
.find-me-container {
  margin-top: 3em;
  width: 80vw;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1.5em;
}
.icons {
  gap: 2em;
  padding-bottom: 5em;
}
@media (max-width: 700px) {
  img {
    margin-bottom: 2em;
  }
  .icons {
    gap: 1.2em;
    padding-bottom: 2em;
  }

}
</style>
<template>

  <NavBar_Expand/>

  <IntroHome id="home" class="section" />

  <AboutMe id="me" class="section" />

  <ProjectsPapers id="projects" v-on:emitImage="[(showImage = true), imagePreview($event)]" />

  <ContactMe id="contact-me" />


</template>





<script>

import NavBar_Expand from './components/NavBar_Expand.vue'
import IntroHome from './section/IntroHome.vue'
import AboutMe from './section/AboutMe.vue'
import ProjectsPapers from './section/ProjectsPapers.vue'
import ContactMe from './section/ContactMe.vue'

export default {
  name: 'App',
  components: {
    NavBar_Expand,
    IntroHome,
    AboutMe,
    ProjectsPapers,
    ContactMe
  },
  data() {
    return {
      showMenu: false,
      showImage: false,
      previewImageUrl: "",
      previewImageTitle: "",
    };
  },
}
</script>






<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Source+Sans+Pro:wght@400;600;700&display=swap");
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
  padding: 0;
  background-color: #eee2e2;
  color: rgb(39, 37, 37);
  position: relative;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.logo,
.menu {
  z-index: 1;
  margin: 2em;
  width: 30px;
  cursor: pointer;
  position: fixed;
}
.logo {
  top: 0;
  left: 0;
}
.image-preview {
  max-height: 95%;
  max-width: 95%;
  border-radius: 40px;
}
.image-preview-container {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  z-index: 100;
}
.image-preview-transititon-enter-active,
.image-preview-transiiton-leave-active {
  transition: all 0.3s ease;
}
.image-preview-transititon-enter,
.image-preview-transititon-leave-to {
  opacity: 0;
}
.menu {
  top: 0;
  right: 0;
}
.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2em;
  position: fixed;
}
.menu-bar {
  z-index: 10;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
}
.hidden-div {
  backdrop-filter: blur(3px);
  z-index: 5;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100vh;
}
.menu-transition-enter-active,
.menu-transition-leave-active {
  transition: all 0.3s ease-out;
}
.menu-transition-enter,
.menu-transition-leave-to {
  transform: translateX(80vw);
}
h1 {
  font-size: 72px;
}
.hidden-div-transition-active,
.hidden-div-transition-leave-active {
  transition: all 0.3s ease;
}
.hidden-div-transition-enter,
.hidden-div-transition-leave-to {
  opacity: 0;
}
.section {
  height: 100vh;
  width: 100%;
}
.footer {
  display: flex;
  justify-content: center;
  background-color: white;
}
.ocean {
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 29vh;
  left: 0;
}
.wave {
  background: url("./assets/pattern/wave.svg") repeat-x;
  position: absolute;
  bottom: 0;
  width: 6400px;
  height: 198px;
  animation: wave 30s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}
@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}
.st0 {
  fill: #ffffff;
  transition: 0.4s ease-in;
}
.logo:hover .st0 {
  fill: #59ff9c;
}
.st1 {
  fill: none;
}
.st2 {
  transition: 0.4s ease-in;
  fill: #ffffff;
}
.menu:hover .st2 {
  fill: #59ff9c;
}
@media (max-width: 700px) {
  .section {
    height: 100%;
  }
  .ocean,
  .wave {
    display: none;
  }
}
</style>
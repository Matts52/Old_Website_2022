<template>
<div class="topnav">
  <a class="active" href=""><img id="logo" src="../assets/logo.svg"></a>
  <a @click="openURL('me')">About</a>
  <a @click="openURL('projects')">Projects</a>
  <!--<a href="#Experience">Experience</a>-->
  <a @click="openURL('contact-me')">Contact</a>
   <!--<a :href="pdf" download>Resume</a>-->
</div>
</template>

<script>
export default {
  name: "NavBar_Expand",

  //data() {
  //  return {
  //    pdf: require("../assets/Resume_Matthew_Senick.pdf"),
  //  };
  //},

  methods: {
    openURL(url) {
      document.getElementById(url).scrollIntoView({ behavior: "smooth" });
    },

  },
};
</script>

<style>
/* Add a black background color to the top navigation */
.topnav {
  background-color: rgb(38, 37, 37);
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}

#logo {
  height: 17px;
}

</style>
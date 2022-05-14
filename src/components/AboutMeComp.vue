<template>
  <article>
    <h2>About me</h2>
    <p>
      I am a recent Masters of Economics graduate from the University of Toronto. My interests mainly fall within
      the fields of data science, technology consulting, and applications of machine learning to econometrics. Prior
      to my Masters I completed a Double Major in Computer Science and Economics at the University of Saskatchewan
      with High Honours in both subjects. 
    </p>
    <p>
        Alongside my education, I have gained experience in a few different industries. Namely, I have 
        worked on building data pipelines and automated reports, analyzed consumer behaviour
        tendencies, researched applications of machine learning to labour market amenity preference as well as 
        semantic code clone detection, and taught data manipulation and analysis techniques as 
        a Teaching Assistant.
    </p>
    <p>
      In my free time I enjoy keeping up with interesting applications of new
      technology. Currently I am looking into advancements in Natural Language Processing and
      Data Visualization.
    </p>
    <ul>
      <li>
        <img src="../assets/icons/python.svg" alt="python" />
      </li>
      <li>
        <img src="../assets/icons/r.svg" alt="R" />
      </li>
      <li>
        <img src="../assets/icons/sql.svg" alt="SQL" />
      </li>
      <li>
        <img src="../assets/icons/stata.svg" alt="SQL" />
      </li>
      <li>
        <img src="../assets/icons/js.svg" alt="JS" />
      </li>
      <li>
        <img src="../assets/icons/java.svg" alt="Java" />
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "DescriptionAbout"
};
</script>

<style scoped>
p {
  font-size: clamp(16px, 1.2vw, 1.2vw);
  line-height: 2;
  color: #c0bebe;
}
h2 {
  font-size: clamp(24px, 3vw, 3vw);
  font-weight: 300;
  color: #cecaca;
  margin: 0;
}
ul {
  margin-top: clamp(3em, 4vw, 4vw);
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}
img {
  height: 30px;
  filter: grayscale();
  transition: filter 0.2s ease-in-out;
}
button {
  height: 30px;
  border: none;
  font-size: 18px;
  font-weight: 900;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
button:hover {
  background-color: #59ff9c;
}
img:hover {
  filter: none;
}
span {
  background-color: #141414;
  margin: 0.3em;
  padding: 0.3em 0.7em;
  color: #8d8d8d;
}
@media (max-width: 700px) {
  img,
  button {
    height: 20px;
  }
}
</style>
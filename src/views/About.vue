<template>
  <div id="about">
    <section class="description">
      <h3>About me</h3>
      <p>I'm Sérgio, I work as an environmental consultant but I enjoy programing and web development. 
        I'm also a musician 
        and this app is my answer to a specific need I had. Hope it might fit yours too.
      </p>
      <h3>About the technologies</h3>
      <p>As for the technologies, I used <a href="https://vuejs.org/">vuejs</a> with
        <a href="https://vuex.vuejs.org/">vuex</a> and <a href="https://router.vuejs.org/">vue router</a>,
         <a href="https://fontawesome.com/">fontawesome</a> for the converter icons and 
        <a href="https://www.flaticon.com"> Pixel perfect's</a> social icons.
      </p>
      <p>This app can work as a <a href="https://en.wikipedia.org/wiki/Progressive_web_application">
      Progressive Web App</a> and you can add it to your mobile phone as an independent app. Follow your specific browser's steps.</p>
      <p>This app is opensource and you can find the repo on Github 
        <a href="https://github.com/SergioMRib/ChordConverterPWA">here</a>.
      </p>
    </section>


    <section class="social">
      You can find me or contact me on:
      <div class="contacts">
        <a href="https://github.com/SergioMRib">
          <img src="../../public/img/socialIcons/github.svg" alt="github icon">
        </a>
        <a href="https://www.linkedin.com/in/sergribeiro/">
          <img src="../../public/img/socialIcons/linkedin.svg" alt="linkedin icon"></a>
        <a href="www.sergiomrib.pt">
          <img src="../../public/img/socialIcons/home.svg" alt="homepage icon"></a>
      </div>
    </section>
    <hr>
  </div>
</template>

<style scoped>

#about {
  margin: 0 1em;
  text-align: center;
}

.description {
  max-width: 900px;
  text-align: justify;
  margin: 0 auto;
}

.contacts {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 2em;
  margin: 2em auto 5em ;
}

img {
  height: 48px;
}

a:link {
  text-decoration: none;
  color: whitesmoke;
  text-decoration: underline;
}

a:visited {
  text-decoration: none;
  color: whitesmoke;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}


</style>
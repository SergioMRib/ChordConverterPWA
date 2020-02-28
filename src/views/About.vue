<template>
  <div class="about">
    <h3>I'm Sérgio and I created this app.</h3>


    <div>
      Find me on:
      <div class="contacts">
        <a href="https://github.com/SergioMRib">
          <img src="../../public/img/socialIcons/github.svg" alt="github icon">
        </a>
        <a href="https://www.linkedin.com/in/sergribeiro/">
          <img src="../../public/img/socialIcons/linkedin.svg" alt="linkedin icon"></a>
        <a href="www.sergiomrib.pt">
          <img src="../../public/img/socialIcons/home.svg" alt="homepage icon"></a>
      </div>
      <p>And my own website: <a href="www.sergiomrib.pt">www.sergiomrib.pt</a></p>
    </div>
    <section class="credits">
        <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </section>
  </div>
</template>

<style scoped>

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
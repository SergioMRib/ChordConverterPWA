<template>
  <div id="app">
    <div id="nav">
      <router-link to="/chord-converter">Home</router-link>
      <router-link to="/chord-converter/converter">The converter</router-link>
      <router-link to="/chord-converter/songs-manager">Songs Manager</router-link>
      <router-link to="/chord-converter/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
:root {
  --main-bg-color: #05386B;
  --title-color: #5CDB95;
  --subtitle-color: #379683;
  --router-active:   #8EE4AF;
  --main-fonts-color: #EDF5E1;
  --chord-color: #fd9800;
}

body {
  margin: 0;
  text-align: center;
  background-color: var(--main-bg-color);
  color: var(--main-fonts-color);
}

h2 {
  color: var(--title-color);
 }

h3{
  color: var(--subtitle-color);
  text-align: left;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
}

#nav {
  margin: 0 auto;
  max-width: 800px;
  padding: 10px 1em;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  align-items: center;
}

#nav a {
  font-size: 1.2em;
  font-weight: bold;
  color: var(--main-fonts-color);
}
a {
  font-weight: bold;
  color: var(--main-fonts-color);
}

#nav a.router-link-exact-active {
  color: var(--router-active);
}


</style>

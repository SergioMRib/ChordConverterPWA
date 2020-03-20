<template>
  <div id="app">
    <div id="nav">
      <router-link to="/chord-converter">Home</router-link> |
      <router-link to="/chord-converter/converter">The converter</router-link> |
      <router-link to="/chord-converter/songs-manager">Songs Manager</router-link> |
      <router-link to="/chord-converter/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #394960
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: lightgrey;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: whitesmoke;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/converter">The converter</router-link> |
      <router-link to="/about">About</router-link>
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

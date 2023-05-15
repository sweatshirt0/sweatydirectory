<template>
  <Title />
  <Nav />
  <router-view></router-view>
</template>

<script>

 import Nav from "./components/Nav"
 import Title from "./components/Title"

export default {
  name: 'App',
  components: {
    Nav,
    Title,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

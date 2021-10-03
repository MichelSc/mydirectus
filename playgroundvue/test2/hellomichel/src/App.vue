<template>
  <HelloWorld msg="Welcome to Truc Vue.js App"/>
  <ToDo todo="A faire pour michel"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ToDo from './components/ToDo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ToDo
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

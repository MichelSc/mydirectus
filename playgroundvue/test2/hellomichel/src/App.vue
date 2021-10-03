<template>
  <HelloWorld msg="Welcome to Truc Vue.js App"/>
  <ToDo todo="A faire pour michel" nb="126" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ToDo from './components/ToDo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ToDo
  },
  props: {
    todos: String
  }
}
</script>


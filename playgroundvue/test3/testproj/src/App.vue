<template>
  <div class="myApp">
    <HelloWorld msg="Welcome to Truc Vue.js Michel2"/>
    <h3>Todos component  ({{todos.length+1}})</h3>
    <ul>
    <ToDo
        v-for="t in todos"
        v-bind:key ="t.tk" 
        v-bind:todo="t.text"
        v-bind:nb="t.nb"
    >
    </ToDo>
    <ToDo todo="A faire extra" :nb="todos.length+1" />
    </ul>
    <h3>First Chart</h3>
    <RandomChart2/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ToDo from './components/ToDo.vue'
import RandomChart2 from './components/RandomChart.vue'

var mydata = { 
  todos: [
    {text:"tache1", nb:2580, tk:1},
    {text:"tache2", nb:2581, tk:2}
  ],
  total: 128,
  total2: 129,
  mylist: "abc"
  };
  

export default {
  name: 'App',
  components: {   
      HelloWorld
    , ToDo
    , RandomChart2
  },
  data() {
    return mydata;
  }
}
</script>


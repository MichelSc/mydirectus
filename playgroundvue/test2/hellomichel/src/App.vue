<template>
  <div class="myApp">
    <ToDo todo="A faire pour michel1" :nb="total" />
    <ToDo todo="A faire pour michel2" :nb="todos.length" />
    The todos are {{JSON.stringify(total)}}
    
    The total is {{total2}}
    <HelloWorld msg="Welcome to Truc Vue.js App"/>
    <ToDo
        v-for="t in todos"
        v-bind:key ="t.tk" 
        v-bind:todo="t.text"
        v-bind:nb="t.nb"
    >
    </ToDo>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ToDo from './components/ToDo.vue'

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
    HelloWorld,
    ToDo
  },
  data() {
    return mydata;
  }
}
</script>


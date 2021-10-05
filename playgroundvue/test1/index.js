Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>Todo: {{ todo }}</li>'
})

// this is our Model
var exampleData = {
  name: 'from michel',
  todos: [ 'todo1', "todo2"]
}

// create a Vue instance, or, a "ViewModel"
// which links the View and the Model
var exampleVM = new Vue({
  el: '#example-1',
  data: exampleData
})

console.log('index.js called')
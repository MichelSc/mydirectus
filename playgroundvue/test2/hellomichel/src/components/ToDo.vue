<template>
  <div class="todo">
    <h3>Todo component</h3>
    <li>Todo: {{ nb }}*{{ todo }}</li>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props: {
    todo: String,
    nb: Number
  }
}
</script>

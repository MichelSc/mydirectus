<template>
  <div class="todo">
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

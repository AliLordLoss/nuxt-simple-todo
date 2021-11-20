<template>
  <div>
    <TodoListItem
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :first="index === 0"
      :last="index === todos.length - 1"
    />
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style>
</style>
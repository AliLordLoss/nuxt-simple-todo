<template>
  <div class="todo-list">
    <MyBtn
      icon="mdi-sort-alphabetical-variant"
      color="purple"
      @click="sortTodos"
    />
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
  methods: {
    sortTodos() {
      if (this.todos.length > 0)
        this.$store.dispatch('sortTodos', { threadId: this.todos[0].threadId })
    },
  },
}
</script>

<style>
.todo-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
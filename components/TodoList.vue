<template>
  <div class="todo-list">
    <MyBtn
      icon="mdi-sort-alphabetical-variant"
      color="purple"
      @click="sortTodos"
      :disabled="editing"
    />
    <TodoListItem
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :first="index === 0"
      :last="index === todos.length - 1"
      :disable-order="editing"
      @edit="disableAllOrdering"
      @end-edit="enableAllOrdering"
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
  data() {
    return {
      editing: false,
    }
  },
  methods: {
    sortTodos() {
      if (this.todos.length > 0)
        this.$store.dispatch('sortTodos', { threadId: this.todos[0].threadId })
    },

    disableAllOrdering() {
      this.editing = true
    },

    enableAllOrdering() {
      this.editing = false
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
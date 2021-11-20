<template>
  <v-row>
    <v-spacer />
    <v-col cols="3">
      <div>
        <h1>{{ thread.title }}</h1>
        <div>TODO: edit or delete</div>
      </div>
      <TodoList :todos="todos" />
      <addTodoForm :thread-id="thread.id" />
    </v-col>
    <v-spacer />
  </v-row>
</template>

<script>
export default {
  props: {
    thread: {
      required: true,
      type: Object,
    },
  },
  computed: {
    todos() {
      return this.$store.state.threads[this.thread.id].todos
    },
  },
}
</script>

<style>
</style>
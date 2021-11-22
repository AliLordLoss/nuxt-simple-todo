<template>
  <v-col cols="3">
    <div v-if="!editing">
      <h1>{{ thread.title }}</h1>
      <MyBtn icon="mdi-pencil" color="blue" @click="edit" />
    </div>
    <div v-else>
      <v-text-field v-model="title"></v-text-field>

      <MyBtn icon="mdi-close" color="orange" @click="cancelEdit" />

      <MyBtn icon="mdi-check" color="green" @click="saveEdit" />
    </div>
    <TodoList :todos="todos" />
    <AddItemForm
      icon="mdi-briefcase-plus"
      color="teal"
      label="Enter new todo"
      @submit="addTodo"
    />
  </v-col>
</template>

<script>
export default {
  props: {
    thread: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      title: this.thread.title,
      editing: false,
    }
  },
  computed: {
    todos() {
      return this.$store.state.threads[this.thread.id].todos
    },
  },
  methods: {
    addTodo(text) {
      if (!text) return
      this.$store.dispatch('addTodo', {
        todo: { text, threadId: this.thread.id },
        threadId: this.thread.id,
      })
    },

    edit() {
      this.editing = true
    },

    cancelEdit() {
      this.title = this.thread.title
      this.editing = false
    },

    saveEdit() {
      this.$store.dispatch('editThread', {
        thread: { ...this.thread, title: this.title },
      })
      this.editing = false
    },
  },
}
</script>

<style>
</style>
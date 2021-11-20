<template>
  <div class="add-todo-form">
    <v-text-field v-model="text" label="Enter new todo"></v-text-field>
    <MyBtn icon="mdi-briefcase-plus" color="teal" @click="addTodo" />
  </div>
</template>

<script>
export default {
  props: {
    threadId: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      text: '',
    }
  },
  methods: {
    addTodo() {
      if (!this.text) return
      this.$store.dispatch('addTodo', {
        todo: { text: this.text, threadId: this.threadId },
        threadId: this.threadId,
      })
      this.text = ''
    },
  },
}
</script>

<style>
.add-todo-form {
  text-align: center;
}
</style>
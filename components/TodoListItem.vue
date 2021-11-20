<template>
  <div>
    <h3>{{ todo.text }}</h3>
    <div>
      <MyBtn icon="mdi-briefcase-remove" color="red" @click="removeTodo" />

      <MyBtn icon="mdi-briefcase-edit" color="blue" />

      <MyBtn icon="mdi-briefcase-upload" :disabled="first" @click="moveUp" />

      <MyBtn icon="mdi-briefcase-download" :disabled="last" @click="moveDown" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      required: true,
      type: Object,
    },
    first: {
      type: Boolean,
      default: false,
    },
    last: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    removeTodo() {
      this.$store.dispatch('removeTodo', {
        id: this.todo.id,
        threadId: this.todo.threadId,
      })
    },

    moveUp() {
      this.$store.dispatch('bringTodoUp', {
        id: this.todo.id,
        threadId: this.todo.threadId,
      })
    },

    moveDown() {
      this.$store.dispatch('bringTodoDown', {
        id: this.todo.id,
        threadId: this.todo.threadId,
      })
    },
  },
}
</script>

<style>
</style>
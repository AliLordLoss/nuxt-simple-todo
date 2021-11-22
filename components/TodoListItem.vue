<template>
  <div v-if="!editing">
    <h3>{{ todo.text }}</h3>
    <div>
      <MyBtn icon="mdi-briefcase-minus" color="red" @click="removeTodo" />

      <MyBtn icon="mdi-briefcase-edit" color="blue" @click="edit" />

      <MyBtn
        icon="mdi-briefcase-upload"
        :disabled="first || disableOrder"
        @click="moveUp"
      />

      <MyBtn
        icon="mdi-briefcase-download"
        :disabled="last || disableOrder"
        @click="moveDown"
      />
    </div>
  </div>
  <div v-else>
    <v-text-field v-model="text"></v-text-field>

    <MyBtn icon="mdi-briefcase-remove" color="orange" @click="cancelEdit" />

    <MyBtn icon="mdi-briefcase-check" color="green" @click="saveEdit" />
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
    disableOrder: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      editing: false,
      text: this.todo.text,
    }
  },
  methods: {
    removeTodo() {
      this.$store.dispatch('removeTodo', {
        id: this.todo.id,
        threadId: this.todo.threadId,
      })
    },

    edit() {
      this.$emit('edit')
      this.editing = true
    },

    cancelEdit() {
      this.$emit('end-edit')
      this.text = this.todo.text
      this.editing = false
    },

    saveEdit() {
      this.$emit('end-edit')
      this.$store.dispatch('editTodo', {
        todo: { ...this.todo, text: this.text },
      })
      this.editing = false
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
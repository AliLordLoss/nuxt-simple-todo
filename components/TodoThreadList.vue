<template>
  <v-row>
    <TodoThread v-for="thread in threads" :key="thread.id" :thread="thread" />
    <v-col v-if="threads.length < 4" cols="3" class="add-thread">
      <AddItemForm
        icon="mdi-plus"
        label="Enter new thread"
        @submit="addThread"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    threads: {
      required: true,
      type: Array,
    },
  },
  methods: {
    addThread(title) {
      if (!title) return
      this.$store.dispatch('createThread', { title })
    },
  },
}
</script>

<style>
.add-thread {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
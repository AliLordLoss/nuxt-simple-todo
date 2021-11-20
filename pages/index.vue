<template>
  <div>
    <v-container>
      <TodoThread :thread="{ id: 0, title: 'thread #1' }" />
    </v-container>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('CREATE_THREAD', { title: 'thread #1' })
  },
}
</script>

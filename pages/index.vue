<template>
  <div>
    <v-container>
      <TodoThreadList :threads="this.$store.getters.threadsArray" />
    </v-container>
  </div>
</template>

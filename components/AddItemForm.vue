<template>
  <div class="add-item-form">
    <v-text-field v-model="text" :label="label"></v-text-field>
    <MyBtn :icon="icon" :color="color" @click="clicked" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      required: true,
      type: String,
    },
    color: {
      default: 'green',
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      text: '',
    }
  },
  methods: {
    clicked() {
      this.$emit('submit', this.text)
      this.text = ''
    },
  },
}
</script>

<style>
.add-item-form {
  text-align: center;
}
</style>
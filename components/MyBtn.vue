<template>
  <v-btn fab small :disabled="disabled" :color="color" @click="$emit('click')">
    <v-icon> {{ icon }} </v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    icon: {
      required: true,
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'cyan',
    },
  },
}
</script>
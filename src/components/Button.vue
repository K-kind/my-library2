<template>
  <o-button v-bind="$attrs" :type="type"><slot /></o-button>
</template>

<script>
export default {
  name: 'OButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<template>
  <div>
    <span>count: {{ count }}</span>
    <button @click="plus">+</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
export default defineComponent({
  setup: () => {
    const count = ref(0)
    const plus = () => {
      count.value++
    }
    return {
      count,
      plus
    }
  }
})
</script>

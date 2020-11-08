<template>
  <el-button
    v-on="$listeners"
    v-bind="$attrs"
    :type="type"
  ><slot />{{ comp }}</el-button>
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import ElButton from 'element-ui/lib/button'

export default defineComponent({
  name: 'OButton',
  components: {
    ElButton
  },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  setup: (props) => {
    const comp = computed(() => {
      return props.type
    })

    return {
      comp
    }
  }
})
</script>

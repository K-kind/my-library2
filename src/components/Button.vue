<template>
  <el-button
    v-on="$listeners"
    v-bind="$props"
  ><slot /></el-button>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { Button } from 'element-ui'

export default defineComponent({
  name: 'OButton',
  components: {
    ElButton
  },
  inheritAttrs: false,
  props: {
    ...ElButton.props,
    type: {
      type: String,
      default: 'primary'
    }
  }
})
</script>

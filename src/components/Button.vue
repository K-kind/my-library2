<template>
  <el-button
    v-on="$listeners"
    v-bind="$attrs"
    :type="type"
  ><slot /></el-button>
</template>

<script>
import { Button } from 'element-ui'

export default {
  name: 'OButton',
  components: {
    ElButton: Button
  },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

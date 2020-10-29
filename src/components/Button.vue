<template>
  <el-button
    v-on="$listeners"
    v-bind="$attrs"
    :type="type"
  ><slot /></el-button>
</template>

<script>
// import ElButton from 'element-ui/packages/button/src/button.vue'
import { Button } from 'element-ui'

export default {
  name: 'OButton',
  components: {
    ElButton: Button
  },
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

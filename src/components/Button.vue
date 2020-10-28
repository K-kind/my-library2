<template>
  <el-button v-bind="$attrs" :type="type"><slot /></el-button>
</template>

<script>
import ElButton from 'element-ui'

export default {
  name: 'OButton',
  components: {
    ElButton
  },
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

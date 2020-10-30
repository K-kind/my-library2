<template>
  <el-button
    v-on="$listeners"
    v-bind="$props"
  ><slot /></el-button>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
// import { Button } from 'element-ui'
import ElButton from 'element-ui/packages/button/src/button.vue'

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

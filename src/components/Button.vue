<template>
  <el-button
    v-on="$listeners"
    v-bind="$attrs"
    :type="type"
  ><slot /></el-button>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Button } from 'element-ui'

export default defineComponent({
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
})
</script>

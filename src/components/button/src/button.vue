<template>
  <el-button
    v-on="$listeners"
    v-bind="$attrs"
    :type="type"
  ><slot>ボタン</slot></el-button>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
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
  }
})
</script>

<template>
  <el-form-item
    v-on="$listeners"
    v-bind="$attrs"
    class="o-form-item"
    :class="{ 'hide-margin': hideMargin }"
  >
    <template #label>
      <slot name="label" />
    </template>
    <slot />
    <template #error="scope">
      <slot name="error" v-bind="scope" />
    </template>
  </el-form-item>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ElFormItem from 'element-ui/lib/form-item'

export default defineComponent({
  name: 'OFormItem',
  components: {
    ElFormItem
  },
  inheritAttrs: false,
  props: {
    hideMargin: Boolean
  }
})
</script>

<style lang="scss">
.o-form-item.hide-margin {
  margin-bottom: 0;
  transition: margin 100ms;
  &.is-error {
    margin-bottom: 22px;
  }
}
.el-form--label-top {
  .o-form-item .el-form-item__label {
    font-weight: bold;
    padding-bottom: 0;
  }
}
</style>

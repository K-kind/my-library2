<template>
  <el-form
    v-on="$listeners"
    v-bind="$attrs"
    ref="ruleForm"
    @submit.native.prevent="submit"
  >
    <slot v-bind:is-loading="isLoading" />
  </el-form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import ElForm from 'element-ui/lib/form'

export default defineComponent({
  name: 'OForm',
  components: {
    ElForm
  },
  inheritAttrs: false,
  setup: (_, { emit }) => {
    const state = reactive({
      ruleForm: null,
      isLoading: false
    })

    const stopLoading = () => {
      state.isLoading = false
    }
    const submit = (event) => {
      state.ruleForm.validate((valid) => {
        if (valid) {
          emit('valid-submit', {
            event,
            stopLoading
          })
          state.isLoading = true
        }
      })
    }

    const methodNames = [
      'validate',
      'validateField',
      'resetFields',
      'clearValidate'
    ]
    const methods = {}

    methodNames.forEach((name) => {
      methods[name] = (...args) => {
        state.ruleForm[name](...args)
      }
    })
    // const clearValidate = (_props: any) => {
    //   ruleForm.value.clearValidate(_props)
    // }
    // const resetFields = () => {
    //   ruleForm.value.resetFields()
    // }

    return {
      ...toRefs(state),
      submit,
      ...methods
    }
  }
})
</script>

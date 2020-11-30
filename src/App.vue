<template>
  <div>
    <o-form :model="field" :rules="rules" @valid-submit="submit" v-slot="{ isLoading }">
      <o-form-item prop="name">
        <o-input v-model="field.name" />
      </o-form-item>
      <o-button :loading="isLoading" native-type="submit">ボタン</o-button>
    </o-form>
    <o-button @click="open(1)">ダイアログ</o-button>
    <template v-if="step === 1">
      <o-dialog :visible="isVisible1" @close="close(1, 2)" :modal="false">
        こんにちは
      </o-dialog>
    </template>
    <o-button @click="open(2)">ダイアログ2</o-button>
    <template v-if="step === 2">
      <o-dialog :visible="isVisible2" @close="close(2)" :modal="false">
        こんにちは2
      </o-dialog>
    </template>
    <div class="overlay" v-show="step !== 0"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
export default defineComponent({
  setup: () => {
    const state = reactive({
      field: {
        name: ''
      },
      rules: {
        name: { required: true }
      },
      isVisible1: false,
      isVisible2: false,
      step: 0
    })

    const open = (num) => {
      state.step = num
      state[`isVisible${num}`] = true
    }

    const close = (num, next = 0) => {
      state[`isVisible${num}`] = false
      setTimeout(() => {
        state.step = next
        state[`isVisible${next}`] = true
      }, 200)
    }

    const submit = ({ stopLoading }) => {
      setTimeout(() => {
        console.log('submitted!')
        stopLoading()
      }, 1000)
    }

    return {
      ...toRefs(state),
      submit,
      open,
      close
    }
  }
})
</script>
<style lang="scss">
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: .5;
  background: #0a0a0a;
  z-index: 1000;
}
</style>

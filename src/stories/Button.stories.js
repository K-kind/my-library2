import { action } from '@storybook/addon-actions'
import lib from './../index.js'

export const actionsData = {
  onClick: action('onClick'),
}

export default {
  title: 'Button',
  component: lib.Button,
  excludeStories: /.*Data$/
}

export const Default = (args, { argTypes }) => ({
  components: { OButton: lib.Button },
  template: '<o-button @click="onClick" :type="type" :size="size">ボタン</o-button>',
  props: Object.keys(argTypes),
  methods: actionsData
})

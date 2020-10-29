import { action } from '@storybook/addon-actions'
import Button from './../components/Button.vue'

export const actionsData = {
  onClick: action('onClick'),
}

export default {
  title: 'Button',
  component: Button,
  excludeStories: /.*Data$/,
}

export const Basic = (args, { argTypes }) => ({
  components: { OButton: Button },
  template: '<o-button @click="onClick">ボタン</o-button>',
  props: Object.keys(argTypes),
  methods: actionsData
})

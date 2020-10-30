import { action } from '@storybook/addon-actions'
import lib from './../index'

export const actionsData = {
  onClick: action('onClick'),
}

export default {
  title: 'Button',
  component: lib.Button,
  excludeStories: /.*Data$/,
  // argTypes: {
  //   type: {
  //     control: {
  //       type: 'select',
  //       options: [
  //         'primary', 
  //         'success', 
  //         'warning',
  //         'danger',
  //         'info',
  //         'text'
  //       ]
  //     }
  //   },
  //   size: {
  //     control: {
  //       type: 'select',
  //       options: [
  //         'default', 
  //         'medium', 
  //         'small',
  //         'mini'
  //       ]
  //     }
  //   },
  // }
}

export const Default = (args, { argTypes }) => ({
  components: { OButton: lib.Button },
  template: '<o-button @click="onClick" v-bind="$props">ボタン</o-button>',
  // props: lib.Button.props,
  methods: actionsData
})
/* 初期値 */
Default.args = {
  ...lib.Button.props
}

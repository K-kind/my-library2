import { action } from '@storybook/addon-actions'
// import lib from './../index'
// import ElButton from 'element-ui/packages/button/src/button.vue'
import OButton from './../components/Button.vue'

export const actionsData = {
  onClick: action('onClick'),
}

export default {
  title: 'Button',
  component: OButton,
  excludeStories: /.*Data$/,
  // argTypes: {
  //   round: false
  // }
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
  components: { OButton: OButton },
  template: `<o-button @click="onClick" v-bind="$props">${Object.keys(args)}</o-button>`,
  // props: lib.Button.props,
  // props: Object.keys(argTypes),
  props: Object.keys(argTypes),
  methods: actionsData,
})
/* 初期値 */
// Default.args = {
  // size: 'mini'
// }

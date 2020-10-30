import OBadge from 'element-ui/packages/badge/src/main.vue'
import lib from './../index'

export default {
  title: 'Badge',
  component: OBadge
}

export const Default = (args, { argTypes }) => ({
  components: { OBadge, OButton: lib.Button },
  template: '<o-badge v-bind="$props"><o-button>バッジ</o-button></o-badge>',
  props: Object.keys(argTypes)
})

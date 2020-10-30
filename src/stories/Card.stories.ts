import OCard from 'element-ui/packages/card/src/main.vue'

export default {
  title: 'Card',
  component: OCard
}

export const Default = (args, { argTypes }) => ({
  components: { OCard },
  template: '<o-card v-bind="$props"><div slot="header">ヘッダー</div>ボディ</o-card>',
  props: Object.keys(argTypes)
})

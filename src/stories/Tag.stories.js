// import lib from './../index.js'
import Tag from 'element-ui/packages/tag/src/tag.vue'

export default {
  title: 'Tag',
  component: Tag
}

export const Default = (args, { argTypes }) => ({
  components: { OTag: Tag },
  template: '<o-tag v-bind="$props">タグ</o-tag>',
  props: Object.keys(argTypes)
})

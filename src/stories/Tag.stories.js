import lib from './../index.js'
// import Tag from 'element-ui/packages/tag/src/tag.vue'

export default {
  title: 'Tag',
  component: lib.Tag
}

export const Default = (args, { argTypes }) => ({
  components: { OTag: lib.Tag },
  template: '<o-tag v-bind="$props">タグ</o-tag>',
  props: Object.keys(argTypes)
})

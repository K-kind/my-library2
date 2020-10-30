import lib from './../index.js'

export default {
  title: 'Tag',
  component: lib.Tag
}

export const Default = (args, { argTypes }) => ({
  components: { OTag: lib.Tag },
  template: '<o-tag :type="type">タグ</o-tag>',
  props: Object.keys(argTypes)
})

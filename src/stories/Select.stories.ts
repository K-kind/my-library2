import OSelect from 'element-ui/packages/select/src/select.vue'
import lib from './../index'

export default {
  title: 'Select',
  component: OSelect
}

export const Default = (args, { argTypes }) => ({
  components: {
    OSelect,
    OOption: lib.Option
  },
  template: `
<o-select v-bind="$props" v-on="$listeners">
  <el-option label="1st" :value="0" />
  <el-option label="2nd" :value="1" />
  <el-option label="3rd" :value="2" />
</o-select>
`,
  props: Object.keys(argTypes)
})

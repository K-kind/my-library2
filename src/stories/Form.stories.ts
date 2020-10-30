import OForm from 'element-ui/packages/form/src/form.vue'
// import OFormItem from 'element-ui/packages/form/src/form-item.vue'
// import OInput from 'element-ui/packages/input/src/input.vue'
import lib from './../index'

export default {
  title: 'Form',
  component: OForm
}

export const Default = (args, { argTypes }) => ({
  components: {
    OForm,
    OFormItem: lib.FormItem,
    OInput: lib.Input
  },
  template: `
<o-form v-bind="$props">
  <o-form-item label="name">
    <o-input />
  </o-form-item>
  <o-form-item label="email">
    <o-input type="email" />
  </o-form-item>
</o-form>`,
  props: Object.keys(argTypes)
})

import OInput from 'element-ui/packages/input/src/input.vue'

export default {
  title: 'Input',
  component: OInput
}

export const Default = (args, { argTypes }) => ({
  components: { OInput },
  template: '<o-input v-bind="$props" v-on="$listeners" />',
  props: Object.keys(argTypes)
})

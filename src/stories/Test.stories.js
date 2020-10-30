import Test from './../components/Test.vue'

// export const actionsData = {
//   onClick: action('onClick'),
// }

export default {
  title: 'Test',
  component: Test
}

export const Default = (args, { argTypes }) => ({
  components: { Test },
  template: '<Test />'
})

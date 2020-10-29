// import { storiesOf } from '@storybook/vue'
// import { linkTo } from '@storybook/addon-links'
// // import { withNotes } from '@storybook/addon-notes'
// import { withInfo } from 'storybook-addon-vue-info'
// import Centered from '@storybook/addon-centered'

// import Button from './../components/Button.vue'
// import './../../theme/index.css'

// storiesOf('Button', module)
//   .addDecorator(Centered)
//   .addDecorator(withInfo)
//   .addDecorator(withKnobs)
//   .add('with some Addons', () => {
//     const label = text('Label', 'BUTTON')
//     const myColor = color('Color', '#3c3c3c')
//     return {
//       components: { OButton: Button },
//       template: `
//         <div>
//           <p>You can change the button label by touching widgets in a KNOBS tab.</p>
//           <o-button
//             style="background-color: ${myColor}"
//             @click="handleClick"
//           >${label}</o-button>
//         </div>
//       `,
//       methods: {
//         handleClick: linkTo('SomeComponent')
//       },
//     }
//   })

// storiesOf('SomeComponent', module)
// .add('hoge', () => ({
//   template: `<div>HOGE</div>`
// }))

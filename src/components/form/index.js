import Component from './src/form'
// import AsyncValidator from 'async-validator'
// import messagesJa from './messages-ja'

// AsyncValidator.messages = {
//   ...AsyncValidator.messages,
//   ...messagesJa
// }

Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component

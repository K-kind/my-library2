import Component from 'element-ui/lib/form'
import AsyncValidator from 'async-validator'
import messagesJa from './messages-ja'

AsyncValidator.messages = {
  ...AsyncValidator.messages,
  ...messagesJa
}

Component.name = Component.name.replace(/^El/, 'O')
Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component

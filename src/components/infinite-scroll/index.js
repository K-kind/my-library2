import Component from 'element-ui/lib/infinite-scroll'

Component.name = Component.name.replace(/^El/, 'O')
Component.install = function(Vue) {
  Vue.directive(Component.name, Component)
}

export default Component

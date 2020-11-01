import Component from 'element-ui/lib/autocomplete'

Component.name = Component.name.replace(/^El/, 'O')
Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default ElComponent

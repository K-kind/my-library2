import Component from 'element-ui/lib/collapseItem'

Component.name = Component.name.replace(/^El/, 'O')
Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component

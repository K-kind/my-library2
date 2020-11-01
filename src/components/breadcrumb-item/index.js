import Component from 'element-ui/lib/breadcrumb-item'

Component.name = Component.name.replace(/^El/, 'O')
Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component

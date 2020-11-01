import Breadcrumb from 'element-ui/lib/breadcrumb'

Breadcrumb.name = Breadcrumb.name.replace(/^El/, 'O')
Breadcrumb.install = function(Vue) {
  Vue.component(Breadcrumb.name, Breadcrumb)
}

export default Breadcrumb

import BreadcrumbItem from 'element-ui/lib/breadcrumb-item'

BreadcrumbItem.name = BreadcrumbItem.name.replace(/^El/, 'O')
BreadcrumbItem.install = function(Vue) {
  Vue.component(BreadcrumbItem.name, BreadcrumbItem)
}

export default BreadcrumbItem

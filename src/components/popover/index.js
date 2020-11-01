import Popover from 'element-ui/lib/popover'

Popover.name = Popover.name.replace(/^El/, 'O')
Popover.install = function(Vue) {
  Vue.directive('popover', Popover.directive)
  Vue.component(Popover.name, Popover)
}

export default Popover

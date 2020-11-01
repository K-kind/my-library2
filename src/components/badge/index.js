import Badge from 'element-ui/lib/badge'

Badge.name = Badge.name.replace(/^El/, 'O')
Badge.install = function(Vue) {
  Vue.component(Badge.name, Badge)
}

export default Badge

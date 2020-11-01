import Aside from 'element-ui/lib/aside'

Aside.name = Aside.name.replace(/^El/, 'O')
Aside.install = function(Vue) {
  Vue.component(Aside.name, Aside)
}

export default Aside

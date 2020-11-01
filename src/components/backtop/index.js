import Backtop from 'element-ui/lib/backtop'

Backtop.name = Backtop.name.replace(/^El/, 'O')
Backtop.install = function(Vue) {
  Vue.component(Backtop.name, Backtop)
}

export default Backtop

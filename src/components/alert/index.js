import Alert from 'element-ui/lib/alert'

Alert.name = Alert.name.replace(/^El/, 'O')
Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert)
}

export default Alert

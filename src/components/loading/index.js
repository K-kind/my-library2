import Loading from 'element-ui/lib/loading'

export default {
  install(Vue) {
    Vue.use(Loading.directive)
    Vue.prototype.$loading = Loading.service
  },
  directive: Loading.directive,
  service: Loading.service
}

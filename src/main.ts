import Vue from 'vue'
import App from './App.vue'
import library from '../lib/lib-main.common'
import '../theme/index.css'

Vue.use(library)
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) }
}).$mount('#app')

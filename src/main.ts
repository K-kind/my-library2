import Vue from 'vue'
import App from './App.vue'
import CompositionAPI from '@vue/composition-api'
// import library from './index.js'
import library from '../lib/lib-main.common'
import '../theme/index.css'

Vue.use(CompositionAPI)
Vue.use(library)
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) }
}).$mount('#app')

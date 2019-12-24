import Vue from 'vue'
import App from './App.vue'
import router from './router'
// window.$ = import 'expose-loader?$!expose-loader?jQuery!jquery'
const $ = require('expose-loader?$!expose-loader?jQuery!jquery')
window.$ = $

Vue.config.productionTip = false
Vue.prototype.EventBus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

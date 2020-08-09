import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 调用接口方法

import { get, post } from './request/http'
Vue.prototype.$get = get
Vue.prototype.$post = post

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

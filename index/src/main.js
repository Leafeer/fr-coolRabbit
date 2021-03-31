import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import VueGridLayout from 'vue-grid-layout';
// 调用接口方法

import { get, post } from './request/http'
var axios = require('axios')

// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios

Vue.use(ElementUI);
Vue.use(VueGridLayout);
Vue.prototype.$get = get
Vue.prototype.$post = post

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     if (store.state.user.username) {
//       next()
//     } else {
//       next({
//         path: 'login',
//         query: { redirect: to.fullPath }
//       })
//     }
//   } else {
//     next()
//   }
// })
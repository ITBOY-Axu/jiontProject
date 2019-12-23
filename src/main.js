import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from 'utils/request.js'
import 'amfe-flexible'; //移动端rem插件
Vue.config.productionTip = false
Vue.prototype.$axios = request   //注册全局的axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

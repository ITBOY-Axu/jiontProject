import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from 'utils/request.js'
import 'amfe-flexible'; //移动端rem插件
import { Icon } from "vant";  //vant  组件导入
import animated from 'animate.css' //  导入animate.css
Vue.config.productionTip = false
Vue.prototype.$axios = request   //注册全局的axios
Vue.use(Icon)
Vue.use(animated)//  导入animate.css
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

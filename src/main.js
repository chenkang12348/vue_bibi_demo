import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入Vant 组件和样式
import Vant from 'vant'
import 'vant/lib/index.css'

// 引入axios
import axios from 'axios'

// 配置请求的根路径
axios.defaults.baseURL = 'http://112.74.99.5:3000/web/api'
Vue.prototype.$http = axios // 挂载vue实例上

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

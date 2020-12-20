import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入Vant 组件和样式
import Vant from 'vant'
import 'vant/lib/index.css'
import { Toast } from 'vant'
// 引入axios
import axios from 'axios'

// 配置请求的根路径
axios.defaults.baseURL = 'http://112.74.99.5:3000/web/api'
// 配置拦截器
// 01 创建实例
const request = axios.create()
// 02请求拦截器，在请求头加token
request.interceptors.request.use(
  // 成功 返回出去
  function(config) {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('id')) {
      const token = 'Bearer ' + sessionStorage.getItem('token')
      config.headers.Authorization = token
    }
    return config
  },
  // 失败 拒绝
  function(error) {
    return Promise.reject(error)
  }
)
// 03 设置响应拦截器
request.interceptors.response.use(
  response => {
    if (response.data.message === '内部错误' || response.data.status === 10116 || response.data.status === 10115) {
      // router.push({ name: 'exceptionInteriorError' });
      Toast.fail('后台工程师紧急处理中...')
    } else if (response.data.message === 'No_account_exists') {
      Toast.fail('该账号已失效，请重新登录。')
    } else if (response.data.status === 404) {
      router.push({ name: 'exception404' })
    }
    return response
  },
  error => {
    if (error.message.includes('timeout')) {
      Toast.fail('请求超时，请重新加载')
    } else if (error.message.includes('Network Error')) {
      // router.push({ name: 'exceptionNetError' }); 跳转至网络错误的页面

      Toast.fail('网络错误')
    }
    return Promise.reject(error)
  }
)

Vue.prototype.$http = request // 挂载vue实例上\

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

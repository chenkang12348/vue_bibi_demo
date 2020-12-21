import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/register.vue' // 引入
import Login from '../views/login.vue'
import userInfo from '@/views/userInfo'
import { Toast } from 'vant'
import edit from '@/views/edit'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' }, // 路由跳转
  { path: '/register', component: Register }, // 挂载
  { path: '/login', component: Login },
  { path: '/userinfo', component: userInfo },
   { path: '/edit', component: edit }
]

const router = new VueRouter({
  routes
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  //  from 起始路径
  // next 函数 表示放行 next()  next('/强制跳转的路径')
  if (to.path === '/login' || to.path === '/register') {
    return next()
  }
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) {
    // 如果token不存在 强制跳转到登录页面
    Toast.fail('请先登录')
    return next('/login')
  } else {
    next()
  }
})
export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/register.vue' // 引入
import Login from '../views/login.vue'
import userInfo from '@/views/userInfo'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' }, // 路由跳转
  { path: '/register', component: Register }, // 挂载
  { path: '/login', component: Login },
   { path: '/userinfo', component: userInfo }
]

const router = new VueRouter({
  routes
})

export default router

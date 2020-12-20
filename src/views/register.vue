<template>
  <div>
    <login-top middleTop="注册bilibili">
      <div slot="right" @click="$router.push('login')" class="rightBtn">登录</div>
    </login-top>
    <login-text label="姓名" class="nameListStyle" type="text" placeholder="请输入姓名" rule="^.{6,16}$" @inputChange="res => userinfo.name = res"></login-text>

    <login-text label="账号" type="text" placeholder="请输入账号" rule="^.{6,16}$" @inputChange="res => userinfo.username = res"></login-text>

    <login-text label="密码" type="password" placeholder="请输入密码" rule="^.{6,16}$" @inputChange=" res => userinfo.password = res"></login-text>

    <login-btn btntext="注册" @registerSubmit="registerSubmit"></login-btn>
  </div>

</template>

<script>
// 引入公用组件
import loginTop from '../components/common/loginTop.vue'
import loginText from '@/components/common/loginText'
import loginBtn from '@/components/common/loginBtn'

export default {
  data () {
    return {
      userinfo: {
        name: '',
        username: '',
        password: ''
      }

    }
  },
  created () {

  },
  methods: {
    // succesInput (content) {
    //   // 接受子组件传递的值
    //   this.name = content
    // }
    async registerSubmit () {
      // 接受子组件传值
      // console.log('发送成功')
      // 发送前再次校验 防止输入超过十六位
      const relg = /^.{6,16}$/
      const { name, username, password } = this.userinfo

      // 判断当所有数据都有值的时候再去发送请求
      if (relg.test(name) && relg.test(username) && relg.test(password)) {
        // console.log('正则校验成功')
        const { data: res } = await this.$http.post('/register', this.userinfo)
        console.log(res)
        if (res.code !== 200) {
          this.$toast.fail(res.msg)
        } else {
          this.$toast.success(res.msg)
        }
      } else {
        this.$toast.fail('格式错误，请重新输入6~16字符！')
      }
    }

  },
  components: {
    // 注册局部组件
    loginTop,
    loginText,
    loginBtn

  }
}
</script>

<style lang="less" scoped>
.nameListStyle {
  margin: 2.778vw 0;
}
</style>

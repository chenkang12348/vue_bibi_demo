<template>
  <div>
    <login-top middleTop="登录bilibili">
      <div slot="right" @click="$router.push('register')" class="rightBtn">注册</div>
    </login-top>

    <login-text label="账号" type="text" placeholder="请输入账号" rule="^.{6,16}$" @inputChange="res => userinfo.username = res" class="nameListStyle"></login-text>

    <login-text label="密码" type="password" placeholder="请输入密码" rule="^.{6,16}$" @inputChange=" res => userinfo.password = res"></login-text>

    <login-btn btntext="登录" @registerSubmit="registerSubmit"></login-btn>

  </div>
</template>
<script>
import loginTop from '../components/common/loginTop.vue'
import loginText from '@/components/common/loginText'
import loginBtn from '@/components/common/loginBtn'
export default {
  components: {
    // 注册局部组件
    loginTop,
    loginText,
    loginBtn

  },
  data () {
    return {
      userinfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async registerSubmit () {
      const relg = /^.{6,16}$/
      const { username, password } = this.userinfo
      if (relg.test(username) && relg.test(password)) {
        // console.log('正则校验成功')
        const { data: res } = await this.$http.post('/login', this.userinfo)

        if (res.code !== 200) {
          this.$toast.fail(res.msg)
        } else {
          this.$toast.success(res.msg)
          sessionStorage.setItem('id', res.id)
          sessionStorage.setItem('token', res.token)

          this.$router.push('/userinfo')
        }
      } else {
        this.$toast.fail('格式错误，请重新输入6~16字符！')
      }
    }
  }

}
</script>
<style lang="less" scoped>
.nameListStyle {
  margin: 2.778vw 0;
}
</style>
<template>
  <div class="btnParent" @click="registerClick">
    <div class="loginBtn" >{{btntext}}</div>
  </div>
</template>
<script>

export default {
  props: ['btntext'],
  data () {
    return {

    }
  },
  methods: {
    registerClick () {
      // 发送数据到父元素
      this.$emit('registerSubmit')
    }
  }
}
</script>
<style lang="less" scoped>
.btnParent {
  padding: 4.167vw;
  padding-bottom: 0vw;
}
.loginBtn {
  height: 13.889vw;
  background-color: #ff9db5;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.944vw;
  font-size: 4.444vw;
}
</style>

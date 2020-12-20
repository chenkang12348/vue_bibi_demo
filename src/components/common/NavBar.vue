<template>
  <div class="navBar">
    <div class="logo">
      <img src="../../assets/images/logo.png" alt="">
    </div>
    <div>
      <van-search v-model="value" placeholder="请输入关键词" @click="alert11" />
    </div>
    <div class="user">
      <img src="../../assets/images/default_img.jpg" alt="">
      <button @click="download">下载app</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    download () {
      this.$toast({
        message: '开始下载app',
        icon: 'down'
      })
    },
    alert11 () {
      console.log(123)
    }
  }
}
</script>
<style lang="less" scoped>
.navBar {
  height: 12.5vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  .logo {
    height: 100%;
    width: 27.778vw;
    display: flex;
    justify-content: center;
    img {
      display: block;
      height: 100%;
    }
  }
  div:nth-child(2) {
    flex: 1;
    height: 100%;
    .van-search {
      height: 100%;
      .van-search__content {
        height: 8.333vw;
        text-align: center;
        line-height: 8.333vw;
        background-color: #eee;
        border-radius: 4.167vw;
        font-size: 3.611vw;
        /deep/.van-field__body {
          height: 100%;
          input {
            font-size: 3.611vw;
          }
        }
        /deep/.van-field__left-icon {
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;

          /deep/i::before {
            font-size: 3.611vw;
          }
        }
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 6.667vw;
    }
    button {
      padding: 1.389vw 2.778vw;
      margin: 0 1.389vw;
      background-color: #fb7299;
      border: none;
      color: #fff;
      font-size: 3.611vw;
      border-radius: 1.389vw;
    }
  }
}
</style>
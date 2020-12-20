<template>
  <div class="userinfo">
    <nav-bar></nav-bar>
    <div class="back">
      <img src="../assets/images/bannerTop_new.png" alt="">
    </div>
    <div class="user">
      <user-detail :userinfo="model"></user-detail>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/common/NavBar'
import userDetail from '@/components/userinfo/userDetail'
export default {
  data () {
    return {
      model: {}
    }
  },
  components: {
    NavBar,
    userDetail
  },
  created () {
    this.userinfoData()
  },
  methods: {
    async userinfoData () {
      const res = await this.$http.get('/user/' + sessionStorage.getItem('id')
        //  {
        //    headers: {
        //       Authorization: 'Bearer ' + sessionStorage.getItem('token')
        //    }
        //  }
      )

      this.model = res.data[0]
      // console.log(this.model)
    }
  }
}
</script>
<style lang="less" scoped>
.userinfo {
  .back {
    img {
      height: 100px;
      width: 100%;
    }
  }
}
</style>
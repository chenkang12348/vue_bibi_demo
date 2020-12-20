<template>
  <div class="userinfo">
    <nav-bar></nav-bar>
    <div class="back">
      <img src="../assets/images/bannerTop_new.png" alt="">
    </div>
    <div class="user"></div>
  </div>
</template>
<script>
import NavBar from '@/components/common/NavBar'
export default {
  components: {
    NavBar
  }

}
</script>
<style lang="less" scoped>
.userinfo{
 .back{
   img{
     height: 100px;
     width: 100%;
   }
 }
}
</style>
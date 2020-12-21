<template>
  <div class="wrap">
    <div class="userDetail">
      <div class="head">

        <!-- 如果线上为空 则展示 默认头像 -->
        <img :src="userinfo.user_img" v-if="userinfo.user_img">
        <img src="../../assets/images/default_img.jpg" v-else>
      </div>
      <div class="user_edit">
        <div class="title">
          <div>
            <span>0</span>
            <span>粉丝</span>
          </div>
          <span>|</span>
          <div>
            <span>0</span>
            <span>关注</span>
          </div>
          <span>|</span>
          <div>
            <span>0</span>
            <span>获赞</span>
          </div>
        </div>
        <div class="edit" @click="$router.push('/edit')">
          编辑资料
        </div>
      </div>
    </div>
    <div class="part">
      <div class="base">
        <span class="name">{{userinfo.name}}</span>
        <span class="gender"></span>
        <span class="level"></span>
      </div>
      <div class="desc">
        <span class="content" v-if="userinfo.user_desc">{{userinfo.user_desc}}</span>
        <span class="content" v-else>这个人很神秘，什么都没有写</span>

      </div>
    </div>
    <div class="tabs">
      <span>动态</span>
      <span>视频</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['userinfo']

}
</script>
<style lang="less" scoped>
.wrap {
  background-color: #ffffff;
}
.userDetail {
  padding: 0 10.001px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .head {
    width: 85px;
    height: 85px;
    border-radius: ceil(85px / 2);
    overflow: hidden;
    img {
      height: 100%;
    }
  }

  .user_edit {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > span {
        color: #ccc;
        padding-bottom: 2.778vw;
      }
      div {
        display: flex;
        padding: 0 5.556vw;
        margin-bottom: 2.778vw;

        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 3.611vw;
        span:nth-child(1) {
          font-weight: bold;
        }
        span:last-child {
          font-size: 3.333vw;
          color: #aaa;
        }
      }
      div:last-child {
        border: none;
      }
    }
    .edit {
      padding: 1.389vw;
      width: 41.667vw;
      text-align: center;
      border: 0.278vw solid #fb7599;
      border-radius: 1.389vw;
      font-size: 3.889vw;
      color: #fb7599;
    }
  }
}
.part {
  padding: 3.333vw;
  .base {
    .name {
      font-size: 5vw;
      font-weight: bold;
    }
  }
}
.tabs {
  height: 11.111vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 0.278vw solid #e7e7e7;
  border-bottom: 0.278vw solid #e7e7e7;
  span {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 11.111vw;
  }
}
</style>
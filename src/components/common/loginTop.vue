<template>
  <!-- 公用组件  登录  注册 -->
  <div>
    <div class="loginTop">
      <div><img src="../../assets/images/logo.png" alt=""></div>
      <div>{{middleTop}}</div>
      <div class="rightBtn">
        <!-- 插槽 -->
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // 接收父组件传值
  props: ['middleTop']
}
</script>
<style lang="less" scoped>
/* 使用 px-to-vw插件 实现尺寸字使用  选中 px  按下shift + w*/
.loginTop {
  height: 13.889vw;
  background-color: #fff;
  display: flex;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.444vw;
  }
  .rightBtn {
    font-size: 3.889vw;
  }
}
</style>

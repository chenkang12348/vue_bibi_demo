<template>
  <div class="wrap">

    <div class="userinfo">
      <span>{{left}}</span>
      <span>
        <slot name="right"></slot>
      </span>
    </div>

  </div>
</template>
<script>
export default {
  props: ['left'],
   data () {
    return {

    }
  }

}
</script>
<style lang="less" scoped>
.wrap {
  .userinfo {
    padding: 10px 15px;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #eee;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #999;
  }
}
</style>
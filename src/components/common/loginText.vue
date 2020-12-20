<template>
  <div>
    <van-field v-model="content" :label="label" :placeholder="placeholder" :type="type" :rule="rule" />
  </div>
</template>
<script>
export default {
  props: ['label', 'placeholder', 'type', 'rule'],
  data () {
    return {
      content: ''
    }
  },
  methods: {
    // 对输入框的内容进行正则验证 当满足条件时，将数据发送给父组件
    handlerulg () {
      // console.log(this.rule)
      const rule = new RegExp(this.rule) // RegExp()将字符串转换为正则
      // console.log(rule)
      if (rule.test(this.content)) { // 正则校验
        // console.log('正则校验成功')

        this.$emit('inputChange', this.content) // 将数据发送给父组件
      }
    }
  },
  watch: {
    // 监听data中的数据
    content () {
      // 监听输入框的数据变化
      this.handlerulg()
    }
  }
}
</script>
<style lang="less" scoped></style>

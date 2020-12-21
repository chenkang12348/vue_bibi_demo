<template>
  <div class="wrap">
    <nav-bar></nav-bar>
    <div class="userinfo">
      <div class="userimg">
        <van-uploader :after-read="afterRead" class="uploderfile" preview-size="100vw" />
        <edit-banner left="头像" class="userImg">
          <img :src="userinfo.user_img" slot='right' v-if="userinfo.user_img">
          <img src="../assets/images/default_img.jpg" slot='right' v-else>
        </edit-banner>
      </div>

      <edit-banner left="昵称">
        <span slot="right">{{userinfo.name}}</span>
      </edit-banner>
      <edit-banner left="账号">
        <span slot="right">{{userinfo.username}}</span>
      </edit-banner>
      <edit-banner left="性别">
        <span slot="right" v-if="userinfo.gender === '1'">
          男
        </span>
        <span slot="right" v-else>
          女
        </span>
      </edit-banner>
      <edit-banner left="出生日期">
        <span slot="right"></span>
      </edit-banner>
      <edit-banner left="个性签名">
        <span slot="right">{{userinfo.user_desc}}</span>
      </edit-banner>

    </div>

  </div>
</template>
<script>
import NavBar from '@/components/common/NavBar'
import EditBanner from '../components/common/editBanner.vue'

export default {
  data () {
    return {
      userinfo: {}
    }
  },
  components: {
    NavBar,
    EditBanner
  },
  created () {
    this.selectUser()
  },
  methods: {
    async selectUser () {
      const res = await this.$http.get('/user/' + sessionStorage.getItem('id'))

      // 将数组存放到vuex中
      this.userinfo = res.data[0]
      // console.log(this.model)
    },
    // 上传头像
    async afterRead (file) {
      // console.log(file)
      const formData = new FormData() // 发送文件
      formData.append('file', file.file)
      const res = await this.$http.post('/upload', formData)
      // console.log(res)
      if (res.status !== 200) {
        return this.$toast.fail('上传失败')
      } else {
        this.userinfo.user_img = res.data.url
        return this.$toast.success('上传成功')
      }
    }
  }

}

</script>
<style lang="less" scoped>
.userinfo {
  margin-top: 15px;
  .userImg {
    img {
      width: 12.5vw;
      height: 12.5vw;
      border-radius: 50%;
    }
  }
  .userimg {
    position: relative;
    overflow: hidden;
    .uploderfile {
      position: absolute;
      opacity: 0;
    }
  }
}
</style>
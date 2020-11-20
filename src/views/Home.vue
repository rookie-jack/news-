<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="iconfont iconnew"></div>
        <div class="search">
          <input type="text" placeholder="搜索新闻" />
        </div>
      </div>
      <van-button type="info" @click="showTos">发送请求</van-button><br />
      <router-link to="/login">登录</router-link><br />
      <router-link to="/register">注册</router-link><br />
      <router-link to="/user">个人中心</router-link>
      <router-link to="/useredit">编辑信息</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showTos() {
      this.$axios({
        method: "post",
        url: "http://157.122.54.189:9083/Login",
        data: {
          username: "100862",
          password: "123",
        },
      }).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  width: 100vw;
  height: 49px;
  background-color: #f00;
  padding: 0 20px;

  .iconnew {
    font-size: 54px;
    color: #fff;
  }

  .search {
    width: 210px;
    height: 34px;
    input {
      width: 210 /360 * 100vw;
      height: 34px;
    }
  }
}
</style>

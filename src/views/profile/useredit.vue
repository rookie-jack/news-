<template>
  <div>
    <div class="container">
      <div class="header">
        <span class="iconfont iconjiantou2"></span>
        <b>编辑资料</b>
      </div>
      <div class="user">
        <img src="../../assets/logo.png" alt="" class="avatar" />
      </div>
      <div class="tool">
        <UserBar title="昵称" name="沙雕网友" />
        <UserBar title="密码" name="******" />
        <UserBar title="性别" name="男" />
      </div>
    </div>
  </div>
</template>

<script>
import UserBar from "../../components/UserBar.vue";
export default {
  components: { UserBar },
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 600 /360 * 100vw;
  background-color: #f0f0f0;
  text-align: center;

  .header {
    height: 50 /360 * 100vw;
    line-height: 50 /360 * 100vw;
    .iconjiantou2 {
      float: left;
      margin-left: 10 /360 * 100vw;
      font-size: 20 /360 * 100vw;
    }
    b {
      margin-left: -20 /360 * 100vw;
      font-size: 16 /360 * 100vw;
    }
  }

  .user {
    .avatar {
      margin: 30 /360 * 100vw 0;
      width: 65 /360 * 100vw;
      border-radius: 50%;
    }
  }
}
</style>
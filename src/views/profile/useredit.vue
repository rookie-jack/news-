<template>
  <div>
    <div class="container">
      <TopNav title="编辑信息" />
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
import TopNav from "../../components/TopNav.vue";
import UserBar from "../../components/UserBar.vue";
export default {
  components: { UserBar, TopNav },
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 600 /360 * 100vw;
  background-color: #f0f0f0;
  text-align: center;

  .user {
    .avatar {
      margin: 30 /360 * 100vw 0;
      width: 65 /360 * 100vw;
      border-radius: 50%;
    }
  }
}
</style>
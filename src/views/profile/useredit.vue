<template>
  <div>
    <div class="container">
      <TopNav title="编辑信息" />
      <div class="user">
        <img
          v-if="userInfo.head_img"
          :src="$axios.defaults.baseURL + userInfo.head_img"
          alt=""
          class="avatar"
        />
        <img v-else src="../../assets/logo.png" alt="" class="avatar" />
      </div>
      <div class="tool">
        <UserBar title="昵称" :name="userInfo.nickname" />
        <UserBar title="密码" name="******" />
        <UserBar title="性别" :name="userInfo.gender == 1 ? '雄性' : '雌性'" />
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../../components/TopNav.vue";
import UserBar from "../../components/UserBar.vue";
export default {
  components: { UserBar, TopNav },
  data() {
    return {
      userInfo: {},
    };
  },
  created() {
    this.$axios({
      url: "/user/" + localStorage.getItem("userId"),
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log(res);
      const { message, data } = res.data;
      if (message == "获取成功") {
        this.userInfo = data;
        console.log(this.userInfo);
      }
    });
  },
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
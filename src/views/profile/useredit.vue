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
        <UserBar
          title="昵称"
          :name="userInfo.nickname"
          @click.native="isshow = true"
        />
        <UserBar title="密码" name="******" />
        <UserBar title="性别" :name="userInfo.gender == 1 ? '雄性' : '雌性'" />
        <van-dialog
          v-model="isshow"
          show-cancel-button
          title="修改昵称"
          @confirm="setValue"
        >
          <van-field v-model="value" placeholder="请输入昵称" />
        </van-dialog>
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
      isshow: false,
      value: "",
    };
  },
  created() {
    // this.$axios({
    //   url: "/user/" + localStorage.getItem("userId"),
    //   headers: {
    //     Authorization: localStorage.getItem("token"),
    //   },
    // }).then((res) => {
    //   console.log(res);
    //   const { message, data } = res.data;
    //   if (message == "获取成功") {
    //     this.userInfo = data;
    //     console.log(this.userInfo);
    //   }
    // });
    this.loadPage();
  },
  methods: {
    loadPage() {
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
        }
      });
    },
    setValue() {
      console.log(this.value);
      this.$axios({
        method: "post",
        url: "/user_update/" + localStorage.getItem("userId"),
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          nickname: this.value,
        },
      }).then((res) => {
        console.log(res.data);
        this.loadPage();
      });
    },
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
      object-fit: cover;
    }
  }
}
</style>
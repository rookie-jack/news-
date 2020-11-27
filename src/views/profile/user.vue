<template>
  <div>
    <div class="container">
      <div class="user" @click="$router.push('/useredit')">
        <img
          v-if="userInfo.head_img"
          :src="$axios.defaults.baseURL + userInfo.head_img"
          class="avatar"
        />
        <img v-else src="../../assets/logo.png" alt="" class="avatar" />
        <div class="userright">
          <div class="username">
            <span
              class="iconfont"
              :class="{
                iconxingbienan: userInfo.gender === 1,
                iconxingbienv: userInfo.gender === 0,
              }"
            ></span>
            {{ userInfo.nickname || userInfo.username }}
          </div>
          <div class="date">2020-12-10</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
      <div class="tool">
        <UserBar
          @click.native="$router.push('/follow')"
          :title="'我的关注'"
          :name="'关注的用户'"
        />
        <UserBar title="我的跟帖" name="跟帖/回复" />
        <UserBar
          @click.native="$router.push('/star')"
          title="我的收藏"
          name="文章/视频"
        />
        <UserBar title="设置" @click.native="$router.push('/useredit')" />
        <UserBar title="退出" @click.native="logout" />
      </div>
    </div>
  </div>
</template>

<script>
import UserBar from "../../components/UserBar.vue";
export default {
  components: { UserBar },
  data() {
    return {
      userInfo: {},
    };
  },
  created() {
    this.$axios({
      url: "/user/" + localStorage.getItem("userId"),
    }).then((res) => {
      console.log(res);
      const { message, data } = res.data;
      if (message == "获取成功") {
        this.userInfo = data;
        console.log(this.userInfo);
      }
      // else {
      //   this.$toast.fail("信息获取失败");
      //   // 知道了用户的信息是错的
      //   // 删除信息
      //   localStorage.removeItem("token");
      //   localStorage.removeItem("userId");
      //   // 跳转到登录页
      //   this.$router.replace("/login");
      // }
    });
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      this.$toast("退出成功");
      this.$router.replace("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 600 /360 * 100vw;
  background-color: #f0f0f0;

  .user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80 /360 * 100vw;
    padding: 20 /360 * 100vw 40 /360 * 100vw 20 /360 * 100vw;
    border-bottom: 10 /360 * 100vw solid #ccc;
    cursor: pointer;
    .avatar {
      width: 70 /360 * 100vw;
      height: 70 /360 * 100vw;
      border-radius: 50%;
    }
    .userright {
      .username {
        font-size: 18 /360 * 100vw;
        .iconxingbienan {
          color: #6cf;
        }
        .iconxingbienv {
          color: #f63bc0;
        }
      }
      .date {
        font-size: 16 /360 * 100vw;
        font-weight: 700;
        color: #aaa;
      }
    }
    .iconjiantou1 {
      margin-right: 80 /360 * 100vw;
      margin-top: 10 /360 * 100vw;
      font-size: 24 /360 * 100vw;
    }
  }
}
</style>
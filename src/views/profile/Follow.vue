<template>
  <div>
    <TopNav title="我的关注" />
    <div class="list" v-for="user in followList" :key="user.id">
      <div class="item">
        <img
          v-if="user.head_img"
          :src="$axios.defaults.baseURL + user.head_img"
          alt=""
          class="avatar"
        />
        <img v-else src="@/assets/logo.png" alt="" class="avatar" />
        <div class="info">
          <div class="name">{{ user.nickname }}</div>
          <div class="date">2019-10-12</div>
        </div>
        <div class="cancelBtn" @click="cancel(user.id)">取消关注</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../../components/TopNav.vue";
export default {
  components: { TopNav },
  data() {
    return {
      followList: [],
    };
  },
  created() {
    this.logPage();
  },
  methods: {
    logPage() {
      this.$axios({
        url: "/user_follows",
      }).then((res) => {
        console.log(res.data);
        this.followList = res.data.data;
      });
    },
    cancel(userId) {
      this.$axios({
        url: "/user_unfollow/" + userId,
      }).then((res) => {
        console.log(res);
        this.logPage();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.item {
  display: flex;
  align-items: center;
  padding: 20 /360 * 100vw;
  border-bottom: 1px solid #e4e4e4;
  .avatar {
    width: 40 /360 * 100vw;
    height: 40 /360 * 100vw;
    object-fit: cover;
    border-radius: 50%;
  }
  .info {
    flex-grow: 1;
    padding-left: 10 /360 * 100vw;
    .name {
      max-width: 160 /360 * 100vw;
      font-size: 16 /360 * 100vw;
      color: #333;
    }
    .date {
      font-size: 14 /360 * 100vw;
      color: #888;
      padding-top: 4 /360 * 100vw;
    }
  }
  .cancelBtn {
    background: #ddd;
    height: 36 /360 * 100vw;
    line-height: 36 /360 * 100vw;
    font-size: 14 /360 * 100vw;
    padding: 0 16 /360 * 100vw;
    border-radius: 18 /360 * 100vw;
    color: #333;
  }
}
</style>
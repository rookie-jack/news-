<template>
  <div>
    <div class="container">
      <div class="user">
        <div class="userleft">
          <img src="../assets/logo.png" alt="" />
        </div>
        <div class="userright">
          <div class="username">
            <span class="iconfont iconxingbienan"></span>
            火星网友
          </div>
          <div class="date">2019-10-10</div>
        </div>
        <span class="iconfont iconjiantou1"></span>
      </div>
      <div class="tool">
        <user-bar
          @click.native="logText"
          :title="'我的关注'"
          :name="'关注的用户'"
        ></user-bar>
        <user-bar :title="'我的跟帖'" :name="'跟帖/回复'"></user-bar>
        <user-bar :title="'我的收藏'" :name="'文章/视频'"></user-bar>
        <user-bar :title="'设置'"></user-bar>
      </div>
    </div>
  </div>
</template>

<script>
import UserBar from "../components/UserBar.vue";
export default {
  components: { UserBar },
  methods: {
    logText(str) {
      console.log(str);
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 600 /360 * 100vw;
  background-color: #f0f0f0;

  .user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 80 /360 * 100vw;
    padding: 20 /360 * 100vw 40 /360 * 100vw 20 /360 * 100vw;
    border-bottom: 10 /360 * 100vw solid #ccc;
    cursor: pointer;
    .userleft {
      width: 60 /360 * 100vw;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .userright {
      margin-left: -100 /360 * 100vw;
      .username {
        font-size: 18 /360 * 100vw;
        span {
          color: #6cf;
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
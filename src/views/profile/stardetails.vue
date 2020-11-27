<template>
  <div>
    <div class="top" v-if="postData.type == 1">
      <div class="header">
        <span class="iconfont iconjiantou2"></span>
        <span class="iconfont iconnew"></span>
        <span class="btnFollow" @click="hanlder">已关注</span>
      </div>
      <div class="main">
        <div class="title">{{ postData.title }}</div>
        <div class="info">{{ postData.user.nickname }} 2019-10-12</div>
        <div class="content" v-html="postData.content"></div>
      </div>
    </div>
    <div class="videoPost" v-if="postData.type == 2">
      <video
        ref="vio"
        poster="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2220231793,2803860723&fm=26&gp=0.jpg"
        controls
        :src="postData.content"
      ></video>
      <div class="swicth" @click="onvideo" ref="swicth">
        <span class="iconfont iconshipin"></span>
      </div>
      <div class="info">
        <img src="@/assets/logo.png" alt="" class="avatar" />
        <div class="name">{{ postData.user.nickname }}</div>
        <div class="btnFollow" @click="hanlder">关注</div>
      </div>
      <div class="title">{{ postData.title }}</div>
    </div>

    <div class="btns">
      <div class="btn dianzan" @click="dianzan">
        <span class="iconfont icondianzan" ref="def"></span>
        {{ postData.like_length }}
      </div>
      <div class="btn weixin">
        <span class="iconfont iconweixin"></span>
        微信
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postData: [],
    };
  },
  mounted() {
    console.log(this.$route.query.id);
  },
  methods: {
    hanlder() {
      if (this.postData.has_follow == false) {
        this.$axios({
          url: "/user_follows/" + this.postData.id,
        }).then((res) => {
          console.log(res);
          document.querySelector(".btnFollow").innerText = "已关注";
          document.querySelector(".btnFollow").classList.remove("unFollow");
          this.postData.has_follow = true;
          this.$toast.success(res.data.message);
        });
      } else {
        this.$axios({
          url: "/user_unfollow/" + this.postData.id,
        }).then((res) => {
          console.log(res);
          document.querySelector(".btnFollow").innerText = "关注";
          document.querySelector(".btnFollow").classList.add("unFollow");
          this.postData.has_follow = false;
          this.$toast(res.data.message);
        });
      }
    },
    dianzan() {
      this.$axios({
        url: "/post_like/" + this.postData.id,
      }).then((res) => {
        console.log(res);
        if (res.data.message == "点赞成功") {
          this.$refs.def.style.color = "red";
          this.postData.like_length++;
          this.$toast.success(res.data.message);
        } else {
          this.$refs.def.style.color = "";
          this.postData.like_length--;
          this.$toast(res.data.message);
        }
      });

      //   console.log(this.$refs.def);
    },
    onvideo() {
      if (this.$refs.swicth.style.display == "block") {
        this.$refs.vio.play();
        this.$refs.swicth.style.display = "none";
      } else {
        this.$refs.vio.pause();
        this.$refs.swicth.style.display = "block";
      }

      console.log(this.$refs.swicth.style.display);
    },
  },
  created() {
    this.$axios({
      url: "/post/" + this.$route.query.id,
    }).then((res) => {
      console.log(res);
      this.postData = res.data.data;
    });
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  height: 50 /360 * 100vw;
  text-align: center;
  .iconjiantou2 {
    margin-left: 10 /360 * 100vw;
    font-size: 14 /360 * 100vw;
  }
  .iconnew {
    margin-left: 10 /360 * 100vw;
    font-size: 40 /360 * 100vw;
  }
  .btnFollow {
    width: 50 /360 * 100vw;
    line-height: 24 /360 * 100vw;
    margin-left: 220 /360 * 100vw;
    font-size: 10 /360 * 100vw;
    border: 1px solid #999;
    border-radius: 15 /360 * 100vw;

    &.unFollow {
      border-color: #f00;
      background-color: #f00;
      color: #fff;
    }
  }
}

.main {
  padding: 0 20 /360 * 100vw;
  .title {
    font-size: 20 /360 * 100vw;
    font-weight: 700;
  }
  .info {
    font-size: 14 /360 * 100vw;
    color: #888;
    padding-top: 10 /360 * 100vw;
  }
  .content {
    /deep/ img {
      max-width: 100%;
    }
  }
}

.videoPost {
  video {
    max-width: 100vw;
  }
  .swicth {
    position: absolute;
    left: 45%;
    top: 18%;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0 2 /360 * 100vw;
    border-radius: 50%;

    .iconshipin {
      font-size: 46 /360 * 100vw;
      color: #eee;
    }
  }
  .info {
    padding: 10 /360 * 100vw;
    display: flex;
    align-items: center;
    .avatar {
      width: 40 /360 * 100vw;
      height: 40 /360 * 100vw;
      object-fit: cover;
      border-radius: 50%;
    }
    .name {
      flex-grow: 1;
      padding-left: 10 /360 * 100vw;
      color: #888;
    }
    .btnFollow {
      font-size: 16 /360 * 100vw;
      border: 1px solid #888;
      height: 30 /360 * 100vw;
      line-height: 30 /360 * 100vw;
      padding: 0 16 /360 * 100vw;
      border-radius: 15 /360 * 100vw;
      &.unFollow {
        border-color: #f00;
        background-color: #f00;
        color: #fff;
      }
    }
  }
  .title {
    padding: 10 /360 * 100vw;
    font-size: 16 /360 * 100vw;
    color: #333;
  }
}

.btns {
  margin-top: 20 /360 * 100vw;
  display: flex;
  justify-content: space-evenly;
  .btn {
    padding: 5 /360 * 100vw 10 /360 * 100vw;
    border: 1px solid #888;
    border-radius: 16 /360 * 100vw;

    .iconfont {
      margin-right: 2 /360 * 100vw;
    }

    .iconweixin {
      color: #00d612;
    }
  }
}
</style>
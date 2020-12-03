<template>
  <div class="boxs">
    <!-- 图片文章样式 -->
    <div class="picture" v-if="postData.type == 1">
      <div class="header">
        <span class="iconfont iconjiantou2" @click="$router.back()"></span>
        <span class="iconfont iconnew"></span>
        <div
          class="btnFollow"
          :class="{
            unFollow: !postData.has_follow,
          }"
          @click="hanlder"
        >
          {{ postData.has_follow ? "已关注" : "关注" }}
        </div>
      </div>
      <div class="main">
        <div class="title">{{ postData.title }}</div>
        <div class="info">
          {{ postData.user.nickname }} {{ date.toLocaleDateString() }}
        </div>
        <div class="content" v-html="postData.content"></div>
      </div>
    </div>
    <!-- 视频文章样式 -->
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
      <span class="iconfont iconjiantou2" @click="$router.back()"></span>
      <div class="info">
        <img src="@/assets/logo.png" alt="" class="avatar" />
        <div class="name">{{ postData.user.nickname }}</div>
        <div
          class="btnFollow"
          :class="{
            unFollow: !postData.has_follow,
          }"
          @click="hanlder"
        >
          {{ postData.has_follow ? "已关注" : "关注" }}
        </div>
      </div>
      <div class="title">{{ postData.title }}</div>
    </div>

    <div class="btns">
      <!-- 点赞按钮 -->
      <div class="btn dianzan" @click="dianzan">
        <span
          class="iconfont icondianzan"
          :class="{
            red: postData.has_like,
          }"
        ></span>
        {{ postData.like_length }}
      </div>
      <!-- 微信按钮 -->
      <div class="btn weixin">
        <span class="iconfont iconweixin"></span>
        微信
      </div>
    </div>

    <h2 class="comments">精彩跟帖</h2>
    <Main
      :commentData="comment"
      v-for="comment in commentList"
      :key="comment.id"
    />

    <div
      class="btnMoreComment"
      @click="$router.push('/morecomment/' + postData.id)"
    >
      更多跟帖
    </div>

    <Input @reloadCommnet="reloadCommnet" />
  </div>
</template>

<script>
import Input from "../../components/comment/Input.vue";
import Main from "../../components/comment/main";
export default {
  components: { Main, Input },
  data() {
    return {
      postData: [],
      date: new Date(),
      commentList: [],
    };
  },
  mounted() {
    console.log(this.$route.query.id);
  },
  methods: {
    reloadCommnet() {
      this.$axios({
        url: "/post_comment/" + this.$route.query.id,
      }).then((res) => {
        console.log(res.data.data);
        console.log(this.$route.query.id);
        if (res.data.data.length > 3) {
          res.data.data.length = 3;
        }
        this.commentList = res.data.data;
      });
    },
    loadPost() {
      this.$axios({
        url: "/post/" + this.$route.query.id,
      }).then((res) => {
        console.log(res);
        this.postData = res.data.data;
      });
    },
    hanlder() {
      if (this.postData.has_follow == false) {
        this.$axios({
          url: "/user_follows/" + this.postData.user.id,
        }).then((res) => {
          console.log(res);
          this.postData.has_follow = true;
          this.$toast.success(res.data.message);
        });
      } else {
        this.$axios({
          url: "/user_unfollow/" + this.postData.user.id,
        }).then((res) => {
          console.log(res);
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
          //   this.$refs.def.style.color = "red";
          this.postData.like_length++;
          this.$toast.success(res.data.message);
          this.loadPost();
        } else {
          //   this.$refs.def.style.color = "";
          this.postData.like_length--;
          this.$toast(res.data.message);
          this.loadPost();
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
    this.loadPost();
    this.reloadCommnet();
  },
};
</script>

<style lang="less" scoped>
.boxs {
  padding-bottom: 50 /360 * 100vw;
}

.picture {
  padding: 0 15 /360 * 100vw;
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
      flex-grow: 1;
      margin-left: 10 /360 * 100vw;
      text-align: left;
      font-size: 40 /360 * 100vw;
    }
    .btnFollow {
      min-width: 50 /360 * 100vw;
      line-height: 24 /360 * 100vw;
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
}

.videoPost {
  video {
    max-width: 100vw;
  }
  .swicth {
    position: absolute;
    left: 45%;
    top: 14%;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0 2 /360 * 100vw;
    border-radius: 50%;

    .iconshipin {
      font-size: 46 /360 * 100vw;
      color: #eee;
    }
  }
  .iconjiantou2 {
    position: absolute;
    left: 0;
    top: 0;
    padding: 8 /360 * 100vw;
    font-size: 20 /360 * 100vw;
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
      min-width: 80 /360 * 100vw;
      font-size: 16 /360 * 100vw;
      border: 1px solid #888;
      height: 30 /360 * 100vw;
      line-height: 30 /360 * 100vw;
      text-align: center;
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

    .icondianzan {
      &.red {
        color: red;
      }
    }

    .iconweixin {
      color: #00d612;
    }
  }
}

.comments {
  text-align: center;
  font-size: 26 /360 * 100vw;
  font-weight: 700;
  padding: 20 /360 * 100vw;
}

.btnMoreComment {
  margin: 30 /360 * 100vw auto;
  width: 121 /360 * 100vw;
  height: 30 /360 * 100vw;
  border: 1px solid #888;
  font-size: 18 /360 * 100vw;
  text-align: center;
  border-radius: 15 /360 * 100vw;
}
</style>
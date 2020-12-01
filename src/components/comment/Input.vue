<template>
  <div class="footer">
    <!-- 未激活 -->
    <div class="unactivate" v-if="!isshowText">
      <input
        type="text"
        @focus="showText"
        v-model="content"
        placeholder="写跟帖"
      />
      <div class="pinlun">
        <span class="iconfont iconpinglun-"></span>
        <div class="num">112</div>
      </div>
      <span class="iconfont iconshoucang"></span>
      <span class="iconfont iconfenxiang"></span>
    </div>
    <div class="activate" v-if="isshowText">
      <textarea
        rows="3"
        v-model="content"
        @blur="unshowText"
        ref="xs"
      ></textarea>
      <div class="btn" @click="reply">发送</div>
    </div>
  </div>
</template>

<script>
import eventBus from "../../utils/eventBus";
export default {
  data() {
    return {
      isshowText: false,
      content: "",
      parentId: "",
    };
  },
  mounted() {
    eventBus.$on("sendMsg", (val) => {
      console.log("监听到点击事件");
      console.log(val);
      this.parentId = val;
      this.showText();
    });
  },
  methods: {
    showText() {
      this.isshowText = true;
      //   setTimeout(() => {
      //     this.$refs.xs.focus();
      //   }, 100);
      //   this.$nextTick(() => {}); vue提供的方法
      this.$nextTick(() => {
        this.$refs.xs.focus();
      });
    },
    unshowText() {
      setTimeout(() => {
        this.isshowText = false;
      }, 100);
    },
    reply() {
      console.log(this.$route.query.id);
      this.$axios({
        method: "post",
        url: "/post_comment/" + this.$route.query.id,
        data: {
          parent_id: this.parentId,
          content: this.content,
        },
      }).then((res) => {
        console.log(res.data);
        this.content = "";
      });
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #f2f2f2;
  padding: 10 /360 * 100vw 0;
  width: 100%;

  .unactivate {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    input {
      width: 181 /360 * 100vw;
      height: 30 /360 * 100vw;
      box-sizing: border-box;
      padding: 0 15 /360 * 100vw;
      background: #d7d7d7;
      border-radius: 15 /360 * 100vw;
      border: 0;
      outline: none;
    }

    .iconfont {
      font-size: 24 /360 * 100vw;
    }

    .pinlun {
      position: relative;
      .num {
        position: absolute;
        left: 10 /360 * 100vw;
        top: -4 /360 * 100vw;
        font-size: 12 /360 * 100vw;
        background: red;
        color: #fff;
        padding: 0 4 /360 * 100vw;
        border-radius: 6 /360 * 100vw;
      }
    }
  }

  .activate {
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;

    textarea {
      width: 261 /360 * 100vw;
      height: 90 /360 * 100vw;
      box-sizing: border-box;
      padding: 10 /360 * 100vw;
      border: 0;
      outline: none;
      background: #d7d7d7;
      border-radius: 10 /360 * 100vw;
      resize: none;
    }

    .btn {
      //   margin-left: 20 /360 * 100vw;
      width: 60 /360 * 100vw;
      height: 26 /360 * 100vw;
      background: red;
      font-size: 16 /360 * 100vw;
      line-height: 26 /360 * 100vw;
      text-align: center;
      color: #fff;
      border-radius: 13 /360 * 100vw;
    }
  }
}
</style>
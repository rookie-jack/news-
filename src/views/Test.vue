<template>
  <div>
    <button @click="guan(1)">收藏1</button>
    <button @click="guan(2)">收藏2</button>
    <button @click="guan(3)">收藏3</button>
    <button @click="guan(4)">收藏4</button>
    <button @click="guan(5)">收藏5</button>
    <button @click="guan(6)">收藏6</button>
    <button @click="guan(7)">收藏7</button>

    <button @click="zhu(1)">关注1</button>
    <button @click="zhu(2)">关注2</button>
    <button @click="zhu(3)">关注3</button>
    <button @click="zhu(4)">关注4</button>
    <button @click="zhu(5)">关注5</button>
    <button @click="zhu(6)">关注6</button>
    <button @click="zhu(7)">关注7</button>

    <button @click="fa">发布文章</button>

    <DiguiTest :num="num" />

    <Main
      class="box"
      :commentData="comment"
      v-for="(comment, index) in commentList"
      :key="index"
    />
  </div>
</template>

<script>
import Main from "../components/comment/main";
import DiguiTest from "./DiguiTest.vue";
export default {
  components: { DiguiTest, Main },
  data() {
    return {
      num: 10,
      commentList: [],
    };
  },
  created() {
    this.$axios({
      url: "/post_comment/1",
    }).then((res) => {
      console.log(res);
      this.commentList = res.data.data;
    });
  },
  methods: {
    guan(id) {
      this.$axios({
        url: "/post_star/" + id,
      }).then((res) => {
        console.log(res);
        this.PostList = res.data;
      });
    },
    zhu(id) {
      this.$axios({
        url: "/user_follows/" + id,
      }).then((res) => {
        console.log(res);
        this.PostList = res.data;
      });
    },
    fa() {
      this.$axios({
        method: "post",
        url: "/post",
        data: {
          title: "黄村趣闻",
          content:
            "黄村惊现吃喝嫖赌6人组，究竟是道德的沦丧还是人性的溟灭导致6名青年......",
          categories: [
            { id: 827, is_top: 1, name: "热点" },
            { id: 827, is_top: 1, name: "头条" },
            { id: 827, is_top: 1, name: "男人" },
            { id: 827, is_top: 1, name: "军事" },
            { id: 827, is_top: 1, name: "女人" },
          ],
          cover: [
            {
              id: 827,
              uid: 12,
              url:
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=387251616,1703465874&fm=26&gp=0.jpg",
            },
          ],
          type: 1,
        },
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
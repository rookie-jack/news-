<template>
  <div>
    <TopNav title="精彩跟帖" />
    <Main
      :commentData="comment"
      v-for="comment in commentList"
      :key="comment.id"
    />
  </div>
</template>

<script>
import Main from "../components/comment/main";
import TopNav from "../components/TopNav";
export default {
  components: { TopNav, Main },
  data() {
    return {
      commentList: [],
    };
  },
  created() {
    this.$axios({
      url: "/post_comment/" + this.$route.params.id,
    }).then((res) => {
      console.log(res.data.data);
      console.log(this.$route.query.id);
      this.commentList = res.data.data;
    });
  },
};
</script>

<style>
</style>
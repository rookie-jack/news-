<template>
  <div>
    收藏页
    <TopNav title="我的收藏" />
    <PostItem :PostData="post" v-for="post in postList" :key="post.id" />
  </div>
</template>

<script>
import PostItem from "../../components/PostItem.vue";
import TopNav from "../../components/TopNav.vue";
export default {
  components: { TopNav, PostItem },
  data() {
    return {
      postList: [],
    };
  },
  created() {
    this.$axios({
      url: "/user_star",
    }).then((res) => {
      console.log(res.data.data);
      this.postList = res.data.data;
    });
  },
};
</script>

<style>
</style>
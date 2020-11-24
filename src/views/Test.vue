<template>
  <div>
    <post-item
      :PostData="post"
      v-for="post in PostList"
      :key="post.id"
    ></post-item>
  </div>
</template>

<script>
import PostItem from "../components/PostItem.vue";
export default {
  components: { PostItem },
  data() {
    return {
      PostList: [],
    };
  },
  created() {
    this.$axios({
      url: "/post",
    }).then((res) => {
      console.log(res);
      this.PostList = res.data.data;
    });
  },
};
</script>

<style>
</style>
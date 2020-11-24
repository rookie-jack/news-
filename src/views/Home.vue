<template>
  <div>
    <HomeHeader />
    <van-tabs v-model="activeCategoryIndex">
      <van-tab
        v-for="category in categoryList"
        :key="category.id"
        :title="category.name"
      >
        <PostItem :PostData="post" v-for="post in PostList" :key="post.id" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";
import PostItem from "../components/PostItem.vue";
export default {
  components: { PostItem, HomeHeader },
  data() {
    return {
      activeCategoryIndex: 0,
      categoryList: [],
      PostList: [],
    };
  },
  methods: {},
  created() {
    this.$axios({
      url: "/category",
    }).then((res) => {
      console.log(res);
      this.categoryList = res.data.data;
    });

    this.$axios({
      url: "/post",
    }).then((res) => {
      console.log(res);
      this.PostList = res.data.data;
      console.log(this.PostList[0].categories);
    });
  },
};
</script>

<style lang="less" scoped>
</style>

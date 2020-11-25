<template>
  <div>
    <HomeHeader />
    <van-tabs v-model="activeCategoryIndex">
      <van-tab
        v-for="category in categoryList"
        :key="category.id"
        :title="category.name"
      >
        <PostItem
          :PostData="post"
          v-for="post in category.PostList"
          :key="post.id"
        />
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
    };
  },
  watch: {
    activeCategoryIndex() {
      const currentCategory = this.categoryList[this.activeCategoryIndex];
      if (currentCategory.PostList.length == 0) {
        this.loadPost();
      }
    },
  },
  created() {
    this.$axios({
      url: "/category",
    }).then((res) => {
      console.log(res);
      this.categoryList = res.data.data.map((item) => {
        return {
          ...item,
          PostList: [],
        };
      });
      this.loadPost();
    });
  },
  methods: {
    loadPost() {
      const currentCategory = this.categoryList[this.activeCategoryIndex];
      this.$axios({
        url: "/post",
        params: {
          category: currentCategory.id,
        },
      }).then((res) => {
        console.log(res.data);
        currentCategory.PostList = res.data.data;
        console.log(this.categoryList);
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>

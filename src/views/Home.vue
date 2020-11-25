<template>
  <div>
    <HomeHeader />
    <van-tabs v-model="activeCategoryIndex">
      <van-tab
        v-for="category in categoryList"
        :key="category.id"
        :title="category.name"
      >
        <!-- immediate-check 禁止页面进来时马上发送翻页请求 -->
        <van-list
          @load="loadMore"
          :immediate-check="false"
          v-model="category.loading"
          :finished="category.finished"
          finished-text="我是有底线的"
        >
          <PostItem
            :PostData="post"
            v-for="post in category.PostList"
            :key="post.id"
          />
        </van-list>
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
      this.categoryList = res.data.data.map((item) => {
        return {
          ...item,
          PostList: [],
          pageIndex: 1,
          pageSize: 6,
          loading: false,
          finished: false,
        };
      });
      console.log(this.categoryList);
      this.loadPost();
    });
  },
  methods: {
    loadMore() {
      const currentCategory = this.categoryList[this.activeCategoryIndex];
      currentCategory.pageIndex += 1;
      this.loadPost();
    },
    loadPost() {
      const currentCategory = this.categoryList[this.activeCategoryIndex];
      this.$axios({
        url: "/post",
        params: {
          category: currentCategory.id,
          pageIndex: currentCategory.pageIndex,
          pageSize: currentCategory.pageSize,
        },
      }).then((res) => {
        console.log(res.data);
        currentCategory.PostList = [...currentCategory.PostList];

        const newList = [];
        currentCategory.PostList.forEach((element) => {
          newList.push(element);
        });
        res.data.data.forEach((element) => {
          newList.push(element);
        });
        currentCategory.PostList = newList;

        currentCategory.loading = false;

        if (res.data.data.length < currentCategory.pageSize) {
          currentCategory.finished = true;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>

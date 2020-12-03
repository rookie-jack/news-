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
  computed: {
    currentCategory() {
      return this.categoryList[this.activeCategoryIndex];
    },
  },
  watch: {
    activeCategoryIndex(newVal) {
      if (newVal == this.categoryList.length - 1) {
        this.$router.push("/manage");
      } else {
        if (this.currentCategory.PostList.length == 0) {
          this.loadPost();
        }
      }
    },
  },
  created() {
    if (localStorage.getItem("delproList")) {
      const res = {
        data: {
          data: JSON.parse(localStorage.getItem("delproList")),
        },
      };

      // }
      // this.$axios({
      //   url: "/category",
      // }).then((res) => {
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
      this.categoryList.push({
        name: "+",
      });

      console.log(this.categoryList);
      this.loadPost();
    } else {
      this.$axios({
        url: "/category",
      }).then((res) => {
        this.categoryList = res.data.data.map((item) => {
          return {
            ...item,
            postList: [],
            pageIndex: 1,
            pageSize: 6,
            loading: false,
            finished: false,
          };
        });

        this.categoryList.push({
          name: "+",
        });

        console.log(this.categoryList);

        this.loadPost();
      });
    }
  },
  methods: {
    loadMore() {
      this.currentCategory.pageIndex += 1;
      this.loadPost();
    },
    loadPost() {
      this.$axios({
        url: "/post",
        params: {
          category: this.currentCategory.id,
          pageIndex: this.currentCategory.pageIndex,
          pageSize: this.currentCategory.pageSize,
        },
      }).then((res) => {
        console.log(res.data);
        this.currentCategory.PostList = [
          ...this.currentCategory.PostList,
          ...res.data.data,
        ];

        this.currentCategory.loading = false;

        if (res.data.data.length < this.currentCategory.pageSize) {
          this.currentCategory.finished = true;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .van-tab:nth-last-child(2) {
  background: #fff;
  position: sticky;
  right: -8px;
  width: 44px;
  line-height: 44px;
}
</style>

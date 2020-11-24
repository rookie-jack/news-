<template>
  <div>
    <HomeHeader />
    <van-tabs v-model="activeCategoryIndex">
      <van-tab
        v-for="category in categoryList"
        :key="category.id"
        :title="category.name"
        >{{ category.name }}</van-tab
      >
    </van-tabs>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";
export default {
  components: { HomeHeader },
  data() {
    return {
      activeCategoryIndex: 0,
      categoryList: [],
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
  },
};
</script>

<style lang="less" scoped>
\deep\ .van-tab {
  font-size: 16 /360 * 100vw;
}
</style>

<template>
  <div>
    <div class="header">
      <span class="iconfont iconjiantou2" @click="back"></span>
      <div class="search">
        <span class="iconfont iconsearch"></span>
        <input type="text" v-model="keyword" />
      </div>
      <div class="btn" @click="handleSearch">搜索</div>
    </div>

    <div class="historyList" v-if="postList.length == 0">
      <h2>历史记录</h2>
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in history"
          :key="index"
          @click="his(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>

    <div class="reList">
      <PostItem :PostData="post" v-for="post in postList" :key="post.id" />
    </div>
  </div>
</template>

<script>
import PostItem from "../components/PostItem";
export default {
  components: { PostItem },
  data() {
    return {
      keyword: "",
      postList: [],
      history: [],
    };
  },
  created() {
    if (localStorage.getItem("history")) {
      this.history = JSON.parse(localStorage.getItem("history"));
    }
  },
  watch: {
    keyword(newVal) {
      if (!newVal) {
        this.postList = [];
      }
    },
    history() {
      localStorage.setItem("history", JSON.stringify(this.history));
    },
  },
  methods: {
    his(item) {
      this.keyword = item;
      this.handleSearch();
    },
    handleSearch() {
      this.history.unshift(this.keyword);
      this.$axios({
        url: "/post_search",
        params: {
          keyword: this.keyword,
        },
      }).then((res) => {
        // console.log(res.data.data);
        this.postList = res.data.data;
        console.log(this.postList);
      });
    },
    back() {
      if (this.postList.length > 0) {
        this.postList = [];
        this.keyword = "";
      } else {
        this.$router.back();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 58 /360 * 100vw;
  align-items: center;
  padding: 0 16 /360 * 100vw;
  .search {
    flex-grow: 1;
    border: 1px solid #888;
    height: 38 /360 * 100vw;
    display: flex;
    align-items: center;
    padding: 0 10 /360 * 100vw;
    margin: 0 16 /360 * 100vw;
    border-radius: 19 /360 * 100vw;
    .iconfont {
      padding-right: 10 /360 * 100vw;
    }
    input {
      width: 180 /360 * 100vw;
      border: none;
      outline: none;
    }
  }
  .btn {
    font-size: 16 /360 * 100vw;
  }
}
.historyList {
  padding: 16 /360 * 100vw;
  h2 {
    font-size: 18 /360 * 100vw;
  }
  .list {
    display: flex;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
    .item {
      padding: 10 /360 * 100vw;
      padding-left: 0;
    }
  }
}
</style>
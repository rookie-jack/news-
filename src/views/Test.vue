<template>
  <div>
    <button @click="guan(2)">收藏2</button>
    <button @click="guan(3)">收藏3</button>
    <button @click="guan(4)">收藏4</button>
    <button @click="guan(5)">收藏5</button>
    <button @click="guan(6)">收藏6</button>
    <button @click="guan(7)">收藏7</button>

    <button @click="zhu(2)">关注2</button>
    <button @click="zhu(3)">关注3</button>
    <button @click="zhu(4)">关注4</button>
    <button @click="zhu(5)">关注5</button>
    <button @click="zhu(6)">关注6</button>
    <button @click="zhu(7)">关注7</button>
  </div>
</template>

<script>
export default {
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
  },
};
</script>

<style>
</style>
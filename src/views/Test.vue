<template>
  <div>
    <button @click="guan(2)">收藏2</button>
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
  },
};
</script>

<style>
</style>
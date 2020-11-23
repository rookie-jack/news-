<template>
  <div>
    <button @click="follow(1)">关注用户1</button>
    <button @click="follow(2)">关注用户2</button>
    <button @click="follow(3)">关注用户3</button>
    <button @click="follow(1339)">关注用户1339</button>
    <button @click="follow(110)">关注用户110</button>
  </div>
</template>

<script>
export default {
  methods: {
    follow(id) {
      this.$axios({
        url: "/user_follows/" + id,
      }).then((res) => {
        console.log(res.data);
      });
    },
  },
};
</script>

<style>
</style>
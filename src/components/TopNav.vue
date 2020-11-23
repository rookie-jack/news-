<template>
  <div class="header">
    <span class="iconfont iconjiantou2" @click="$router.back()"></span>
    <b>{{ title }}</b>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="less" scoped>
.header {
  height: 50 /360 * 100vw;
  line-height: 50 /360 * 100vw;
  text-align: center;
  .iconjiantou2 {
    float: left;
    margin-left: 10 /360 * 100vw;
    font-size: 20 /360 * 100vw;
  }
  b {
    margin-left: -20 /360 * 100vw;
    font-size: 16 /360 * 100vw;
  }
}
</style>
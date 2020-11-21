<template>
  <div class="tool">
    <div class="label">{{ title }}</div>
    <div class="desc">{{ name }}</div>
    <span class="iconfont iconjiantou1"></span>
  </div>
</template>

<script>
export default {
  props: {
    title: "",
    name: "",
  },
};
</script>

<style lang="less" scoped>
.tool {
  display: flex;
  border-bottom: 1px solid #bbb;
  margin: 0 30 /360 * 100vw;
  line-height: 60 /360 * 100vw;
  .label {
    font-size: 16 /360 * 100vw;
  }
  .desc {
    // margin-left: 120 /360 * 100vw;
    flex-grow: 1;
    text-align: right;
    padding-right: 8 /360 * 100vw;
    color: #aaa;
  }
  .iconjiantou1 {
    color: #aaa;
  }
}
</style>
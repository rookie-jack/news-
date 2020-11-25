<template>
  <div>
    <div class="header">
      <span class="iconfont iconnew"></span>
      <div class="search">
        <span class="iconfont iconsearch"></span>
        <span class="searchText">搜索新闻</span>
      </div>
      <span class="iconfont iconwode" @click="$router.push('/user')"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  height: 49 /360 * 100vw;
  background-color: #f00;
  padding: 0 18 /360 * 100vw;
  color: #fff;

  .iconnew {
    font-size: 54 /360 * 100vw;
  }

  .iconwode {
    font-size: 32 /360 * 100vw;
    opacity: 0.6;
  }

  .search {
    flex-grow: 1;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 0 20 /360 * 100vw;
    height: 34 /360 * 100vw;
    line-height: 34 /360 * 100vw;
    border-radius: 17 /360 * 100vw;
    font-size: 16 /360 * 100vw;
    .searchText {
      padding-left: 6 /360 * 100vw;
    }
    .iconsearch {
      font-size: 16 /360 * 100vw;
    }
  }
}
</style>

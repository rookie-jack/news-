<template>
  <div class="footer">
    <!-- 未激活 -->
    <div class="unactivate">
      <input type="text" />
      <div class="pinlun">
        <span class="iconfont iconpinglun-"></span>
        <div class="num">112</div>
      </div>
      <span class="iconfont iconshoucang"></span>
      <span class="iconfont iconfenxiang"></span>
    </div>
    <div v-if="false">打开的状态</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #f2f2f2;
  padding: 10 /360 * 100vw 0;
  width: 100%;

  .unactivate {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    input {
      width: 181 /360 * 100vw;
      height: 30 /360 * 100vw;
      box-sizing: border-box;
      padding: 0 15 /360 * 100vw;
      background: #d7d7d7;
      border-radius: 15 /360 * 100vw;
      border: 0;
      outline: none;
    }

    .iconfont {
      font-size: 24 /360 * 100vw;
    }

    .pinlun {
      position: relative;
      .num {
        position: absolute;
        left: 10 /360 * 100vw;
        top: -4 /360 * 100vw;
        font-size: 12 /360 * 100vw;
        background: red;
        color: #fff;
        padding: 0 4 /360 * 100vw;
        border-radius: 6 /360 * 100vw;
      }
    }
  }
}
</style>
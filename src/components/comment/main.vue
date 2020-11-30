<template>
  <div class="box">
    <div class="info">
      <img src="../../assets/logo.png" alt="" />
      <div class="middle">
        <div class="name">火星网友</div>
        <div class="date">2小时前</div>
      </div>
      <div class="btn">回复</div>
    </div>
    <parent :parentData="commentData.parent" v-if="commentData.parent" />
    <div class="mainContent">
      {{ commentData.content }}
    </div>
  </div>
</template>

<script>
import parent from "./parent";
export default {
  components: { parent },
  props: ["commentData"],
  created() {
    console.log(1);
  },
};
</script>

<style lang="less" scoped>
.box {
  padding: 10 /360 * 100vw;
  border-bottom: 1px solid #e4e4e4;
  .info {
    display: flex;
    img {
      width: 35 /360 * 100vw;
      height: 35 /360 * 100vw;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 6 /360 * 100vw;
    }
    .middle {
      flex-grow: 1;
      padding-left: 10 /360 * 100vw;
      .name {
        font-size: 14 /360 * 100vw;
      }
      .date {
        font-size: 12 /360 * 100vw;
        color: #888;
      }
    }
    .btn {
      font-size: 14 /360 * 100vw;
      color: #888;
    }
  }
  .mainContent {
    font-size: 14 /360 * 100vw;
    color: #333;
  }
}
</style>
<template>
  <div>
    <div class="parentBox">
      <parent :parentData="parentData.parent" v-if="parentData.parent" />
      <div class="info">
        <div class="name">{{ parentData.user.nickname }}</div>
        <div class="date">2小时前</div>
        <div class="btn" @click="sendComment">回复</div>
      </div>
      <div class="mainContent">
        {{ parentData.content }}
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "../../utils/eventBus";
export default {
  name: "parent",
  props: ["parentData"],
  methods: {
    sendComment() {
      eventBus.$emit("sendMsg", this.parentData.id);
    },
  },
};
</script>

<style lang="less" scoped>
.parentBox {
  padding: 2px;
  border: 1px solid #e4e4e4;
  .info {
    display: flex;
    align-items: center;
    font-size: 14 /360 * 100vw;
    color: #444;
    margin-bottom: 10 /360 * 100vw;

    .date {
      flex-grow: 1;
      font-size: 12 /360 * 100vw;
      color: #888;
      padding-left: 10 /360 * 100vw;
    }
    .btn {
      color: #888;
    }
  }
  .mainContent {
    font-size: 14 /360 * 100vw;
    color: #888;
    margin-bottom: 4 /360 * 100vw;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
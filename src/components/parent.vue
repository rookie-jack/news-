<template>
  <div>
    <div class="parentBox">
      <parent :parentData="parentData.parent" v-if="parentData.parent" />
      {{ parentData.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "parent",
  props: ["parentData"],
};
</script>

<style lang="less" scoped>
.parentBox {
  font-size: 14 /360 * 100vw;
  color: #888;
  padding: 3px;
}
</style>
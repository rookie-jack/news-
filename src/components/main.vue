<template>
  <div class="box">
    <parent :parentData="commentData.parent" v-if="commentData.parent" />
    {{ commentData.content }}
  </div>
</template>

<script>
import parent from "./parent";
export default {
  components: { parent },
  props: ["commentData"],
};
</script>

<style lang="less" scoped>
.box {
  border: 1px solid #f9c;
  margin: 2px;
  padding: 4px;
}
</style>
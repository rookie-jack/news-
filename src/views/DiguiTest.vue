<template>
  <div>
    <div class="box">
      <DeguiTest :num="num - 1" v-if="num > 0" />
      {{ num }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DeguiTest",
  props: ["num"],
};
</script>
<style lang="less" scoped>
.box {
  padding: 10px;
  margin: 10px;
  border: 1px solid #f72;
}
</style>
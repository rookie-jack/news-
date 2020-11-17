<template>
  <div class="btnSubmit">
    {{ btnText }}
  </div>
</template>

<script>
export default {
  props: ["btnText"],
  methods: {
    showToast() {
      this.$toast.fail("文案");
    },
  },
};
</script>

<style lang="less">
.btnSubmit {
  width: 100%;
  // height: 48/360*100vw;
  line-height: 48/360 * 100vw;
  font-size: 18px;
  background: #cc3300;
  color: white;
  border: none;
  outline: none;
  border-radius: 24/360 * 100vw;
  text-align: center;
}
</style>
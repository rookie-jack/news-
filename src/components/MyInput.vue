<template>
  <div class="inputWrapper">
    <input
      @blur="showErr"
      :class="{ error: !isOk }"
      :type="type"
      v-model="value"
      :placeholder="tixing"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      isOk: true,
    };
  },
  props: ["type", "tixing", "rule", "errMsg"],
  watch: {
    value(newValue) {
      if (this.rule.test(newValue)) {
        console.log("合法");
        this.isOk = true;
      } else {
        console.log(this.errMsg);
        this.isOk = false;
      }
    },
  },
  methods: {
    showErr() {
      if (!this.isOk) {
        this.$toast.fail(this.errMsg);
      }
    },
  },
};
</script>

<style lang="less">
.inputWrapper {
  padding-bottom: 16/360 * 100vw;
  input {
    width: 100%;
    height: 48/360 * 100vw;
    line-height: 48/360 * 100vw;
    font-size: 18/360 * 100vw;
    border: none;
    outline: none;
    border-bottom: 1px solid #333;
  }

  .error {
    border-color: red;
  }
}
</style>
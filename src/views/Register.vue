<template>
  <div>
    <div class="container">
      <div class="btnClose">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <MyInput type="text" tixing="请输入用户名"></MyInput>
      <MyInput type="password" tixing="请输入密码"></MyInput>
      <MyButton></MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "../components/MyButton.vue";
import MyInput from "../components/MyInput";
export default {
  components: {
    MyInput,
    MyButton,
  },
  methods: {
    showToast() {
      this.$toast.fail("文案");
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  padding: 24/360 * 100vw;
}
.btnClose {
  .iconfont {
    font-size: 28/360 * 100vw;
  }
}
.logo {
  text-align: center;
  .iconfont {
    font-size: 126/360 * 100vw;
    color: #d81e06;
  }
}
.btnSubmit {
  padding-top: 26/360 * 100vw;
  button {
    width: 100%;
    // height: 48/360*100vw;
    line-height: 48/360 * 100vw;
    font-size: 18px;
    background: #cc3300;
    color: white;
    border: none;
    outline: none;
    border-radius: 24/360 * 100vw;
  }
}
</style>
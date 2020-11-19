<template>
  <div>
    <div class="container">
      <div class="btnClose">
        <span class="iconfont iconicon-test"></span>
      </div>
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>
      <MyInput
        @setValue="setUsername"
        errMsg="请输入正确的用户名"
        :rule="/^.{5,11}$/"
        type="text"
        tixing="请输入用户名"
      />
      <MyInput
        @setValue="setPassword"
        errMsg="请输入合法的密码"
        :rule="/^\d{3,12}$/"
        type="password"
        tixing="请输入密码"
      />
      <MyButton btnText="登录" @click.native="login"></MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "../components/MyButton.vue";
import MyInput from "../components/MyInput";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    setUsername(newValue) {
      this.username = newValue;
    },
    setPassword(newValue) {
      this.password = newValue;
    },
    login() {
      this.$axios({
        method: "post",
        url: "http://157.122.54.189:9083/Login",
        data: {
          username: this.username,
          password: this.password,
        },
      }).then((res) => {
        console.log(res.data);
        this.$toast.success(res.data.message);
      });
    },
  },
  components: {
    MyInput,
    MyButton,
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
</style>
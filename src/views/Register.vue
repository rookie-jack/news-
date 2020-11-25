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
        @setValue="setusername"
        errMsg="请输入正确的用户名"
        :rule="/^.{5,11}$/"
        type="text"
        tixing="请输入用户名"
      />
      <MyInput
        @setValue="setnickname"
        errMsg="请输入合法的昵称"
        :rule="/^.{3,8}$/"
        type="text"
        tixing="请输入昵称"
      />
      <MyInput
        @setValue="setpassword"
        errMsg="密码必须是3到12位的数字"
        :rule="/^\d{3,12}$/"
        type="password"
        tixing="请输入密码"
      />
      <MyButton btnText="注册" @click.native="register"></MyButton>
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
      nickname: "",
      password: "",
    };
  },
  methods: {
    setusername(newValue) {
      this.username = newValue;
    },
    setnickname(newValue) {
      this.nickname = newValue;
    },
    setpassword(newValue) {
      this.password = newValue;
    },
    register() {
      this.$axios({
        method: "post",
        url: "/register",
        data: {
          username: this.username,
          nickname: this.nickname,
          password: this.password,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.message === "注册成功") {
          this.$toast.success(res.data.message);
          this.$router.push("/login");
        } else {
          this.$toast(res.data.message);
        }
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
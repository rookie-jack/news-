<template>
  <div>
    <div>登录页面</div>
    <my-input tixing="请输入用户名" @sendVal="logVal"></my-input>
    <my-input tixing="请输入密码" @sendVal="logVal"></my-input>
    <my-input tixing="请输入昵称" @sendVal="logVal"></my-input>
  </div>
</template>

<script>
import MyInput from "../components/MyInput";
export default {
  components: {
    MyInput,
  },
  methods: {
    logVal(val) {
      console.log(val);
    },
  },
};
</script>

<style>
</style>
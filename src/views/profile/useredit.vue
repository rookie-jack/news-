<template>
  <div>
    <div class="container">
      <TopNav title="编辑信息" />
      <van-uploader :after-read="afterRead" class="user">
        <img
          v-if="userInfo.head_img"
          :src="$axios.defaults.baseURL + userInfo.head_img"
          alt=""
          class="avatar"
        />
        <img v-else src="../../assets/logo.png" alt="" class="avatar" />
      </van-uploader>
      <div class="tool">
        <UserBar
          title="昵称"
          :name="userInfo.nickname"
          @click.native="isshow = true"
        />
        <UserBar
          title="密码"
          name="******"
          @click.native="isshowPassword = true"
        />
        <UserBar
          title="性别"
          :name="userInfo.gender == 1 ? '雄性' : '雌性'"
          @click.native="isshowGender = true"
        />
        <!-- 输入框组件 -->
        <van-dialog
          v-model="isshow"
          show-cancel-button
          title="修改昵称"
          @confirm="setnewNickname"
        >
          <van-field v-model="newNickname" placeholder="请输入昵称" />
        </van-dialog>
        <!-- 密码输入框组件 -->
        <van-dialog
          v-model="isshowPassword"
          show-cancel-button
          title="修改密码"
          @confirm="setPassword"
        >
          <van-field
            type="password"
            v-model="newPassword"
            placeholder="请输入昵称"
          />
        </van-dialog>
        <!-- 性别选项组件引用 -->
        <van-action-sheet
          v-model="isshowGender"
          :actions="actions"
          @select="setGender"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../../components/TopNav.vue";
import UserBar from "../../components/UserBar.vue";
export default {
  components: { UserBar, TopNav },
  data() {
    return {
      userInfo: {},
      isshow: false,
      isshowPassword: false,
      newNickname: "",
      newPassword: "",
      isshowGender: false,
      actions: [
        { name: "雄性", gender: 1 },
        { name: "雌性", gender: 0 },
      ],
    };
  },
  created() {
    this.loadPage();
  },
  methods: {
    // 编辑用户的请求,渲染页面
    loadPage() {
      this.$axios({
        url: "/user/" + localStorage.getItem("userId"),
      }).then((res) => {
        console.log(res);
        const { message, data } = res.data;
        if (message == "获取成功") {
          this.userInfo = data;
        }
      });
    },
    // 修改用户名的请求
    setnewNickname() {
      console.log(this.newNickname);
      const newData = {
        nickname: this.newNickname,
      };

      this.editProfile(newData);
    },
    // 修改密码的请求
    setPassword() {
      const newData = {
        password: this.newPassword,
      };

      this.editProfile(newData);
    },
    setGender(item) {
      const newData = {
        gender: item.gender,
      };

      this.editProfile(newData);
      this.isshowGender = false;
    },
    afterRead(fileObj) {
      console.log(fileObj);

      const fd = new FormData();
      fd.append("file", fileObj.file);

      this.$axios({
        method: "post",
        url: "/upload",
        data: fd,
      }).then((res) => {
        console.log(res.data);
        const { message, data } = res.data;
        fd.append("file", fileObj.file);
        if (message == "文件上传成功") {
          console.log(data.url);

          const newData = {
            head_img: data.url,
          };

          this.editProfile(newData);
        }
      });
    },
    editProfile(newData) {
      this.$axios({
        method: "post",
        url: "/user_update/" + localStorage.getItem("userId"),
        data: newData,
      }).then((res) => {
        console.log(res.data);
        this.loadPage();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 600 /360 * 100vw;
  background-color: #f0f0f0;
  text-align: center;

  .user {
    .avatar {
      margin: 30 /360 * 100vw 0;
      width: 65 /360 * 100vw;
      border-radius: 50%;
      object-fit: cover;
    }
  }
}
</style>
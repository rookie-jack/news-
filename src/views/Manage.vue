<template>
  <div>
    <TopNav title="栏目管理" />
    <div class="delpro">
      <p>点击删除以下频道</p>
      <div class="list">
        <span
          v-for="(pro, index) in delproList"
          :key="pro.id"
          @click="delid(index)"
          >{{ pro.name }}</span
        >
      </div>
    </div>
    <div class="addpro">
      <p>点击添加以下频道</p>
      <div class="list">
        <span
          v-for="(pro, index) in addproList"
          :key="pro.id"
          @click="addid(index)"
          >{{ pro.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";

export default {
  components: { TopNav },
  data() {
    return {
      delproList: [],
      addproList: [],
    };
  },
  watch: {
    delproList() {
      localStorage.setItem("delproList", JSON.stringify(this.delproList));
    },
    addproList() {
      localStorage.setItem("addproList", JSON.stringify(this.addproList));
    },
  },
  created() {
    if (localStorage.getItem("delproList")) {
      this.delproList = JSON.parse(localStorage.getItem("delproList"));
      if (localStorage.getItem("addproList")) {
        this.addproList = JSON.parse(localStorage.getItem("addproList"));
      }
    } else {
      this.$axios({
        url: "/category",
      }).then((res) => {
        console.log(res.data.data);
        this.delproList = res.data.data;
      });
    }
  },
  methods: {
    delid(index) {
      this.addproList.push(this.delproList[index]);
      this.delproList.splice(index, 1);
    },
    addid(index) {
      this.delproList.push(this.addproList[index]);
      this.addproList.splice(index, 1);
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}

p {
  padding: 10 /360 * 100vw;
  font-size: 18 /360 * 100vw;
  color: #888;
}

span {
  font-size: 16 /360 * 100vw;
  padding: 6 /360 * 100vw 14 /360 * 100vw;
  border: 1px solid #888;
  margin: 12 /360 * 100vw;
}
</style>
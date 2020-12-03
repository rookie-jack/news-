<template>
  <div @click="$router.push('/stardetails?id=' + PostData.id)">
    <!-- 显示一张图片 -->
    <div
      v-if="
        PostData.type == 1 &&
        PostData.cover.length > 0 &&
        PostData.cover.length < 3
      "
      class="one"
    >
      <div class="left">
        <div class="title">{{ PostData.title }}</div>
        <div class="info">
          {{ PostData.user.nickname }} {{ PostData.comment_length }}跟帖
        </div>
      </div>
      <img :src="PostData.cover[0].url | fixImgUrl" alt="" class="right" />
    </div>

    <!-- 显示三张图片 -->
    <div
      v-if="PostData.type == 1 && PostData.cover.length >= 3"
      class="multiPost"
    >
      <div class="title">{{ PostData.title }}</div>
      <div class="coverWrapper">
        <img :src="PostData.cover[0].url | fixImgUrl" alt="" class="cover" />
        <img :src="PostData.cover[1].url | fixImgUrl" alt="" class="cover" />
        <img :src="PostData.cover[2].url | fixImgUrl" alt="" class="cover" />
      </div>
      <div class="info">
        {{ PostData.user.nickname }} {{ PostData.comment_length }}跟帖
      </div>
    </div>

    <!-- 显示视频 -->
    <div v-if="PostData.type == 2 && PostData.cover.length > 0" class="video">
      <div class="title">{{ PostData.title }}</div>
      <div class="coverWrapper">
        <img :src="PostData.cover[0].url | fixImgUrl" alt="" class="cover" />
        <div class="swicth">
          <span class="iconfont iconshipin"></span>
        </div>
      </div>
      <div class="info">
        {{ PostData.user.nickname }} {{ PostData.comment_length }}跟帖
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["PostData"],
};
</script>

<style lang="less" scoped>
.one {
  display: flex;
  padding: 10 /360 * 100vw;
  border-bottom: 1px solid #ccc;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    .title {
      font-size: 16 /360 * 100vw;
      color: #333;
    }

    .info {
      font-size: 14 /360 * 100vw;
      color: #888;
    }
  }

  .right {
    width: 121 /360 * 100vw;
    height: 75 /360 * 100vw;
    object-fit: cover;
  }
}

.multiPost {
  padding: 16 /360 * 100vw;
  border-bottom: 1px solid #e4e4e4;
  .title {
    font-size: 16 /360 * 100vw;
    color: #333;
  }

  .info {
    font-size: 14 /360 * 100vw;
    color: #888;
  }

  .coverWrapper {
    display: flex;
    justify-content: space-between;
    margin: 10 /360 * 100vw 0;
    .cover {
      width: 33%;
      height: 74 /360 * 100vw;
      object-fit: cover;
    }
  }
}

.video {
  padding: 16 /360 * 100vw;
  border-bottom: 1px solid #e4e4e4;
  .title {
    font-size: 16 /360 * 100vw;
    color: #333;
  }

  .coverWrapper {
    position: relative;

    .cover {
      width: 340 /360 * 100vw;
    }
    .swicth {
      position: absolute;
      left: 45%;
      top: 40%;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 0 2 /360 * 100vw;
      border-radius: 50%;

      .iconshipin {
        font-size: 46 /360 * 100vw;
        color: #eee;
      }
    }
  }
}
</style>
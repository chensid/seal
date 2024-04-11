<script setup lang="ts">
import { ref } from "vue";

const active = ref(0);

</script>

<template>
  <div class="container">
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image fit="contain" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image fit="contain" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="3" clickable>
      <van-grid-item icon="photo-o" text="待我处理" />
      <van-grid-item icon="photo-o" text="待他人处理" />
      <van-grid-item icon="photo-o" text="签署合同" />
    </van-grid>
    <van-image class="ad" fit="cover" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />

    <van-empty image="search" description="暂无数据~" />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/"> 首页 </van-tabbar-item>
      <van-tabbar-item icon="label-o" to="/contract"> 合同 </van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine"> 我的 </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .swipe {
    border-radius: 8px;
    height: 200px;
  }

  .ad {
    width: 100%;
    height: 100px;
    cursor: pointer;
  }
}
</style>

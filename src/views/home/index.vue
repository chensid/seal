<script setup lang="ts">
import zero from "@/assets/0.webp";
import one from "@/assets/1.webp";
import banner from "@/assets/banner.webp"
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const active = ref(0);

const handleToTemplate = () => {
	router.push({ path: "/template" });
};
</script>

<template>
  <div class="container">
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image fit="contain" :src="zero" />
      </van-swipe-item>
      <van-swipe-item>
        <van-image fit="contain" :src="one" />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="3" clickable>
      <van-grid-item :to="{ path: '/contract', query: {index: 1} }">
        <div class="panel-item">
          <span class="item-num">0</span>
          <span>待我处理</span>
        </div>
      </van-grid-item>
      <van-grid-item :to="{ path: '/contract', query: {index: 2} }">
        <div class="panel-item">
          <span class="item-num">0</span>
          <span>待他人处理</span>
        </div>
      </van-grid-item>
      <van-grid-item to="/sign">
        <div class="panel-item">
          <van-icon name="sign" size="32" color="#1989fa" />
          <span>签署合同</span>
        </div>
      </van-grid-item>
    </van-grid>
    <van-image class="ad" fit="cover" :src="banner"
      @click="handleToTemplate" />
    <van-cell class="more" title="近期合同" is-link value="更多" to="/contract" />
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
    height: 150px;
  }

  .panel-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    .item-num {
      color: #1989fa;
      font-size: 24px;
    }
  }

  .ad {
    width: 100%;
    height: 100px;
    cursor: pointer;
  }

  .more {
    background-color: transparent;
    padding-inline: 3px;
  }
}
</style>

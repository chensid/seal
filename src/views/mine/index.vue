<script setup lang="ts">
import { ref } from "vue";

const active = ref(2);

</script>

<template>
  <div class="container">
    <div class="personal">
      <div class="personalInfo">
        <van-image class="avatar" width="80" height="80" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
        <div class="info">
          <span>133****3333</span>
          <van-button icon="award-o" round plain hairline type="primary" size="mini">
            印章未申领
          </van-button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-item">
          <span class="item-num">3</span>
          <span>个人套餐</span>
        </div>
        <div class="panel-item">
          <span class="item-num">0</span>
          <span>企业套餐</span>
        </div>
        <div class="panel-item">
          <span class="item-num">0</span>
          <span>印章备案</span>
        </div>
      </div>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/"> 首页 </van-tabbar-item>
      <van-tabbar-item icon="label-o" to="/contract"> 合同 </van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mine"> 我的 </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;

  .personal {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 10px;

    .personalInfo {
      display: flex;
      flex-direction: row;
      padding-bottom: 10px;
      border-bottom: 1px solid #e5e5e5;

      .avatar {
        border-radius: 5px;
        overflow: hidden;
      }

      .info {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;

        span {
          font-weight: bold;
        }
      }
    }

    .panel {
      display: flex;
      flex-direction: row;

      & :nth-of-type(n + 2) {
        border-left: 1px solid #e5e5e5;
      }

      .panel-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        .item-num {
          color: #1989fa;
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>

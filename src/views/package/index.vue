<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const title: string = (route.meta.title as string) || "";

const tabActive = ref(0)

const handleBuy = () => {
    // @ts-ignore
    showConfirmDialog({
        message: '认证后才可购买套餐！',
        cancelButtonText: '取消',
        confirmButtonText: '去认证',
    }).then(() => {
        router.push({ path: '/authentication' })
    }).catch(() => {
        // on cancel
    });
}
</script>
<template>
    <van-nav-bar :title="title" left-arrow @click-left="() => router.back()" />
    <div class="container">
        <van-tabs v-model:active="tabActive">
            <van-tab title="个人套餐">
                <van-grid class="statistic" :border="false" :column-num="2">
                    <van-grid-item>
                        <div class="content">
                            <div>
                                <span class="text">3</span>
                                <span>份</span>
                            </div>
                            <span>总量</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <div class="content">
                            <div>
                                <span class="text">3</span>
                                <span>份</span>
                            </div>
                            <span>剩余量</span>
                        </div>
                    </van-grid-item>
                </van-grid>
            </van-tab>
            <van-tab title="企业套餐">
                <van-grid class="statistic" :border="false" :column-num="2">
                    <van-grid-item>
                        <div class="content">
                            <div>
                                <span class="text">0</span>
                                <span>份</span>
                            </div>
                            <span>总量</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <div class="content">
                            <div>
                                <span class="text">0</span>
                                <span>份</span>
                            </div>
                            <span>剩余量</span>
                        </div>
                    </van-grid-item>
                </van-grid>
            </van-tab>
            <van-tab title="印章备案">
                <van-grid class="statistic" :border="false" :column-num="2">
                    <van-grid-item>
                        <div class="content">
                            <div>
                                <span class="text">0</span>
                                <span>份</span>
                            </div>
                            <span>总量</span>
                        </div>
                    </van-grid-item>
                    <van-grid-item>
                        <div class="content">
                            <div>
                                <span class="text">0</span>
                                <span>份</span>
                            </div>
                            <span>剩余量</span>
                        </div>
                    </van-grid-item>
                </van-grid>
            </van-tab>
        </van-tabs>
        <div class="buy">
            <van-button block type="primary" @click="handleBuy">
                购买套餐
            </van-button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.container {
    height: calc(100% - var(--van-nav-bar-height));
    display: flex;
    flex-direction: column;
    gap: 20px;

    .statistic {
        margin: 10px;
        border-radius: 5px;
        overflow: hidden;

        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #646566;

            .text {
                font-size: 24px;
                font-weight: bold;
                color: #000;
                margin-right: 3px;
            }
        }
    }

    .buy {
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 20px 20px 30px;
        background-color: #ffffff;
    }
}
</style>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const title: string = (route.meta.title as string) || "";

const realName = ref("");
const idCode = ref("");
const phone = ref("");
</script>
<template>
    <van-nav-bar :title="title" left-arrow @click-left="() => router.back()" />
    <div class="container">
        <div class="title">
            <span class="subtitle">手机号认证</span>
            <span class="tips">* 需要验证由本人开户的手机号</span>
        </div>
        <van-form>
            <van-cell-group inset>
                <van-field v-model="realName" name="真实姓名" label="真实姓名" placeholder="请输入您的真实姓名" label-align="top" size="large" />
            </van-cell-group>
        </van-form>
        <van-form>
            <van-cell-group inset>
                <van-field v-model="idCode" name="身份证" label="身份证" placeholder="请输入您的身份证号" label-align="top" size="large" />
            </van-cell-group>
        </van-form>
        <van-form>
            <van-cell-group inset>
                <van-field v-model="phone" name="手机号" label="手机号" placeholder="请输入您的手机号" label-align="top" size="large" />
            </van-cell-group>
        </van-form>
        <div class="authentication">
            <van-button block type="primary" to="/mine">
                立即认证
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
    padding-block: 20px;

    .title {
        margin: var(--van-cell-group-inset-padding);
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;

        .subtitle {
            font-size: 18px;
            font-weight: bold;
        }

        .tips {
            font-size: 14px;
            color: #999;
        }
    }

    .authentication {
        padding-inline: 30px;
    }
}
</style>
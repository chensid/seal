<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const tabActive = ref(0);
const route = useRoute();
const { index } = route.query;
tabActive.value = index ? Number(index) : 0;

const active = ref(1);
</script>

<template>
    <div class="container">
        <van-tabs v-model:active="tabActive">
            <van-tab title="全部">
                <van-search class="search" show-action placeholder="请输入合同名称">
                    <template #action>
                        <van-icon name="filter-o" />
                    </template>
                </van-search>
                <van-empty image="search" description="暂无数据~" />
            </van-tab>
            <van-tab title="待我处理">
                <van-search class="search" show-action placeholder="请输入合同名称">
                    <template #action>
                        <van-icon name="filter-o" />
                    </template>
                </van-search>
                <van-empty image="search" description="暂无数据~" />
            </van-tab>
            <van-tab title="待他人处理">
                <van-search class="search" show-action placeholder="请输入合同名称">
                    <template #action>
                        <van-icon name="filter-o" />
                    </template>
                </van-search>
                <van-empty image="search" description="暂无数据~" />
            </van-tab>
            <van-tab title="已完成">
                <van-search class="search" show-action placeholder="请输入合同名称">
                    <template #action>
                        <van-icon name="filter-o" />
                    </template>
                </van-search>
                <van-empty image="search" description="暂无数据~" />
            </van-tab>
            <van-tab title="已拒签">
                <van-search class="search" show-action placeholder="请输入合同名称">
                    <template #action>
                        <van-icon name="filter-o" />
                    </template>
                </van-search>
                <van-empty image="search" description="暂无数据~" />
            </van-tab>
            <van-tab title="已撤销">
                <van-search class="search" show-action placeholder="请输入合同名称">
                    <template #action>
                        <van-icon name="filter-o" />
                    </template>
                </van-search>
                <van-empty image="search" description="暂无数据~" />
            </van-tab>
            <van-tab title="已逾期">
                <van-search class="search" show-action placeholder="请输入合同名称">
                    <template #action>
                        <van-icon name="filter-o" />
                    </template>
                </van-search>
                <van-empty image="search" description="暂无数据~" />
            </van-tab>
        </van-tabs>
        <van-button class="sign" type="primary" to="/sign" block>签署合同</van-button>
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
    gap: 10px;

    .sign {
        position: fixed;
        bottom: 10%;
        width: 95%;
    }
}
</style>
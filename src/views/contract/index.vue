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
                <van-list class="list">
                    <div class="item">
                        <div class="header">
                            <span>银税互动成效反馈</span>
                            <van-tag round color="#faeadc" text-color="#e99e6c">待签署</van-tag>
                        </div>
                        <van-field model-value="微众" readonly>
                            <template #label>
                                <span class="item-label">发起方</span>
                            </template>
                        </van-field>
                        <van-field model-value="银行" readonly>
                            <template #label>
                                <span class="item-label">签署方</span>
                            </template>
                        </van-field>
                        <van-field model-value="2023-04-12 10:16:38" readonly>
                            <template #label>
                                <span class="item-label">发起时间</span>
                            </template>
                        </van-field>
                        <van-field model-value="2025-04-12 10:16:38" readonly>
                            <template #label>
                                <span class="item-label">截止时间</span>
                            </template>
                        </van-field>
                    </div>
                    <div class="item">
                        <div class="header">
                            <span>银税互动</span>
                            <van-tag round color="#faeadc" text-color="#e99e6c">待签署</van-tag>
                        </div>
                        <van-field model-value="大众" readonly>
                            <template #label>
                                <span class="item-label">发起方</span>
                            </template>
                        </van-field>
                        <van-field model-value="财税" readonly>
                            <template #label>
                                <span class="item-label">签署方</span>
                            </template>
                        </van-field>
                        <van-field model-value="2023-01-12 20:16:38" readonly>
                            <template #label>
                                <span class="item-label">发起时间</span>
                            </template>
                        </van-field>
                        <van-field model-value="2025-06-12 12:16:38" readonly>
                            <template #label>
                                <span class="item-label">截止时间</span>
                            </template>
                        </van-field>
                    </div>
                    <div class="item">
                        <div class="header">
                            <span>投后管理</span>
                            <van-tag round color="#07c160" text-color="#0d723d">已签署</van-tag>
                        </div>
                        <van-field model-value="微众" readonly>
                            <template #label>
                                <span class="item-label">发起方</span>
                            </template>
                        </van-field>
                        <van-field model-value="投控" readonly>
                            <template #label>
                                <span class="item-label">签署方</span>
                            </template>
                        </van-field>
                        <van-field model-value="2023-01-15 10:16:38" readonly>
                            <template #label>
                                <span class="item-label">发起时间</span>
                            </template>
                        </van-field>
                        <van-field model-value="2025-06-12 20:36:58" readonly>
                            <template #label>
                                <span class="item-label">截止时间</span>
                            </template>
                        </van-field>
                    </div>
                </van-list>
            </van-tab>
            <van-tab title="待我处理">
                <van-search class="search" show-action placeholder="请输入合同名称">
                    <template #action>
                        <van-icon name="filter-o" />
                    </template>
                </van-search>
                <van-list class="list">
                    <div class="item">
                        <div class="header">
                            <span>银税互动成效反馈</span>
                            <van-tag round color="#faeadc" text-color="#e99e6c">待签署</van-tag>
                        </div>
                        <van-field model-value="微众" readonly>
                            <template #label>
                                <span class="item-label">发起方</span>
                            </template>
                        </van-field>
                        <van-field model-value="银行" readonly>
                            <template #label>
                                <span class="item-label">签署方</span>
                            </template>
                        </van-field>
                        <van-field model-value="2023-04-12 10:16:38" readonly>
                            <template #label>
                                <span class="item-label">发起时间</span>
                            </template>
                        </van-field>
                        <van-field model-value="2025-04-12 10:16:38" readonly>
                            <template #label>
                                <span class="item-label">截止时间</span>
                            </template>
                        </van-field>
                    </div>
                </van-list>
            </van-tab>
            <van-tab title="待他人处理">
                <van-search class="search" show-action placeholder="请输入合同名称">
                    <template #action>
                        <van-icon name="filter-o" />
                    </template>
                </van-search>
                <van-list class="list">
                    <div class="item">
                        <div class="header">
                            <span>银税互动成效反馈</span>
                            <van-tag round color="#faeadc" text-color="#e99e6c">待签署</van-tag>
                        </div>
                        <van-field model-value="微众" readonly>
                            <template #label>
                                <span class="item-label">发起方</span>
                            </template>
                        </van-field>
                        <van-field model-value="银行" readonly>
                            <template #label>
                                <span class="item-label">签署方</span>
                            </template>
                        </van-field>
                        <van-field model-value="2023-04-12 10:16:38" readonly>
                            <template #label>
                                <span class="item-label">发起时间</span>
                            </template>
                        </van-field>
                        <van-field model-value="2025-04-12 10:16:38" readonly>
                            <template #label>
                                <span class="item-label">截止时间</span>
                            </template>
                        </van-field>
                    </div>
                </van-list>
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

    .list {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .item {
            background-color: #ffffff;
            border-radius: 5px;
            overflow: hidden;

            .header {
                background-color: #f6f8fe;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 15px 10px;
                font-weight: bold;
            }

            .van-cell {
                padding: 5px 10px;
            }

            .item-label {
                color: #c8c9cc;
            }

            .van-cell:after {
                display: none;
            }
        }
    }

    .sign {
        position: fixed;
        bottom: 8%;
        width: 95%;
    }
}
</style>
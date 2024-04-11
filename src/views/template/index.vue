<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

type Item = {
	title: string;
};
const route = useRoute();
const router = useRouter();
const title: string = (route.meta.title as string) || "";
const sidebarActive = ref<DataKey>(0);
const loading = ref(false);
const finished = ref(false);
const list = ref<Item[]>([]);

type DataKey = keyof typeof data;
const data = {
	0: [{ title: "办公用品供货协议" }],
	1: [{ title: "合租商铺协议书" }],
	2: [{ title: "安全文明施工协议书" }],
	3: [{ title: "买卖合同" }, { title: "转让协议" }],
	4: [{ title: "个人借款合同" }, { title: "收款依据" }],
	5: [{ title: "保密协议" }, { title: "劳动合同书" }, { title: "劳务兼职协议" }, { title: "实习生劳动协议书" }],
	6: [{ title: "专修合同" }],
	7: [{ title: "房屋租赁合同" }, { title: "个人车位租赁合同" }, { title: "汽车租赁合同" }],
};

const handleLoad = () => {
	loading.value = true;
	finished.value = false;
	list.value = [];
	setTimeout(() => {
		list.value = data[sidebarActive.value];
		loading.value = false;
		finished.value = true;
	}, 300);
};
</script>

<template>
    <van-nav-bar :title="title" left-arrow @click-left="() => router.back()" />
    <div class="container">
        <van-sidebar class="sidebar" v-model="sidebarActive" @change="handleLoad">
            <van-sidebar-item name="21212" title="采购协议" />
            <van-sidebar-item title="股权合伙" />
            <van-sidebar-item title="建设合同" />
            <van-sidebar-item title="交易转让" />
            <van-sidebar-item title="借款协议" />
            <van-sidebar-item title="劳动合同" />
            <van-sidebar-item title="装修协议" />
            <van-sidebar-item title="租赁合同" />
        </van-sidebar>
        <van-list class="list" v-model:loading="loading" :finished="finished" @load="handleLoad">
            <van-cell size="large" v-for="(item, index) in list" :key="index" :title="item.title" clickable />
        </van-list>
    </div>
</template>


<style lang="scss" scoped>
.container {
    background-color: #fff;
    display: flex;
    flex-direction: row;
    height: calc(100% - var(--van-nav-bar-height));

    .sidebar {
        height: 100%;
        background-color: var(--van-sidebar-background);
    }

    .list {
        flex: 1;
    }
}
</style>
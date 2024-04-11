<script setup lang="ts">
import dayjs from "dayjs";
import type { PickerOption } from "vant/es/picker";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const title: string = (route.meta.title as string) || "";

const contractName = ref("");
const deadline = ref<string>(dayjs().endOf("day").format("YYYY-MM-DD HH:mm:ss"));

const showPicker = ref(false);
const formatter = (type: string, option: PickerOption) => {
    if (type === "year") {
        option.text += "年";
    }
    if (type === "month") {
        option.text += "月";
    }
    if (type === "day") {
        option.text += "日";
    }
    return option;
};
const onConfirm = ({ selectedValues }: { selectedValues: string[] }) => {
    const datetime = dayjs(selectedValues.join("-")).endOf("day").format("YYYY-MM-DD HH:mm:ss");
    deadline.value = datetime;
    showPicker.value = false;
};

const handleSelect = () => {
    // @ts-ignore
    showConfirmDialog({
        title: '认证提醒',
        message: '签署前需要完成个人认证，方可进行下一步操作',
        cancelButtonText: '算了',
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
        <van-cell-group inset>
            <van-cell title="签署合同" size="large" />
            <div class="select">
                <van-button icon="add-o" type="primary" @click="handleSelect">
                    选择合同
                </van-button>
            </div>
        </van-cell-group>
        <van-form>
            <van-cell-group inset>
                <van-field v-model="contractName" name="合同名称" label="合同名称" placeholder="请输入合同名称" label-align="top"
                    size="large" />
                <van-field :model-value="deadline" name="截止日期" label="截止日期" placeholder="请输入合同名称" is-link readonly
                    label-align="top" @click="() => (showPicker = true)" size="large" />
                <van-popup v-model:show="showPicker" position="bottom">
                    <van-date-picker :model-value="dayjs(deadline).format('YYYY-MM-DD').split('-')"
                        :formatter="formatter" @confirm="onConfirm" @cancel="() => (showPicker = false)" />
                </van-popup>
            </van-cell-group>
        </van-form>
        <van-cell-group inset>
            <van-cell title="签署流程" size="large" :border="false" />
            <van-cell title="" size="large" label="发起方" :border="false" />
            <van-cell size="large" :border="false">
                <template #title>
                    <div>发起方</div>
                </template>
            </van-cell>
            <van-cell title="" size="large" label="签署方" :border="false" />
            <van-cell size="large" :border="false">
                <template #title>
                    <div>签署方</div>
                </template>
            </van-cell>
            <div class="add">
                <van-button icon="add-o" hairline plain type="primary">添加签署方</van-button>
            </div>
        </van-cell-group>
        <div class="action">
            <van-button block disabled type="primary">
                下一步
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

    .select {
        padding: 20px;
        display: flex;
        justify-content: center;
    }

    .add {
        padding-block: 15px;
        display: flex;
        justify-content: center;
    }

    .action {
        padding-inline: 30px;
    }
}
</style>
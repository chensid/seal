import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			meta: { title: "首页" },
			component: () => import("@/views/home/index.vue"),
		},
		{
			path: "/contract",
			name: "contract",
			meta: { title: "合同" },
			component: () => import("@/views/contract/index.vue"),
		},
		{
			path: "/mine",
			name: "mine",
			meta: { title: "我的" },
			component: () => import("@/views/mine/index.vue"),
		},
		{
			path: "/template",
			name: "template",
			meta: { title: "合同范本" },
			component: () => import("@/views/template/index.vue"),
		},
		{
			path: "/sign",
			name: "sign",
			meta: { title: "发起签署" },
			component: () => import("@/views/sign/index.vue"),
		},
		{
			path: "/authentication",
			name: "authentication",
			meta: { title: "个人认证" },
			component: () => import("@/views/authentication/index.vue"),
		},
		{
			path: "/package",
			name: "package",
			meta: { title: "套餐详情" },
			component: () => import("@/views/package/index.vue"),
		},
	],
});

router.beforeEach((to, from, next) => {
	NProgress.start();
	const { title } = to.meta;
	if (title) {
		document.title = `${title}`;
	}
	next();
});

router.afterEach(() => {
	NProgress.done();
});

export default router;

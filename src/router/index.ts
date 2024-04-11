import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
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

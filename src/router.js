import { createRouter, createWebHistory } from "vue-router";

import TheHome from "./pages/TheHome.vue";
import TheTopics from "@/pages/TheTopics.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: TheHome },
		{ path: "/browse", component: TheTopics },
		{ path: "/:notFound(.*)", component: NotFound },
	],
	linkActiveClass: "router-active",
	linkExactActiveClass: "router-exact-active",
});

export default router;

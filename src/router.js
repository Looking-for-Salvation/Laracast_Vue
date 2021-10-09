import { createRouter, createWebHistory } from "vue-router";

import TheHome from "./pages/TheHome.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: TheHome },
		{ path: "/:notFound(.*)", component: NotFound },
	],
});

export default router;
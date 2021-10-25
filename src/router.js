import { createRouter, createWebHistory } from "vue-router";

import TheHome from "./pages/TheHome.vue";
//* Topics components
import TheTopics from "@/pages/TheTopics.vue";
import AllTopics from "@/components/topics-page/AllTopics.vue";
import FrameworksTopic from "@/components/topics-page/FrameworksTopic.vue";
import TestingTopic from "@/components/topics-page/TestingTopic.vue";
import LanguagesTopic from "@/components/topics-page/LanguagesTopic.vue";
import ToolingTopic from "@/components/topics-page/ToolingTopic.vue";
import TechniquesTopic from "@/components/topics-page/TechniquesTopic.vue";
//* Series component
import TheSeries from "@/pages/TheSeries.vue";
//* Podcast components
import ThePodcast from "@/pages/ThePodcast.vue";
//* Discuss components
import TheDiscuss from "@/pages/TheDiscuss.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: TheHome },
		{
			path: "/browse",
			component: TheTopics,
			redirect: "/browse/all",
			children: [
				{ path: "all", component: AllTopics },
				{ path: "frameworks", component: FrameworksTopic },
				{ path: "testing", component: TestingTopic },
				{ path: "languages", component: LanguagesTopic },
				{ path: "tooling", component: ToolingTopic },
				{ path: "techniques", component: TechniquesTopic },
			],
		},
		{ path: "/series", component: TheSeries },
		{ path: "/podcast", component: ThePodcast },
		{ path: "/discuss", component: TheDiscuss },
		{ path: "/:notFound(.*)", component: NotFound },
	],
	linkActiveClass: "router-active",
	linkExactActiveClass: "router-exact-active",
});

export default router;

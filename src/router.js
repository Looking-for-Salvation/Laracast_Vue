import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

import TheHome from "@/views/TheHome.vue";
import TheFooter from "@/components/ui/TheFooter.vue";

//* Topics components
import TheTopics from "@/views/TheTopics.vue";
import AllTopics from "@/views/topics/Topics.vue";
import FrameworksTopic from "@/views/topics/Frameworks.vue";
import LanguagesTopic from "@/views/topics/Languages.vue";
import TechniquesTopic from "@/views/topics/Techniques.vue";
import TestingTopic from "@/views/topics/Testing.vue";
import ToolingTopic from "@/views/topics/Tooling.vue";

//* Series component
import TheSeries from "@/views/TheSeries.vue";

//* Podcast components
import ThePodcast from "@/views/ThePodcast.vue";

//* Discuss components
import TheDiscuss from "@/views/TheDiscuss.vue";

import NotFound from "@/views/NotFound.vue";

const TheSignup = defineAsyncComponent(() => import("@/views/TheSignup.vue"));
const TheFaq = defineAsyncComponent(() => import("@/views/TheFaq.vue"));
const TheTerms = defineAsyncComponent(() => import("@/views/TheTerms.vue"));
const ThePrivacy = defineAsyncComponent(() => import("@/views/ThePrivacy.vue"));

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ name: "Home", path: "/", components: { default: TheHome, footer: TheFooter } },
		{ name: "Join", path: "/join", redirect: { name: "Home", query: { modal: "join" } } },
		{
			name: "Browse",
			path: "/browse",
			components: { default: TheTopics, footer: TheFooter },
			redirect: { name: "Browse All" },
			children: [
				{ name: "Browse All", path: "all", component: AllTopics },
				{ name: "Browse Frameworks", path: "frameworks", component: FrameworksTopic },
				{ name: "Browse Testing", path: "testing", component: TestingTopic },
				{ name: "Browse Languages", path: "languages", component: LanguagesTopic },
				{ name: "Browse Tooling", path: "tooling", component: ToolingTopic },
				{ name: "Browse Techniques", path: "techniques", component: TechniquesTopic },
			],
		},
		{ name: "Series", path: "/series", components: { default: TheSeries, footer: TheFooter } },
		{ name: "Podcast", path: "/podcast", components: { default: ThePodcast, footer: TheFooter } },
		{ name: "Discuss", path: "/discuss", components: { default: TheDiscuss, footer: TheFooter } },
		{ name: "Sign Up", path: "/signup", components: { default: TheSignup, footer: TheFooter } },
		{ name: "FAQ", path: "/faq", components: { default: TheFaq, footer: TheFooter } },
		{ name: "Terms", path: "/terms", components: { default: TheTerms, footer: TheFooter } },
		{ name: "Privacy", path: "/privacy", components: { default: ThePrivacy, footer: TheFooter } },
		{ name: "Not Found", path: "/:notFound(.*)", components: { rootroute: NotFound } },
	],
	linkActiveClass: "router-active",
	linkExactActiveClass: "router-exact-active",
	scrollBehavior(_, _2, savedPosition) {
		if (savedPosition) return savedPosition;
		return { left: 0, top: 0 };
	},
});

export default router;

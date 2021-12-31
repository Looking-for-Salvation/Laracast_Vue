export default {
	namespaced: true,
	state() {
		return {
			topics: [
				{
					name: "AlpineJS",
					img: alpineImage,
					seriesCount: 5,
					videosCount: 57,
					url: "/topics/alpine-js",
					category: "framework",
				},
				{
					name: "Authenticating",
					img: authImage,
					seriesCount: 3,
					videosCount: 30,
					url: "/topics/authenticating",
					category: "technique",
				},
				{
					name: "Billing",
					img: billingImage,
					seriesCount: 1,
					videosCount: 8,
					url: "/topics/billing",
					category: "tooling",
				},
				{
					name: "Blade",
					img: bladeImage,
					seriesCount: 2,
					videosCount: 20,
					url: "/topics/blade",
					category: "technique",
				},
				{
					name: "Clean Code",
					img: cleanCodeImage,
					seriesCount: 11,
					videosCount: 75,
					url: "/topics/clean-code",
					category: "technique",
				},
				{
					name: "CSS",
					img: cssImage,
					seriesCount: 7,
					videosCount: 52,
					url: "/topics/css",
					category: "language",
				},
				{
					name: "Cypress",
					img: cypressImage,
					seriesCount: 2,
					videosCount: 14,
					url: "/topics/cypress",
					category: "testing",
				},
				{
					name: "Deployment",
					img: deploymentImage,
					seriesCount: 3,
					videosCount: 39,
					url: "/topics/deployment",
					category: "technique",
				},
				{
					name: "Docker",
					img: dockerImage,
					seriesCount: 1,
					videosCount: 8,
					url: "/topics/docker",
					category: "tooling",
				},
				{
					name: "Envoyer",
					img: envoyerImage,
					seriesCount: 1,
					videosCount: 10,
					url: "/topics/envoyer",
					category: "tooling",
				},
				{
					name: "Git",
					img: gitImage,
					seriesCount: 2,
					videosCount: 35,
					url: "/topics/git",
					category: "tooling",
				},
				{
					name: "Inertia",
					img: inertiaImage,
					seriesCount: 2,
					videosCount: 28,
					url: "/topics/inertia",
					category: "framework",
				},
				{
					name: "JavaScript",
					img: jsImage,
					seriesCount: 18,
					videosCount: 210,
					url: "/topics/javascript",
					category: "language",
				},
				{
					name: "Laravel",
					img: laravelImage,
					seriesCount: 55,
					videosCount: 707,
					url: "/topics/laravel",
					category: "framework",
				},
				{
					name: "Laravel Cashier",
					img: cashierImage,
					seriesCount: 2,
					videosCount: 14,
					url: "/topics/laravel-cashier",
					category: "tooling",
				},
				{
					name: "Laravel Forge",
					img: laravelForgeImage,
					seriesCount: 2,
					videosCount: 29,
					url: "/topics/laravel-forge",
					category: "tooling",
				},
				{
					name: "Laravel Livewire",
					img: liveWireImage,
					seriesCount: 5,
					videosCount: 121,
					url: "/topics/laravel-livewire",
					category: "framework",
				},
				{
					name: "Laravel Mix",
					img: laravelMixImage,
					seriesCount: 1,
					videosCount: 11,
					url: "/topics/laravel-mix",
					category: "tooling",
				},
				{
					name: "Laravel Packages",
					img: laravelImage,
					seriesCount: 9,
					videosCount: 70,
					url: "/topics/laravel-packages",
					category: "tooling",
				},
				{
					name: "MySQL",
					img: mySqlImage,
					seriesCount: 1,
					videosCount: 17,
					url: "/topics/mysql",
					category: "tooling",
				},
				{
					name: "Nova",
					img: novaImage,
					seriesCount: 1,
					videosCount: 15,
					url: "/topics/nova",
					category: "tooling",
				},
				{
					name: "OOP",
					img: oopImage,
					seriesCount: 4,
					videosCount: 27,
					url: "/topics/object-oriented-programming",
					category: "technique",
				},
				{
					name: "PHP",
					img: phpImage,
					seriesCount: 26,
					videosCount: 264,
					url: "/topics/php",
					category: "language",
				},
				{
					name: "PHPStorm",
					img: phpStormImage,
					seriesCount: 1,
					videosCount: 27,
					url: "/topics/phpstorm",
					category: "tooling",
				},
				{
					name: "PHPUnit",
					img: phpUnitImage,
					seriesCount: 8,
					videosCount: 117,
					url: "/topics/phpunit",
					category: "testing",
				},
				{
					name: "Queues",
					img: queuesImage,
					seriesCount: 2,
					videosCount: 23,
					url: "/topics/queues",
					category: "technique",
				},
				{
					name: "React",
					img: reactImage,
					seriesCount: 2,
					videosCount: 23,
					url: "/topics/react",
					category: "framework",
				},
				{
					name: "Redis",
					img: redisImage,
					seriesCount: 2,
					videosCount: 10,
					url: "/topics/redis",
					category: "tooling",
				},
				{
					name: "SQL",
					img: sqlImage,
					seriesCount: 1,
					videosCount: 17,
					url: "/topics/sql",
					category: "language",
				},
				{
					name: "Sublime Text",
					img: sublimeImage,
					seriesCount: 2,
					videosCount: 2,
					url: "/topics/sublime-text",
					category: "tooling",
				},
				{
					name: "Symfony",
					img: symphonyImage,
					seriesCount: 1,
					videosCount: 4,
					url: "/topics/sumfony",
					category: "framework",
				},
				{
					name: "Tailwind",
					img: tailwindImage,
					seriesCount: 6,
					videosCount: 111,
					url: "/topics/tailwind",
					category: "framework",
				},
				{
					name: "TypeScript",
					img: tsImage,
					seriesCount: 1,
					videosCount: 11,
					url: "/topics/typescript",
					category: "language",
				},
				{
					name: "Vim",
					img: vimImage,
					seriesCount: 1,
					videosCount: 22,
					url: "/topics/vim",
					category: "tooling",
				},
				{
					name: "Visual Studio Code",
					img: vsCodeImage,
					seriesCount: 1,
					videosCount: 18,
					url: "/topics/vs-code",
					category: "tooling",
				},
				{
					name: "Vue",
					img: vueImage,
					seriesCount: 7,
					videosCount: 111,
					url: "/topics/vue",
					category: "framework",
				},
				{
					name: "Webpack",
					img: webpackImage,
					seriesCount: 2,
					videosCount: 25,
					url: "/topics/webpack",
					category: "tooling",
				},
				{
					name: "Workshops",
					img: workshopsImage,
					seriesCount: 17,
					videosCount: 243,
					url: "/topics/workshops",
					category: "technique",
				},
			],
		};
	},
	getters: {
		topics(state) {
			return state.topics;
		},
		frameworkTopics(state) {
			return state.topics.filter((topic) => topic.category === "framework");
		},
		languageTopics(state) {
			return state.topics.filter((topic) => topic.category === "language");
		},
		techniqueTopics(state) {
			return state.topics.filter((topic) => topic.category === "technique");
		},
		testingTopics(state) {
			return state.topics.filter((topic) => topic.category === "testing");
		},
		toolingTopics(state) {
			return state.topics.filter((topic) => topic.category === "tooling");
		},
	},
};

import novaImage from "@/assets/images/topics/nova-logo.svg";
import phpUnitImage from "@/assets/images/topics/phpunit-logo.svg";
import envoyerImage from "@/assets/images/topics/envoyer-logo.svg";
import jsImage from "@/assets/images/topics/js-logo.svg";
import vsCodeImage from "@/assets/images/topics/visualstudio-logo.svg";
import alpineImage from "@/assets/images/topics/alpine-logo.svg";
import symphonyImage from "@/assets/images/topics/symphony-logo.svg";
import phpImage from "@/assets/images/topics/php-logo.svg";
import cssImage from "@/assets/images/topics/css-logo.svg";
import sublimeImage from "@/assets/images/topics/sublime-logo.svg";
import vueImage from "@/assets/images/topics/vue-logo.svg";
import laravelImage from "@/assets/images/topics/laravel-logo.svg";
import queuesImage from "@/assets/images/topics/queues-logo.svg";
import inertiaImage from "@/assets/images/topics/inertia-logo.svg";
import tsImage from "@/assets/images/topics/typescript-logo.svg";
import billingImage from "@/assets/images/topics/billing-logo.svg";
import bladeImage from "@/assets/images/topics/blade-logo.svg";
import cypressImage from "@/assets/images/topics/cypress-logo.svg";
import sqlImage from "@/assets/images/topics/sql-logo.svg";
import authImage from "@/assets/images/topics/authentication-logo.svg";
import cleanCodeImage from "@/assets/images/topics/clean-code-logo.svg";
import deploymentImage from "@/assets/images/topics/deployment-logo.svg";
import gitImage from "@/assets/images/topics/git-logo.svg";
import laravelForgeImage from "@/assets/images/topics/git-logo.svg";
import laravelMixImage from "@/assets/images/topics/laravel-mix-logo.svg";
import liveWireImage from "@/assets/images/topics/livewire-logo.svg";
import mySqlImage from "@/assets/images/topics/mysql-logo.svg";
import oopImage from "@/assets/images/topics/OOP-logo.svg";
import phpStormImage from "@/assets/images/topics/phpstorm-logo.svg";
import reactImage from "@/assets/images/topics/react-logo.svg";
import redisImage from "@/assets/images/topics/redis-logo.svg";
import tailwindImage from "@/assets/images/topics/tailwind-logo.svg";
import vimImage from "@/assets/images/topics/vim-logo.svg";
import webpackImage from "@/assets/images/topics/webpack-logo.svg";
import workshopsImage from "@/assets/images/topics/workshops-logo.svg";
import cashierImage from "@/assets/images/topics/cashier-logo.svg";
import dockerImage from "@/assets/images/topics/docker-logo.svg";

<template>
	<div
		class="flex w-full pl-4 border-none card expanded-card max-w-none"
		:class="{
			'is-frameworks': isFrameworks,
			'is-languages': isLanguages,
			'is-techniques': isTechniques,
			'is-testing': isTesting,
			'is-tooling': isTooling,
			'h-32': isLarge,
			'h-64': isExpanded,
		}"
	>
		<div
			class="flex flex-col items-center flex-shrink-0 px-4 py-5 ml-4 expanded-card_right rounded-xl"
			:class="{ 'justify-between': isExpanded, 'justify-center': isLarge }"
		>
			<router-link
				:to="categoryRoute"
				class="w-full px-4 py-2 text-xs leading-none text-center text-white bg-black rounded-full expanded-card_skill-button bg-opacity-10 hover:bg-white hover:text-gray-700 font-IranSans"
				v-if="!isLarge"
				>{{ categoryPersian }}
			</router-link>
			<router-link :to="route" class="relative flex items-center card-thunbnail">
				<img :src="imgSource" :alt="name" height="96" width="96" />
			</router-link>
			<div class="w-full text-center expanded-card_difficulty" v-if="!isLarge">
				<div class="mb-2 text-white text-2xs font-IranSans">{{ "سطح " + difficultyLevel }}</div>
				<div
					dir="ltr"
					class="flex justify-center mx-4 space-x-1 difficulty-meter"
					:class="{ 'is-beginner': isBeginner, 'is-intermediate': isIntermediate, 'is-advanced': isAdvanced }"
				>
					<span class="flex-1 inline-block h-1 rounded"></span>
					<span class="flex-1 inline-block h-1 rounded"></span>
					<span class="flex-1 inline-block h-1 rounded"></span>
				</div>
			</div>
		</div>
		<div class="relative flex flex-col w-full py-5 expanded-card_left" :class="{ 'justify-around': isExpanded, 'justify-between': isLarge }">
			<h3 class="inline-flex items-center h-12 text-xl tracking-tight">
				<router-link :to="route" :title="name" class="text-gray-700 clamp two-lines font-IranSans hover:underline">{{ name }}</router-link>
			</h3>
			<div class="mt-5 mb-auto text-sm text-black text-opacity-50 expanded-card_description generic-content font-IranSans" v-if="!isLarge">
				<p class="clamp five-lines">{{ description }}</p>
			</div>
			<div class="flex text-xs text-gray-700 expanded-card_meta">
				<div class="flex items-center ml-4 expanded-card_meta-lessons">
					<svg width="13" height="14" viewBox="0 0 13 14" class="ml-2 opacity-60">
						<path
							class="tw-fill-current"
							fill-rule="nonzero"
							d="M4.129 6.44v4.873c0 .217-.159.41-.395.481a4.098 4.098 0 0 1-1.167.155c-1.236 0-2.564-.437-2.564-1.398V4.317c-.028-.429.145-1.185.976-1.595.386-.19 2.412-1.314 3.43-1.882A.674.674 0 0 1 5.01.82c.19.09.309.262.309.448v.739c0 .281-.265.51-.591.51-.254 0-.47-.139-.554-.333-.92.51-2.273 1.258-2.61 1.423a.683.683 0 0 0-.38.573c0 .167.041.299.117.37.21.198.909.075 1.671-.32.733-.38 4.346-2.455 4.382-2.476a.67.67 0 0 1 .606-.025.505.505 0 0 1 .313.45v.058c0 .17-.099.329-.263.424 0 0-2.508 1.444-2.73 1.567-.85.472-1.152 1.051-1.152 2.213zM13 3.98V10.6a.498.498 0 0 1-.276.431s-3.445 2.308-4.144 2.675c-.367.193-.835.295-1.352.295-1.228 0-2.499-.574-2.499-1.532V6.14l.002-.006c.012-.373.113-.906.917-1.418C6.13 4.41 9 2.721 9.123 2.65a.674.674 0 0 1 .608-.03.505.505 0 0 1 .315.452v.738c0 .281-.264.51-.59.51a.598.598 0 0 1-.544-.31c-.917.54-2.262 1.337-2.563 1.528-.38.243-.431.403-.438.609.001.152.05.268.146.345.301.238 1.113.138 1.912-.276.592-.307 3.143-2.007 4.076-2.636a.673.673 0 0 1 .623-.056c.203.085.332.262.332.458zm-1.182 2.272L8.865 8.23v1.02l2.953-1.978v-1.02z"
							opacity=".5"
						></path>
					</svg>
					<router-link :to="route" class="font-IranSans opacity-60 pt-0.5">{{ finalLessonsCount }}</router-link>
				</div>
				<div class="flex items-center expanded-card_meta-time">
					<svg width="13" height="13" viewBox="0 0 13 13" class="relative ml-2 opacity-60 inherits-color" style="top: 1px;">
						<path
							class="tw-fill-current"
							fill-rule="evenodd"
							d="M6.5 0C2.925 0 0 2.925 0 6.5S2.925 13 6.5 13 13 10.075 13 6.5 10.075 0 6.5 0zm2.967 9L6 6.913V3h1v3.391l3 1.761L9.467 9z"
							opacity=".5"
						></path>
					</svg>
					<span class="pt-1 font-IranSans opacity-60">{{ totalCalcTime }}</span>
				</div>
			</div>
			<router-link
				:to="route"
				class="absolute flex items-center justify-center w-full py-2 mb-1 text-sm text-black bg-gray-100 border border-opacity-25 rounded-full card-play-button hover:border-blue-400 hover:text-blue-400 font-IranSans"
				style="bottom: 11px"
				>نمایش</router-link
			>
		</div>
	</div>
</template>

<script>
import { computed } from "vue";

export default {
	props: {
		category: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		level: {
			type: String,
			required: true,
		},
		imgSource: {
			type: String,
			required: true,
		},
		route: {
			type: String,
			required: true,
		},
		lessonsCount: {
			type: Number,
			required: true,
		},
		totalTime: {
			type: Object,
			required: true,
		},
		mode: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		//* Category related properties & ...
		const categoryPersian = computed(() => {
			if (props.category === "Frameworks") {
				return "فریمورک ها";
			} else if (props.category === "Languages") {
				return "زبان ها";
			} else if (props.category === "Techniques") {
				return "تکنیک ها";
			} else if (props.category === "Testing") {
				return "تست";
			} else {
				return "ابزار ها";
			}
		});

		const categoryRoute = computed(() => {
			if (props.category === "Frameworks") {
				return "/browse/frameworks";
			} else if (props.category === "Languages") {
				return "/browse/languages";
			} else if (props.category === "Techniques") {
				return "/browse/techniques";
			} else if (props.category === "Testing") {
				return "/browse/testing";
			} else {
				return "/browse/tooling";
			}
		});

		const isFrameworks = computed(() => {
			if (props.category === "Frameworks") {
				return true;
			} else {
				return false;
			}
		});

		const isLanguages = computed(() => {
			if (props.category === "Languages") {
				return true;
			} else {
				return false;
			}
		});

		const isTechniques = computed(() => {
			if (props.category === "Techniques") {
				return true;
			} else {
				return false;
			}
		});

		const isTesting = computed(() => {
			if (props.category === "Testing") {
				return true;
			} else {
				return false;
			}
		});

		const isTooling = computed(() => {
			if (props.category === "Tooling") {
				return true;
			} else {
				return false;
			}
		});

		//* Difficulty level related properties & ...
		const difficultyLevel = computed(() => {
			if (props.level === "Beginner") {
				return "آسان";
			} else if (props.level === "Intermediate") {
				return "متوسط";
			} else {
				return "پیشرفته";
			}
		});

		const isBeginner = computed(() => {
			if (props.level === "Beginner") {
				return true;
			} else {
				return false;
			}
		});

		const isIntermediate = computed(() => {
			if (props.level === "Intermediate") {
				return true;
			} else {
				return false;
			}
		});

		const isAdvanced = computed(() => {
			if (props.level === "Advanced") {
				return true;
			} else {
				return false;
			}
		});

		//* Total time related properties & ...
		const totalTimeHours = computed(() => {
			if (props.totalTime.hours !== 0) {
				return props.totalTime.hours + "h";
			} else return "";
		});

		const totalTimeMinutes = computed(() => {
			if (props.totalTime.minutes !== 0) {
				return props.totalTime.minutes + "m";
			} else return null;
		});

		const totalCalcTime = computed(() => {
			return totalTimeHours.value + totalTimeMinutes.value;
		});

		//* Lessons count related properties & ...
		const finalLessonsCount = computed(() => {
			return props.lessonsCount + " درس";
		});

		const isLarge = computed(() => {
			if (props.mode === "large") {
				return true;
			} else return false;
		});

		const isExpanded = computed(() => {
			if (props.mode === "expanded") return true;
			else return false;
		});

		return {
			categoryPersian,
			categoryRoute,
			isFrameworks,
			isLanguages,
			isTechniques,
			isTesting,
			isTooling,
			difficultyLevel,
			isBeginner,
			isIntermediate,
			isAdvanced,
			totalCalcTime,
			finalLessonsCount,
			isLarge,
			isExpanded,
		};
	},
};
</script>

<style scoped>
.card {
	--tw-bg-opacity: 1;
	--tw-text-opacity: 1;
	background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
	border: 1px solid rgba(36, 37, 38, 0.08);
	border-radius: 0.9rem;
	box-shadow: 0 0 20px rgb(0 0 0 / 8%);
	color: rgba(34, 41, 47, var(--tw-text-opacity));
	margin-left: auto;
	margin-right: auto;
	max-width: 100%;
	overflow: hidden;
	position: relative;
	width: 345px;
}

.card:hover {
	box-shadow: 0 0 20px rgb(0 0 0 / 16%);
}

.expanded-card .expanded-card_right {
	width: 130px;
}

.expanded-card.is-frameworks .expanded-card_right {
	background: linear-gradient(180deg, #f44881, #ec454f);
}

.expanded-card.is-languages .expanded-card_right {
	background: linear-gradient(0deg, #f19a1a, #ffc73c);
}

.expanded-card.is-techniques .expanded-card_right {
	background: linear-gradient(180deg, #21c8f6, #637bff);
}

.expanded-card.is-testing .expanded-card_right {
	background: linear-gradient(180deg, #6edcc4, #1aab8b);
}

.expanded-card.is-tooling .expanded-card_right {
	background: linear-gradient(0deg, #8b60ed, #b372bd);
}

.card .card-play-button {
	left: 0;
	margin-left: auto;
	margin-right: auto;
	right: 0;
	width: 90%;
}

.card-play-button {
	opacity: 0;
	transform: translateY(15px);
	transition: opacity 0.2s, transform 0.4s, border-color 0.2s;
	transition-timing-function: ease-in-out;
	will-change: transform;
}

.card:hover .card-play-button {
	opacity: 1;
	transform: translatey(0px);
}

.card:hover .expanded-card_meta {
	display: none;
}

.expanded-card .difficulty-meter > *,
.series-banner .difficulty-meter > *,
.series-card:hover .difficulty-meter > * {
	background-color: rgba(0, 0, 0, 0.25);
}

.expanded-card .difficulty-meter.is-advanced > *,
.expanded-card .difficulty-meter.is-beginner > :first-child,
.expanded-card .difficulty-meter.is-intermediate > :first-child,
.expanded-card .difficulty-meter.is-intermediate > :nth-child(2),
.series-banner .difficulty-meter.is-advanced > *,
.series-banner .difficulty-meter.is-beginner > :first-child,
.series-banner .difficulty-meter.is-intermediate > :first-child,
.series-banner .difficulty-meter.is-intermediate > :nth-child(2),
.series-card:hover .difficulty-meter.is-advanced > *,
.series-card:hover .difficulty-meter.is-beginner > :first-child,
.series-card:hover .difficulty-meter.is-intermediate > :first-child,
.series-card:hover .difficulty-meter.is-intermediate > :nth-child(2) {
	--tw-bg-opacity: 1;
	background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
</style>

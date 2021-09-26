<template>
	<div
		class="relative flex-col flex-1 flex-shrink-0 w-full max-w-full mx-4 skill-card group"
		:class="{ 'is-frameworks': isFrameworks, 'is-languages': isLanguages, 'is-techniques': isTechniques, 'is-testing': isTesting, 'is-tooling': isTooling }"
	>
		<div class="relative z-10 px-12 py-3 text-center skill-card_top rounded-xl">
			<router-link :to="skillRoute" class="block">
				<img :src="skillImgSource" :alt="skillType" height="100" width="100" />
			</router-link>
			<h4 class="text-xl leading-tight tracking-tight text-center">
				<router-link :to="skillRoute" class="text-white hover:text-white font-IranSans hover:underline">{{ cardName }}</router-link>
			</h4>
		</div>
		<div class="relative flex flex-col justify-around w-full px-6 py-0 bg-white rounded-t-none skill-card_meta rounded-xl">
			<div class="flex items-center justify-around py-3 mb-0 rounded rounded-t-none skill-card_meta-details">
				<div class="text-center">
					<router-link :to="skillRoute" class="block">
						<span class="block -mb-1 text-lg text-gray-700 font-IranSans">{{ skillSeriesCount }}</span>
						<span class="text-sm text-gray-500 font-IranSans"> دوره </span>
					</router-link>
				</div>
				<div class="w-px h-6 bg-gray-400"></div>
				<div class="text-center">
					<span class="block -mb-1 text-lg text-gray-700 font-IranSans">{{ skillLessonsCount }}</span>
					<span class="text-sm text-gray-500 font-IranSans"> ویدیو </span>
				</div>
			</div>
			<router-link
				:to="skillRoute"
				class="absolute flex items-center justify-center w-full py-2 mx-auto mb-1 text-sm text-black normal-case bg-gray-200 border border-opacity-25 border-solid rounded-full card-play-button font-IranSans hover:text-blue-400 hover:border-blue-400"
				style="bottom: 11px"
			>
				<span>نمایش</span>
			</router-link>
		</div>
	</div>
</template>

<script>
import { computed } from "vue";

export default {
	props: {
		skillType: {
			type: String,
			required: true,
		},
		skillSeriesCount: {
			type: Number,
			required: true,
		},
		skillLessonsCount: {
			type: Number,
			required: true,
		},
		skillImgSource: {
			type: String,
			required: true,
		},
		skillRoute: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const cardName = computed(() => {
			if (props.skillType === "frameworks") {
				return "فریمورک ها";
			} else if (props.skillType === "languages") {
				return "زبان ها";
			} else if (props.skillType === "techniques") {
				return "تکنیک ها";
			} else if (props.skillType === "testing") {
				return "تست";
			} else {
				return "ابزار ها";
			}
		});

		const isFrameworks = computed(() => {
			if (props.skillType === "frameworks") {
				return true;
			} else {
				return false;
			}
		});

		const isLanguages = computed(() => {
			if (props.skillType === "languages") {
				return true;
			} else {
				return false;
			}
		});

		const isTechniques = computed(() => {
			if (props.skillType === "techniques") {
				return true;
			} else {
				return false;
			}
		});

		const isTesting = computed(() => {
			if (props.skillType === "testing") {
				return true;
			} else {
				return false;
			}
		});

		const isTooling = computed(() => {
			if (props.skillType === "tooling") {
				return true;
			} else {
				return false;
			}
		});

		return {
			cardName,
			isFrameworks,
			isLanguages,
			isTechniques,
			isTesting,
			isTooling,
		};
	},
};
</script>

<style scoped>
.skill-card.is-frameworks .skill-card_top {
	background: linear-gradient(180deg, #f44881, #ec454f);
	border-radius: 0.9rem;
	content: "";
	display: block;
	width: 100%;
}

.skill-card.is-languages .skill-card_top {
	background: linear-gradient(0deg, #f19a1a, #ffc73c);
	border-radius: 0.9rem;
	content: "";
	display: block;
	width: 100%;
}

.skill-card.is-techniques .skill-card_top {
	background: linear-gradient(180deg, #21c8f6, #637bff);
	border-radius: 0.9rem;
	content: "";
	display: block;
	width: 100%;
}

.skill-card.is-testing .skill-card_top {
	background: linear-gradient(180deg, #6edcc4, #1aab8b);
	border-radius: 0.9rem;
	content: "";
	display: block;
	width: 100%;
}

.skill-card.is-tooling .skill-card_top {
	background: linear-gradient(0deg, #8b60ed, #b372bd);
	border-radius: 0.9rem;
	content: "";
	display: block;
	width: 100%;
}

.skill-card_meta {
	box-shadow: 0 0 20px rgb(0 0 0 / 8%);
	height: 76px;
	margin-top: -6px;
	transition: box-shadow 0.3s;
}

.skill-card .card-play-button {
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

.skill-card:hover .card-play-button {
	opacity: 1;
	transform: translatey(0px);
}

.skill-card:hover .skill-card_meta {
	box-shadow: 0 0 20px rgb(0 0 0 / 20%);
}

.skill-card:hover .skill-card_meta-details {
	display: none;
}
</style>

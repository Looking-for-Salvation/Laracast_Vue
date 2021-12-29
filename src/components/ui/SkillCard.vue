<template>
	<div
		class="relative flex flex-1 flex-shrink-0 w-full mb-6 lg:mb-0 lg:flex-col rounded-xl lg:rounded-none lg:max-w-full lg:mx-4 skill-card group"
		:class="{ 'is-frameworks': isFrameworks, 'is-languages': isLanguages, 'is-techniques': isTechniques, 'is-testing': isTesting, 'is-tooling': isTooling }"
	>
		<div class="relative z-10 py-3 pl-6 pr-5 text-center lg:pr-8 lg:px-8 skill-card_top rounded-xl">
			<router-link :to="skill.url" class="block">
				<img :src="skill.img" :alt="skill.type" height="100" width="100" />
			</router-link>
			<h4 class="leading-tight tracking-tight text-center text-2lg md:text-3lg">
				<router-link :to="skill.url" class="text-white hover:text-white font-IranSans hover:underline">{{ cardName }}</router-link>
			</h4>
		</div>
		<div class="relative flex flex-col justify-around w-full py-5 pl-5 rounded-t-none lg:px-6 md:py-0 lg:bg-white skill-card_meta rounded-xl">
			<div class="flex items-center justify-around mb-2 rounded rounded-t-none lg:py-3 lg:mb-0 skill-card_meta-details">
				<div class="text-center">
					<router-link :to="skill.url" class="block">
						<span class="block -mb-1 text-xl text-white lg:text-lg lg:text-gray-700 font-IranSans">{{ skill.seriesCount }}</span>
						<span class="text-base text-white opacity-50 lg:text-sm lg:opacity-100 lg:text-gray-500 font-IranSans"> دوره </span>
					</router-link>
				</div>
				<div class="w-px h-6 bg-gray-300 opacity-25 lg:bg-gray-400 lg:opacity-100"></div>
				<div class="text-center">
					<span class="block -mb-1 text-xl text-white lg:text-lg lg:text-gray-700 font-IranSans">{{ skill.lessonsCount }}</span>
					<span class="text-base text-white opacity-50 lg:text-sm lg:opacity-100 lg:text-gray-500 font-IranSans"> ویدیو </span>
				</div>
			</div>
			<router-link
				:to="skill.url"
				class="absolute hidden w-full py-2 mx-auto mb-1 text-sm text-black normal-case bg-gray-200 border border-opacity-25 border-solid rounded-full lg:flex lg:items-center lg:justify-center card-play-button font-IranSans hover:text-blue-400 hover:border-blue-400"
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
		skill: {
			type: Object,
			required: true,
		},
	},
	setup(props) {
		const cardName = computed(() => {
			let cardName = "";
			if (props.skill.type === "frameworks") cardName = "فریمورک ها";
			if (props.skill.type === "languages") cardName = "زبان ها";
			if (props.skill.type === "techniques") cardName = "تکنیک ها";
			if (props.skill.type === "testing") cardName = "تست";
			if (props.skill.type === "tooling") cardName = "ابزار ها";
			return cardName;
		});

		const isFrameworks = computed(() => {
			if (props.skill.type === "frameworks") return true;
			else return false;
		});

		const isLanguages = computed(() => {
			if (props.skill.type === "languages") return true;
			else return false;
		});

		const isTechniques = computed(() => {
			if (props.skill.type === "techniques") return true;
			else return false;
		});

		const isTesting = computed(() => {
			if (props.skill.type === "testing") return true;
			else return false;
		});

		const isTooling = computed(() => {
			if (props.skill.type === "tooling") return true;
			else return false;
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
.skill-card.is-frameworks {
	background: linear-gradient(180deg, #f44881, #ec454f);
}

.skill-card.is-languages {
	background: linear-gradient(0deg, #f19a1a, #ffc73c);
}

.skill-card.is-techniques {
	background: linear-gradient(180deg, #21c8f6, #637bff);
}

.skill-card.is-testing {
	background: linear-gradient(180deg, #6edcc4, #1aab8b);
}

.skill-card.is-tooling {
	background: linear-gradient(0deg, #8b60ed, #b372bd);
}

@media (min-width: 992px) {
	.skill-card.is-frameworks {
		background: 0 0;
	}

	.skill-card.is-languages {
		background: 0 0;
	}

	.skill-card.is-techniques {
		background: 0 0;
	}

	.skill-card.is-testing {
		background: 0 0;
	}

	.skill-card.is-tooling {
		background: 0 0;
	}

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
}
</style>

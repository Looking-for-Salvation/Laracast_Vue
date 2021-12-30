<template>
	<div
		class="container relative w-full h-auto px-6 py-6 overflow-hidden featured-collection card md:flex rounded-xl one-column md:py-8 md:px-10"
		style="max-width: 1166px;"
	>
		<div class="text-center">
			<img :src="item.img" :alt="item.name" class="relative mb-8 rounded-lg thumbnail md:mb-0 md:absolute lazyloaded" width="500" />
		</div>
		<div class="flex flex-col items-center justify-between h-full body md:items-stretch md:w-3/4 xl:w-full">
			<div class="mb-4 text-center md:text-right" style="max-width: 650px;">
				<div class="mb-3">
					<router-link
						:to="categoryObject.url"
						class="inline-block rounded-full px-6 pt-2.5 pb-2 leading-none text-white text-2xs font-IranSans text-center"
						:class="{
							'is-frameworks': isFrameworks,
							'is-languages': isLanguages,
							'is-techniques': isTechniques,
							'is-tooling': isTooling,
							'is-testing': isTesting,
						}"
						>{{ categoryObject.name }}</router-link
					>
				</div>
				<div class="mb-4">
					<h3 class="text-xl font-light text-black lg:text-2xl font-IranSans">
						<router-link :to="item.url" class="hover:underline">{{ item.name }}</router-link>
					</h3>
				</div>
				<p class="mb-2 text-sm text-gray-500 lg:text-base clamp three-lines font-IranSans">{{ item.description }}</p>
			</div>
			<div>
				<div class="flex mb-6 text-gray-400 md:hidden lg:flex expanded-card-meta text-2xs font-IranSans">
					<div class="flex items-center ml-4 expanded-card-difficulty">
						<div class="ml-2 difficulty-meter">
							<span class="block w-2 h-1 mb-1 rounded"></span>
							<span class="block w-2 h-1 mb-1 rounded"></span>
							<span class="block w-2 h-1 rounded"></span>
						</div>
						<span>
							سطح
							<br />
							{{ difficulty }}
						</span>
					</div>
					<div class="flex items-center ml-4 expanded-card-meta-lessons text-2xs">
						<svg width="13" height="14" viewBox="0 0 13 14" class="ml-2 inherits-color">
							<path
								class="fill-current"
								fill-rule="nonzero"
								d="M4.129 6.44v4.873c0 .217-.159.41-.395.481a4.098 4.098 0 0 1-1.167.155c-1.236 0-2.564-.437-2.564-1.398V4.317c-.028-.429.145-1.185.976-1.595.386-.19 2.412-1.314 3.43-1.882A.674.674 0 0 1 5.01.82c.19.09.309.262.309.448v.739c0 .281-.265.51-.591.51-.254 0-.47-.139-.554-.333-.92.51-2.273 1.258-2.61 1.423a.683.683 0 0 0-.38.573c0 .167.041.299.117.37.21.198.909.075 1.671-.32.733-.38 4.346-2.455 4.382-2.476a.67.67 0 0 1 .606-.025.505.505 0 0 1 .313.45v.058c0 .17-.099.329-.263.424 0 0-2.508 1.444-2.73 1.567-.85.472-1.152 1.051-1.152 2.213zM13 3.98V10.6a.498.498 0 0 1-.276.431s-3.445 2.308-4.144 2.675c-.367.193-.835.295-1.352.295-1.228 0-2.499-.574-2.499-1.532V6.14l.002-.006c.012-.373.113-.906.917-1.418C6.13 4.41 9 2.721 9.123 2.65a.674.674 0 0 1 .608-.03.505.505 0 0 1 .315.452v.738c0 .281-.264.51-.59.51a.598.598 0 0 1-.544-.31c-.917.54-2.262 1.337-2.563 1.528-.38.243-.431.403-.438.609.001.152.05.268.146.345.301.238 1.113.138 1.912-.276.592-.307 3.143-2.007 4.076-2.636a.673.673 0 0 1 .623-.056c.203.085.332.262.332.458zm-1.182 2.272L8.865 8.23v1.02l2.953-1.978v-1.02z"
								opacity=".5"
							></path>
						</svg>
						<router-link :to="item.url" class="font-IranSans hover:underline">{{ `${item.lessonsCount} درس` }}</router-link>
					</div>
					<div class="flex items-center expanded-card-meta-length text-2xs">
						<svg width="13" height="13" viewBox="0 0 13 13" class="ml-2 inherits-color">
							<path
								class="fill-current"
								fill-rule="evenodd"
								d="M6.5 0C2.925 0 0 2.925 0 6.5S2.925 13 6.5 13 13 10.075 13 6.5 10.075 0 6.5 0zm2.967 9L6 6.913V3h1v3.391l3 1.761L9.467 9z"
								opacity=".5"
							></path>
						</svg>
						<span class="mt-px">{{ calcLength }}</span>
					</div>
				</div>
				<div class="md:w-52">
					<router-link
						:to="item.url"
						class="flex items-center justify-center py-2 text-sm text-black transition-all duration-200 bg-gray-100 border border-gray-100 rounded-full font-IranSans hover:border-blue-400 hover:text-blue-400"
					>
						<svg width="15" height="15" viewBox="0 0 15 15" class="ml-2">
							<g fill="none" fill-rule="evenodd">
								<path d="M-1-1h18v18H-1z"></path>
								<path
									class="fill-current"
									d="M6 10.875L10.5 7.5 6 4.125v6.75zM7.5 0C3.36 0 0 3.36 0 7.5 0 11.64 3.36 15 7.5 15c4.14 0 7.5-3.36 7.5-7.5C15 3.36 11.64 0 7.5 0zm0 13.5c-3.307 0-6-2.693-6-6s2.693-6 6-6 6 2.693 6 6-2.693 6-6 6z"
								></path>
							</g>
						</svg>
						شروع دوره
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed } from "vue";

export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	setup(props) {
		const categoryObject = computed(() => {
			let categoryObject = {};
			if (props.item.category === "framework") categoryObject = { name: "فریمورک ها", url: { name: "Browse Frameworks" } };
			if (props.item.category === "language") categoryObject = { name: "زبان ها", url: { name: "Browse Languages" } };
			if (props.item.category === "technique") categoryObject = { name: "تکنیک ها", url: { name: "Browse Techniques" } };
			if (props.item.category === "testing") categoryObject = { name: "تست", url: { name: "Browse Testing" } };
			if (props.item.category === "tooling") categoryObject = { name: "ابزار ها", url: { name: "Browse Tooling" } };
			return categoryObject;
		});

		const isFrameworks = computed(() => {
			if (props.item.category === "framework") return true;
			else return false;
		});

		const isLanguages = computed(() => {
			if (props.item.category === "language") return true;
			else return false;
		});

		const isTechniques = computed(() => {
			if (props.item.category === "technique") return true;
			else return false;
		});

		const isTesting = computed(() => {
			if (props.item.category === "testing") return true;
			else return false;
		});

		const isTooling = computed(() => {
			if (props.item.category === "tooling") return true;
			else return false;
		});

		const difficulty = computed(() => {
			let difficulty = "";
			if (props.item.difficulty === "beginner") difficulty = "آسان";
			if (props.item.difficulty === "beginner") difficulty = "متوسط";
			if (props.item.difficulty === "beginner") difficulty = "پیشرفته";
			return difficulty;
		});

		const LengthHours = computed(() => {
			if (props.item.length.hours !== 0) return props.item.length.hours + "h";
			else return "";
		});

		const LengthMinutes = computed(() => {
			if (props.item.length.minutes !== 0) return props.item.length.minutes + "m";
			else return "";
		});

		const calcLength = computed(() => {
			return `${LengthHours.value} ${LengthMinutes.value}`;
		});

		return {
			categoryObject,
			isFrameworks,
			isTechniques,
			isLanguages,
			isTesting,
			isTooling,
			difficulty,
			calcLength,
		};
	},
};
</script>

<style scoped>
.featured-collection.one-column .thumbnail {
	margin-top: -200px;
	pointer-events: none;
}

.is-frameworks {
	--bg-opacity: 1;
	background-color: rgba(236, 69, 79, var(--bg-opacity));
}
.is-techniques {
	--bg-opacity: 1;
	background-color: rgba(99, 123, 255, var(--bg-opacity));
}
.is-tooling {
	--bg-opacity: 1;
	background-color: rgba(139, 96, 237, var(--bg-opacity));
}
.is-languages {
	--bg-opacity: 1;
	background-color: rgba(241, 154, 26, var(--bg-opacity));
}
.is-testing {
	--bg-opacity: 1;
	background-color: rgba(26, 171, 139, var(--bg-opacity));
}

.is-frameworks:hover {
	--bg-opacity: 1;
	background-color: rgba(244, 72, 129, var(--bg-opacity));
}
.is-techniques:hover {
	--bg-opacity: 1;
	background-color: rgba(33, 200, 246, var(--bg-opacity));
}
.is-tooling:hover {
	--bg-opacity: 1;
	background-color: rgba(179, 114, 189, var(--bg-opacity));
}
.is-languages:hover {
	--bg-opacity: 1;
	background-color: rgba(255, 199, 60, var(--bg-opacity));
}
.is-testing:hover {
	--bg-opacity: 1;
	background-color: rgba(110, 220, 196, var(--bg-opacity));
}

.difficulty-meter > * {
	background-color: rgba(0, 0, 0, 0.25);
}

@media (min-width: 768px) {
	.featured-collection.one-column {
		height: 363px;
	}

	.featured-collection.one-column .thumbnail {
		margin-top: -50px;
		max-width: 80%;
		left: -310px;
		top: 0;
	}
}

@media (min-width: 992px) {
	.featured-collection.one-column .thumbnail {
		left: -225px;
	}
}

@media (min-width: 1200px) {
	.featured-collection.one-column .thumbnail {
		left: -165px;
	}
}
</style>

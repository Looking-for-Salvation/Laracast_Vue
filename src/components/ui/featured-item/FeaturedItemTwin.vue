<template>
	<div
		class="container relative w-full h-auto py-6 overflow-hidden featured-collection card md:flex rounded-xl two-columns lg:py-0"
		style="max-width: 1166px;"
	>
		<div class="relative flex flex-col items-center flex-1 lg:flex-row right-side">
			<img
				:src="data.firstItem.img"
				:alt="data.firstItem.name"
				class="relative mb-8 rounded-lg lg:absolute right-side-thumbnail lg:mb-0 lazyloaded"
				width="500"
			/>
			<div class="flex flex-col items-center justify-between px-8 lg:px-0 lg:items-stretch right-side-body">
				<div class="flex flex-col flex-1 mb-4 text-center lg:text-right" style="max-width: 500px;">
					<h3 class="font-light text-black font-IranSans text-3lg">
						<router-link class="inherits-color hover:underline" :to="data.firstItem.url">{{ data.firstItem.name }}</router-link>
					</h3>
					<p class="my-auto mt-5 text-sm font-light text-gray-500 md:text-xs font-IranSans clamp five-lines">{{ data.firstItem.description }}</p>
				</div>
				<div>
					<div class="flex justify-around mb-6 text-gray-500 expanded-card-meta text-2xs opacity-70 font-IranSans">
						<div class="flex items-center ml-4 expanded-card-meta-lessons">
							<svg width="13" height="14" viewBox="0 0 13 14" class="ml-2 inherits-color">
								<path
									class="fill-current"
									fill-rule="nonzero"
									d="M4.129 6.44v4.873c0 .217-.159.41-.395.481a4.098 4.098 0 0 1-1.167.155c-1.236 0-2.564-.437-2.564-1.398V4.317c-.028-.429.145-1.185.976-1.595.386-.19 2.412-1.314 3.43-1.882A.674.674 0 0 1 5.01.82c.19.09.309.262.309.448v.739c0 .281-.265.51-.591.51-.254 0-.47-.139-.554-.333-.92.51-2.273 1.258-2.61 1.423a.683.683 0 0 0-.38.573c0 .167.041.299.117.37.21.198.909.075 1.671-.32.733-.38 4.346-2.455 4.382-2.476a.67.67 0 0 1 .606-.025.505.505 0 0 1 .313.45v.058c0 .17-.099.329-.263.424 0 0-2.508 1.444-2.73 1.567-.85.472-1.152 1.051-1.152 2.213zM13 3.98V10.6a.498.498 0 0 1-.276.431s-3.445 2.308-4.144 2.675c-.367.193-.835.295-1.352.295-1.228 0-2.499-.574-2.499-1.532V6.14l.002-.006c.012-.373.113-.906.917-1.418C6.13 4.41 9 2.721 9.123 2.65a.674.674 0 0 1 .608-.03.505.505 0 0 1 .315.452v.738c0 .281-.264.51-.59.51a.598.598 0 0 1-.544-.31c-.917.54-2.262 1.337-2.563 1.528-.38.243-.431.403-.438.609.001.152.05.268.146.345.301.238 1.113.138 1.912-.276.592-.307 3.143-2.007 4.076-2.636a.673.673 0 0 1 .623-.056c.203.085.332.262.332.458zm-1.182 2.272L8.865 8.23v1.02l2.953-1.978v-1.02z"
									opacity=".5"
								></path>
							</svg>
							<router-link :to="data.firstItem.url" class="inherits-color hover:underline">{{ `${data.firstItem.lessonsCount} درس` }}</router-link>
						</div>
						<div class="flex items-center expanded-card-meta-length">
							<svg width="13" height="13" viewBox="0 0 13 13" class="ml-2 inherits-color">
								<path
									class="fill-current"
									fill-rule="evenodd"
									d="M6.5 0C2.925 0 0 2.925 0 6.5S2.925 13 6.5 13 13 10.075 13 6.5 10.075 0 6.5 0zm2.967 9L6 6.913V3h1v3.391l3 1.761L9.467 9z"
									opacity=".5"
								></path>
							</svg>
							<span>{{ firstItemTotalLength }}</span>
						</div>
					</div>
					<router-link
						:to="data.firstItem.url"
						class="flex items-center justify-center py-2 text-sm text-black transition-all bg-gray-100 border border-gray-100 border-opacity-25 rounded-full font-IranSans hover:border-blue-400 hover:text-blue-400"
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
		<div class="w-auto mx-6 my-8 border border-black border-solid lg:mx-10 lg:my-9 border-opacity-3 lg:w-px"></div>
		<div class="relative flex flex-col-reverse items-center flex-1 lg:flex-row left-side">
			<img
				:src="data.secondItem.img"
				:alt="data.secondItem.name"
				class="relative mt-8 rounded-lg lg:absolute left-side-thumbnail lg:mt-0 lazyloaded"
				width="500"
			/>
			<div class="flex flex-col items-center justify-between px-8 lg:px-0 lg:items-stretch left-side-body">
				<div class="flex flex-col flex-1 mb-4 text-center lg:text-right" style="max-width: 500px;">
					<h3 class="font-light text-black font-IranSans text-3lg">
						<router-link class="inherits-color hover:underline" :to="data.secondItem.url">{{ data.secondItem.name }}</router-link>
					</h3>
					<p class="my-auto mt-5 text-sm font-light text-gray-500 md:text-xs clamp font-IranSans five-lines">{{ data.secondItem.description }}</p>
				</div>
				<div>
					<div class="flex justify-around mb-6 text-gray-500 opacity-70 expanded-card-meta text-2xs font-IranSans">
						<div class="flex items-center ml-4 expanded-card-meta-lessons">
							<svg width="13" height="14" viewBox="0 0 13 14" class="ml-2 inherits-color">
								<path
									class="fill-current"
									fill-rule="nonzero"
									d="M4.129 6.44v4.873c0 .217-.159.41-.395.481a4.098 4.098 0 0 1-1.167.155c-1.236 0-2.564-.437-2.564-1.398V4.317c-.028-.429.145-1.185.976-1.595.386-.19 2.412-1.314 3.43-1.882A.674.674 0 0 1 5.01.82c.19.09.309.262.309.448v.739c0 .281-.265.51-.591.51-.254 0-.47-.139-.554-.333-.92.51-2.273 1.258-2.61 1.423a.683.683 0 0 0-.38.573c0 .167.041.299.117.37.21.198.909.075 1.671-.32.733-.38 4.346-2.455 4.382-2.476a.67.67 0 0 1 .606-.025.505.505 0 0 1 .313.45v.058c0 .17-.099.329-.263.424 0 0-2.508 1.444-2.73 1.567-.85.472-1.152 1.051-1.152 2.213zM13 3.98V10.6a.498.498 0 0 1-.276.431s-3.445 2.308-4.144 2.675c-.367.193-.835.295-1.352.295-1.228 0-2.499-.574-2.499-1.532V6.14l.002-.006c.012-.373.113-.906.917-1.418C6.13 4.41 9 2.721 9.123 2.65a.674.674 0 0 1 .608-.03.505.505 0 0 1 .315.452v.738c0 .281-.264.51-.59.51a.598.598 0 0 1-.544-.31c-.917.54-2.262 1.337-2.563 1.528-.38.243-.431.403-.438.609.001.152.05.268.146.345.301.238 1.113.138 1.912-.276.592-.307 3.143-2.007 4.076-2.636a.673.673 0 0 1 .623-.056c.203.085.332.262.332.458zm-1.182 2.272L8.865 8.23v1.02l2.953-1.978v-1.02z"
									opacity=".5"
								></path>
							</svg>
							<router-link :to="data.secondItem.url" class="inherits-color hover:underline">{{ `${data.secondItem.lessonsCount} درس` }}</router-link>
						</div>
						<div class="flex items-center expanded-card-meta-length">
							<svg width="13" height="13" viewBox="0 0 13 13" class="ml-2 inherits-color">
								<path
									class="fill-current"
									fill-rule="evenodd"
									d="M6.5 0C2.925 0 0 2.925 0 6.5S2.925 13 6.5 13 13 10.075 13 6.5 10.075 0 6.5 0zm2.967 9L6 6.913V3h1v3.391l3 1.761L9.467 9z"
									opacity=".5"
								></path>
							</svg>
							<span>{{ secondItemTotalLength }}</span>
						</div>
					</div>
					<router-link
						:to="data.secondItem.url"
						class="flex items-center justify-center py-2 text-sm text-black transition-all bg-gray-100 border border-gray-100 border-opacity-25 rounded-full font-IranSans hover:border-blue-400 hover:text-blue-400"
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
		data: {
			type: Object,
			required: true,
		},
	},
	setup(props) {
		const firstItemHours = computed(() => {
			if (props.data.firstItem.length.hours !== 0) return props.data.firstItem.length.hours + "h";
			else return "";
		});

		const firstItemMinutes = computed(() => {
			if (props.data.firstItem.length.minutes !== 0) return props.data.firstItem.length.minutes + "m";
			else return "";
		});

		const firstItemTotalLength = computed(() => {
			return `${firstItemHours.value} ${firstItemMinutes.value}`;
		});

		const secondItemHours = computed(() => {
			if (props.data.secondItem.length.hours !== 0) return props.data.secondItem.length.hours + "h";
			else return "";
		});

		const secondItemMinutes = computed(() => {
			if (props.data.secondItem.length.minutes !== 0) return props.data.secondItem.length.minutes + "m";
			else return "";
		});

		const secondItemTotalLength = computed(() => {
			return `${secondItemHours.value} ${secondItemMinutes.value}`;
		});

		return {
			firstItemTotalLength,
			secondItemTotalLength,
		};
	},
};
</script>

<style scoped>
.featured-collection.two-columns .right-side-thumbnail {
	margin-top: -200px;
	max-width: 80%;
	pointer-events: none;
}

.featured-collection.two-columns .left-side-thumbnail {
	margin-bottom: -200px;
	max-width: 80%;
	pointer-events: none;
}

@media (min-width: 992px) {
	.featured-collection.two-columns {
		height: 363px;
	}

	.featured-collection.two-columns .right-side-thumbnail {
		margin-top: 0;
		right: -165px;
	}

	.featured-collection.two-columns .left-side-thumbnail {
		left: -165px;
		margin-bottom: 0;
	}

	.featured-collection.two-columns .right-side-body {
		height: 75%;
		padding-right: 60%;
	}

	.featured-collection.two-columns .left-side-body {
		height: 75%;
		padding-left: 60%;
	}
}
</style>

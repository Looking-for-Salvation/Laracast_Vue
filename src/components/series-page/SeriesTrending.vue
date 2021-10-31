<template>
	<section>
		<header class="container text-center mb-4 mx-auto max-w-[650px] pb-4 text-black font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">دوره های محبوب</h3>
			<p class="font-light inherits-color text-2lg">اینا دوره هایی هستن که پرطرفدار بودن.</p>
		</header>
		<div
			class="container relative px-6 py-6 overflow-hidden bg-white featured-collection md:flex rounded-xl is-trending lg:py-9 lg:px-10"
			style="max-width: 1166px;"
		>
			<div class="items-center text-white lg:flex">
				<div class="flex-shrink-0 hidden lg:block">
					<img src="@/assets/images/series/trending/lary-trending.svg" class="absolute right-0 top-20 skill-thumbnail" />
				</div>
				<div class="items md:flex">
					<div class="mb-4 space-y-4 md:flex-1 md:ml-8 md:mb-0">
						<trending-item
							v-for="item in trendingData1"
							:key="item.name"
							:name="item.name"
							:description="item.description"
							:imgSource="item.imgSource"
							:url="item.url"
							:square="item.square"
						></trending-item>
					</div>
					<div class="space-y-4 md:flex-1">
						<trending-item
							v-for="item in trendingData2"
							:key="item.name"
							:name="item.name"
							:description="item.description"
							:imgSource="item.imgSource"
							:url="item.url"
							:square="item.square"
						></trending-item>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { col1, col2 } from "./series-trending/data.js";

import TrendingItem from "./series-trending/TrendingItem.vue";

export default {
	components: {
		TrendingItem,
	},
	setup() {
		const trendingData1 = col1;
		const trendingData2 = col2;

		return {
			trendingData1,
			trendingData2,
		};
	},
};
</script>

<style scoped>
.featured-collection.is-trending {
	background-image: linear-gradient(90deg, #324466, #60799e 79%);
}

@media (min-width: 992px) {
	.featured-collection.is-trending .items {
		padding-right: 250px;
	}
}

.skill-thumbnail {
	transform: rotate(270deg);
}
</style>

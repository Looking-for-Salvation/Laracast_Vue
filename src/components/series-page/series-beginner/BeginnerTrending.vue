<template>
	<div class="container relative px-6 py-6 overflow-hidden bg-white featured-collection md:flex rounded-xl is-trending lg:py-9" style="max-width: 1166px;">
		<div class="lg:-my-5">
			<h1 class="mb-3 text-center text-white font-IranSans">اینارو فراموش نکن</h1>
			<div class="md:grid md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-5 lg:py-6">
				<series-trending-item
					v-for="item in trendingData"
					:key="item.name"
					:name="item.name"
					:description="item.description"
					:date="item.date"
					:url="item.url"
					:imgSource="item.imgSource"
				></series-trending-item>
			</div>
		</div>
	</div>
</template>

<script>
import data from "./trending-items.js";

import SeriesTrendingItem from "../SeriesTrendingItem.vue";

export default {
	components: {
		SeriesTrendingItem,
	},
	setup() {
		const trendingData = data;

		return {
			trendingData,
		};
	},
};
</script>

<style scoped>
.featured-collection.is-trending {
	background-image: linear-gradient(90deg, #324466, #60799e 79%);
}
</style>

<template>
	<div class="container relative px-6 py-6 overflow-hidden bg-white featured-collection md:flex rounded-xl is-trending lg:py-9" style="max-width: 1166px;">
		<div class="lg:-my-5">
			<h1 class="mb-3 text-center text-white font-IranSans">دوره های بیشتر</h1>
			<div class="md:grid md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-5 lg:py-6" style="justify-items: center;">
				<series-more-recent-item
					v-for="item in recentData"
					:key="item.name"
					:name="item.name"
					:description="item.description"
					:date="item.date"
					:url="item.url"
					:imgSource="item.imgSource"
				></series-more-recent-item>
			</div>
		</div>
	</div>
</template>

<script>
import data from "./more-recent";

import SeriesMoreRecentItem from "./SeriesMoreRecentItem.vue";

export default {
	components: {
		SeriesMoreRecentItem,
	},
	setup() {
		const recentData = data;

		return {
			recentData,
		};
	},
};
</script>

<style scoped>
.featured-collection.is-trending {
	background-image: linear-gradient(90deg, #324466, #60799e 79%);
}
</style>

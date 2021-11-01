<template>
	<section>
		<header class="container text-center mb-4 mx-auto max-w-[650px] pb-4 font-IranSans">
			<h3 class="mb-2 text-3xl text-black md:font-light">دوره های اخیر</h3>
			<p class="font-light text-black text-2lg">کنجکاوی بدونی چی تو لاراکست جدیده؟ اینا آخرین دوره های آپدیت شده ان.</p>
		</header>
		<div>
			<series-featured
				:name="featuredSeriesFirstItem.name"
				:description="featuredSeriesFirstItem.description"
				:category="featuredSeriesFirstItem.category"
				:url="featuredSeriesFirstItem.url"
				:imgSource="featuredSeriesFirstItem.imgSource"
				:lessonsCount="featuredSeriesFirstItem.lessonsCount"
				:length="featuredSeriesFirstItem.length"
				:difficulty="featuredSeriesFirstItem.difficulty"
			></series-featured>
		</div>
		<div class="mt-8">
			<series-featured
				:name="featuredSeriesSecondItem.name"
				:description="featuredSeriesSecondItem.description"
				:category="featuredSeriesSecondItem.category"
				:url="featuredSeriesSecondItem.url"
				:imgSource="featuredSeriesSecondItem.imgSource"
				:lessonsCount="featuredSeriesSecondItem.lessonsCount"
				:length="featuredSeriesSecondItem.length"
				:difficulty="featuredSeriesSecondItem.difficulty"
			></series-featured>
		</div>
		<div class="mt-8">
			<series-more-recent></series-more-recent>
		</div>
	</section>
</template>

<script>
import firstItem from "./series-recent/featured-recent1.js";
import secondItem from "./series-recent/featured-recent2.js";

import SeriesFeatured from "./SeriesFeaturedItem.vue";
import SeriesMoreRecent from "./series-recent/SeriesMoreRecent.vue";

export default {
	components: {
		SeriesFeatured,
		SeriesMoreRecent,
	},
	setup() {
		const featuredSeriesFirstItem = firstItem;
		const featuredSeriesSecondItem = secondItem;

		return {
			featuredSeriesFirstItem,
			featuredSeriesSecondItem,
		};
	},
};
</script>

<template>
	<section>
		<header class="container text-center mx-auto mb-4 max-w-[650px] pb-4 text-black font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">یه ابزار یاد بگیر</h3>
			<p class="font-light inhertis-color text-2lg">برنامه نویس ها از هرروز از ابزار زیادی استفاده می کنن.</p>
		</header>
		<series-featured-item
			:name="featuredItem.name"
			:description="featuredItem.description"
			:category="featuredItem.category"
			:url="featuredItem.url"
			:length="featuredItem.length"
			:imgSource="featuredItem.imgSource"
			:lessonsCount="featuredItem.lessonsCount"
			:difficulty="featuredItem.difficulty"
		></series-featured-item>
		<div class="mt-8">
			<series-featured-items></series-featured-items>
		</div>
		<div class="mt-8">
			<beginner-trending></beginner-trending>
		</div>
	</section>
</template>

<script>
import featuredData from "./series-tool/featured-data";

import SeriesFeaturedItem from "./SeriesFeaturedItem.vue";
import SeriesFeaturedItems from "./SeriesFeaturedItems.vue";
import BeginnerTrending from "./series-beginner/BeginnerTrending.vue";

export default {
	components: {
		SeriesFeaturedItem,
		SeriesFeaturedItems,
		BeginnerTrending,
	},
	setup() {
		const featuredItem = featuredData;

		return {
			featuredItem,
		};
	},
};
</script>

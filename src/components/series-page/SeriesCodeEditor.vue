<template>
	<section>
		<header class="font-IranSans container mx-auto text-center mb-4 max-w-[650px] pb-4 text-black">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">یادبگیر از تمام امکانات ابزار استفاده کنی</h3>
			<p class="font-light inherits-color text-2lg">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
		</header>
		<series-featured-item
			:name="featuredItem.name"
			:description="featuredItem.description"
			:imgSource="featuredItem.imgSource"
			:category="featuredItem.category"
			:difficulty="featuredItem.difficulty"
			:url="featuredItem.url"
			:length="featuredItem.length"
			:lessonsCount="featuredItem.lessonsCount"
		></series-featured-item>
		<div class="mt-8">
			<series-featured-items :items="featuredItems"></series-featured-items>
		</div>
	</section>
</template>

<script>
import featuredData from "./series-codeeditor/featured-data.js";
import featuredItemsData from "./series-codeeditor/featured-items.js";

import SeriesFeaturedItem from "./SeriesFeaturedItem.vue";
import SeriesFeaturedItems from "./SeriesFeaturedItems.vue";

export default {
	components: {
		SeriesFeaturedItem,
		SeriesFeaturedItems,
	},
	setup() {
		const featuredItem = featuredData;
		const featuredItems = featuredItemsData;

		return {
			featuredItem,
			featuredItems,
		};
	},
};
</script>

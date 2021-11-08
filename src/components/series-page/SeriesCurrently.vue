<template>
	<section>
		<header class="container text-center mx-auto mb-4 max-w-[650px] pb-4 text-black font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">دوره های ویژه</h3>
			<p class="font-light inherits-color text-2lg">این ها دوره هایی هستن که فعلا ویژه هستن</p>
		</header>
		<series-featured-item
			:name="firstItem.name"
			:description="firstItem.description"
			:url="firstItem.url"
			:imgSource="firstItem.imgSource"
			:difficulty="firstItem.difficulty"
			:length="firstItem.length"
			:lessonsCount="firstItem.lessonsCount"
			:category="firstItem.category"
		></series-featured-item>
		<div class="mt-8">
			<series-featured-item
				:name="secondItem.name"
				:description="secondItem.description"
				:url="secondItem.url"
				:imgSource="secondItem.imgSource"
				:difficulty="secondItem.difficulty"
				:length="secondItem.length"
				:lessonsCount="secondItem.lessonsCount"
				:category="secondItem.category"
			></series-featured-item>
		</div>
	</section>
</template>

<script>
import firstFeaturedItemData from "./series-currently/featured-item1.js";
import secondFeaturedItemData from "./series-currently/featured-item2.js";

import SeriesFeaturedItem from "./SeriesFeaturedItem.vue";

export default {
	components: {
		SeriesFeaturedItem,
	},
	setup() {
		const firstItem = firstFeaturedItemData;
		const secondItem = secondFeaturedItemData;

		return {
			firstItem,
			secondItem,
		};
	},
};
</script>

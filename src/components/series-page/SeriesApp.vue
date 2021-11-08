<template>
	<section>
		<header class="container mx-auto text-center mb-4 pb-4 max-w-[650px] text-black font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">یادبگیر یه برنامه بنویسی</h3>
			<p class="font-light inherits-color text-2lg">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
		</header>
		<series-featured-items :items="featuredItems"></series-featured-items>
	</section>
</template>

<script>
import featuredData from "./series-app/featured-items.js";

import SeriesFeaturedItems from "./SeriesFeaturedItems.vue";

export default {
	components: {
		SeriesFeaturedItems,
	},
	setup() {
		const featuredItems = featuredData;

		return {
			featuredItems,
		};
	},
};
</script>

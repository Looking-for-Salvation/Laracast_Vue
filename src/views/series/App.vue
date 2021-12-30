<template>
	<section>
		<header class="container mx-auto text-center mb-4 pb-4 max-w-[650px] text-black font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">یادبگیر یه برنامه بنویسی</h3>
			<p class="font-light inherits-color text-2lg">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
		</header>
		<featured-items-container :items="featuredItems"></featured-items-container>
	</section>
</template>

<script>
import featuredData from "@/assets/temp-data/series-page/app/featured-items.js";
import FeaturedItemsContainer from "@/components/ui//featured-item/ContainerSmall.vue";

export default {
	components: {
		FeaturedItemsContainer,
	},
	setup() {
		const featuredItems = featuredData;

		return {
			featuredItems,
		};
	},
};
</script>

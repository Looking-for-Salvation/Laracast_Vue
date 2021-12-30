<template>
	<section>
		<header class="font-IranSans container mx-auto text-center mb-4 max-w-[650px] pb-4 text-black">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">یادبگیر از تمام امکانات ابزار استفاده کنی</h3>
			<p class="font-light inherits-color text-2lg">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
		</header>
		<featured-item-advanced :item="featuredItem"></featured-item-advanced>
		<div class="mt-8">
			<featured-items-container :items="featuredItems"></featured-items-container>
		</div>
	</section>
</template>

<script>
import featuredData from "@/assets/temp-data/series-page/code-editor/featured-data.js";
import featuredItemsData from "@/assets/temp-data/series-page/code-editor/featured-items.js";
import FeaturedItemAdvanced from "@/components/ui/featured-item/FeaturedItemAdvanced.vue";
import FeaturedItemsContainer from "@/components/ui/featured-item/ContainerSmall.vue";

export default {
	components: {
		FeaturedItemAdvanced,
		FeaturedItemsContainer,
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

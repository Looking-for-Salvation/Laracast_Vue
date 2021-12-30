<template>
	<section>
		<header class="container text-center mx-auto mb-4 max-w-[650px] pb-4 text-black font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">یه ابزار یاد بگیر</h3>
			<p class="font-light inhertis-color text-2lg">برنامه نویس ها از هرروز از ابزار زیادی استفاده می کنن.</p>
		</header>
		<featured-item-advanced :item="featuredItem"></featured-item-advanced>
		<div class="mt-8">
			<featured-items-container :items="featuredItems"></featured-items-container>
		</div>
		<div class="mt-8">
			<showcase-medium :items="showcaseItems" :header="{ enabled: true, title: 'اینارو فراموش نکن' }"></showcase-medium>
		</div>
	</section>
</template>

<script>
import featuredData from "@/assets/temp-data/series-page/tools/featured-data.js";
import featuredItemsData from "@/assets/temp-data/series-page/tools/featured-items.js";
import trendingData from "@/assets/temp-data/series-page/tools/trending-items.js";
import FeaturedItemAdvanced from "@/components/ui/featured-item/FeaturedItemAdvanced.vue";
import FeaturedItemsContainer from "@/components/ui/featured-item/ContainerSmall.vue";
import ShowcaseMedium from "@/components/ui/showcase/ShowcaseMedium.vue";

export default {
	components: {
		FeaturedItemAdvanced,
		FeaturedItemsContainer,
		ShowcaseMedium,
	},
	setup() {
		const featuredItem = featuredData;
		const featuredItems = featuredItemsData;
		const showcaseItems = trendingData;

		return {
			featuredItem,
			featuredItems,
			showcaseItems,
		};
	},
};
</script>

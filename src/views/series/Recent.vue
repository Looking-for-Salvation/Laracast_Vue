<template>
	<section>
		<header class="container text-center mb-4 mx-auto max-w-[650px] pb-4 font-IranSans">
			<h3 class="mb-2 text-3xl text-black md:font-light">دوره های اخیر</h3>
			<p class="font-light text-black text-2lg">کنجکاوی بدونی چی تو لاراکست جدیده؟ اینا آخرین دوره های آپدیت شده ان.</p>
		</header>
		<div>
			<featured-item-advanced :item="featuredSeriesFirstItem"></featured-item-advanced>
		</div>
		<div class="mt-8">
			<featured-item-advanced :item="featuredSeriesSecondItem"></featured-item-advanced>
		</div>
		<div class="mt-8">
			<showcase-medium :items="showcaseItems" :header="{ enabled: true, title: 'دوره های بیشتر' }"></showcase-medium>
		</div>
	</section>
</template>

<script>
import firstItem from "@/assets/temp-data/series-page/recent/featured-recent1.js";
import secondItem from "@/assets/temp-data/series-page/recent/featured-recent2.js";
import moreRecent from "@/assets/temp-data/series-page/recent/more-recent.js";

import FeaturedItemAdvanced from "@/components/ui/featured-item/FeaturedItemAdvanced.vue";
import ShowcaseMedium from "@/components/ui/showcase/ShowcaseMedium.vue";

export default {
	components: {
		FeaturedItemAdvanced,
		ShowcaseMedium,
	},
	setup() {
		const featuredSeriesFirstItem = firstItem;
		const featuredSeriesSecondItem = secondItem;
		const showcaseItems = moreRecent;

		return {
			featuredSeriesFirstItem,
			featuredSeriesSecondItem,
			showcaseItems,
		};
	},
};
</script>

<template>
	<section>
		<header class="container text-center mb-4 max-w-[650px] mx-auto pb-4 text-black font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">Grow TALL</h3>
			<p class="font-light inherits-color text-2lg">Ready to embrace the TALL (Tailwind, AlpineJS, Laravel, Livewire) stack?</p>
		</header>
		<featured-item-twin :data="twinData"></featured-item-twin>
		<div class="mt-8">
			<featured-items-container :items="featuredItems"></featured-items-container>
		</div>
	</section>
</template>

<script>
import data from "@/assets/temp-data/series-page/tall/twin-data.js";
import featuredData from "@/assets/temp-data/series-page/tall/featured-items.js";
import FeaturedItemTwin from "@/components/ui/featured-item/FeaturedItemTwin.vue";
import FeaturedItemsContainer from "@/components/ui/featured-item/ContainerSmall.vue";

export default {
	components: {
		FeaturedItemTwin,
		FeaturedItemsContainer,
	},
	setup() {
		const twinData = data;
		const featuredItems = featuredData;

		return {
			twinData,
			featuredItems,
		};
	},
};
</script>

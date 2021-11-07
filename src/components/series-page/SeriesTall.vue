<template>
	<section>
		<header class="container text-center mb-4 max-w-[650px] mx-auto pb-4 text-black font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">Grow TALL</h3>
			<p class="font-light inherits-color text-2lg">Ready to embrace the TALL (Tailwind, AlpineJS, Laravel, Livewire) stack?</p>
		</header>
		<series-twin-item :item1="firstTwin" :item2="secondTwin"></series-twin-item>
		<div class="mt-8">
			<series-featured-items :items="featuredItems"></series-featured-items>
		</div>
	</section>
</template>

<script>
import { item1, item2 } from "./series-tall/twin-data.js";
import featuredData from "./series-tall/featured-items.js";

import SeriesTwinItem from "./SeriesTwinItem.vue";
import SeriesFeaturedItems from "./SeriesFeaturedItems.vue";

export default {
	components: {
		SeriesTwinItem,
		SeriesFeaturedItems,
	},
	setup() {
		const firstTwin = item1;
		const secondTwin = item2;
		const featuredItems = featuredData;

		return {
			firstTwin,
			secondTwin,
			featuredItems,
		};
	},
};
</script>

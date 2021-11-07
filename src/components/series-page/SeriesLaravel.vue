<template>
	<section>
		<header class="container mx-auto text-black max-w-[650px] mb-4 pb-4 text-center font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">آموزش لاراول</h3>
			<p class="font-light inhertis-color text-2lg">می خوای لاراول یادبگیری؟ این دوره ها به کارت میاد</p>
		</header>
		<series-twin-item :item1="firstTwin" :item2="secondTwin"></series-twin-item>
	</section>
</template>

<script>
import { item1, item2 } from "./series-laravel/data.js";

import SeriesTwinItem from "./SeriesTwinItem.vue";

export default {
	components: {
		SeriesTwinItem,
	},
	setup() {
		const firstTwin = item1;
		const secondTwin = item2;

		return {
			firstTwin,
			secondTwin,
		};
	},
};
</script>

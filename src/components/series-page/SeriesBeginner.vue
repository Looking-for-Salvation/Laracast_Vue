<template>
	<section>
		<header class="container text-center mb-4 mx-auto max-w-[650px] pb-4 text-black font-IranSans hover:text-white">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">تازه واردی؟</h3>
			<p class="font-light inherits-color text-2lg">تازه وارد جمع لاراکست شدی؟ این دوتا دوره واسه این که شروع کنی.</p>
		</header>
		<series-twin-item :item1="firstTwin" :item2="secondTwin"></series-twin-item>
	</section>
</template>

<script>
import { item1, item2 } from "./series-beginner/data.js";

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

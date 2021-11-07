<template>
	<section>
		<header class="container text-center mb-4 mx-auto max-w-[650px] pb-4 text-black font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">برنامه نویسی شی گرایی</h3>
			<p class="font-light inherits-color text-2lg">با این دوره ها می تونی برنامه نویسی شی گرایی رو یادبگیری.</p>
		</header>
		<series-twin-item :item1="firstTwin" :item2="secondTwin"></series-twin-item>
	</section>
</template>

<script>
import { item1, item2 } from "./series-oop/data.js";

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

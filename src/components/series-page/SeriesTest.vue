<template>
	<section>
		<header class="container mx-auto text-center mb-4 max-w-[650px] pb-4 text-black font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">مهارت های تست خودتو ارتقا یده</h3>
			<p class="font-light inherits-color text-2lg">
				لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
				که لازم است
			</p>
		</header>
		<test-trending :col1="firstColData" :col2="secondColData"></test-trending>
	</section>
</template>

<script>
import { col1, col2 } from "./series-test/data.js";

import TestTrending from "./series-test/TestTrending.vue";

export default {
	components: {
		TestTrending,
	},
	setup() {
		const firstColData = col1;
		const secondColData = col2;

		return {
			firstColData,
			secondColData,
		};
	},
};
</script>

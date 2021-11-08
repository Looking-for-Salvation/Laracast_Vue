<template>
	<section>
		<header class="container text-center mb-4 text-black font-IranSans pb-4 max-w-[650px] mx-auto">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">آپدیت جدید لاراول</h3>
			<p class="font-light inherits-color text-2lg">
				لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
				که لازم است
			</p>
		</header>
		<new-laravel-trending :col1="firstColData" :col2="secondColData"></new-laravel-trending>
	</section>
</template>

<script>
import { col1, col2 } from "./series-newlaravel/data.js";

import NewLaravelTrending from "./series-newlaravel/NewLaravelTrending.vue";

export default {
	components: {
		NewLaravelTrending,
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

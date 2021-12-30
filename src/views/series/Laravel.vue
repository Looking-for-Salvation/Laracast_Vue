<template>
	<section>
		<header class="container mx-auto text-black max-w-[650px] mb-4 pb-4 text-center font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">آموزش لاراول</h3>
			<p class="font-light inhertis-color text-2lg">می خوای لاراول یادبگیری؟ این دوره ها به کارت میاد</p>
		</header>
		<featured-item-twin :data="twinData"></featured-item-twin>
	</section>
</template>

<script>
import data from "@/assets/temp-data/series-page/laravel/data.js";
import FeaturedItemTwin from "@/components/ui/featured-item/FeaturedItemTwin.vue";

export default {
	components: {
		FeaturedItemTwin,
	},
	setup() {
		const twinData = data;

		return { twinData };
	},
};
</script>

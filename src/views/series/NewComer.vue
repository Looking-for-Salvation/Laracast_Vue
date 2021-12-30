<template>
	<section>
		<header class="container text-center mb-4 mx-auto max-w-[650px] pb-4 text-black font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">تازه واردی؟</h3>
			<p class="font-light inherits-color text-2lg">تازه وارد جمع لاراکست شدی؟ این دوتا دوره واسه این که شروع کنی.</p>
		</header>
		<featured-item-twin :data="twinData"></featured-item-twin>
	</section>
</template>

<script>
import data from "@/assets/temp-data/series-page/newcomer/data.js";
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

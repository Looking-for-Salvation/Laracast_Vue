<template>
	<section>
		<header class="container text-center mx-auto mb-4 max-w-[650px] pb-4 text-black font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">دوره های ویژه</h3>
			<p class="font-light inherits-color text-2lg">این ها دوره هایی هستن که فعلا ویژه هستن</p>
		</header>
		<featured-item-advanced :item="firstItem"></featured-item-advanced>
		<div class="mt-8">
			<featured-item-advanced :item="secondItem"></featured-item-advanced>
		</div>
	</section>
</template>

<script>
import firstFeaturedItemData from "@/assets/temp-data/series-page/featured/featured-item1.js";
import secondFeaturedItemData from "@/assets/temp-data/series-page/featured/featured-item2.js";
import FeaturedItemAdvanced from "@/components/ui/featured-item/FeaturedItemAdvanced.vue";

export default {
	components: {
		FeaturedItemAdvanced,
	},
	setup() {
		const firstItem = firstFeaturedItemData;
		const secondItem = secondFeaturedItemData;

		return {
			firstItem,
			secondItem,
		};
	},
};
</script>

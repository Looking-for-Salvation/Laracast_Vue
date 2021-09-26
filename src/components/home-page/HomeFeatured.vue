<template>
	<section class="pt-6 featured-series pb-9">
		<div class="mx-auto overflow-hidden">
			<div class="flex justify-center w-1/2 mx-auto mb-4 text-center font-IranSans">
				<div class="max-w-2xl pb-4 mx-auto mb-4 text-center text-black">
					<h3 class="mb-4 text-3xl font-light">به دنبال یادگیری کدوم تکنولوژی هستی؟</h3>
					<p class="text-lg font-light opacity-70">با استفاده از ویدیو های لاراکست تکنولوژی دلخواهتون رو به صورت کامل یاد بگیرید.</p>
				</div>
			</div>
			<featured-series></featured-series>
		</div>
	</section>
</template>

<script>
import FeaturedSeries from "./home-featured/FeaturedSeries.vue";

export default {
	components: {
		FeaturedSeries,
	},
};
</script>

<style scoped></style>

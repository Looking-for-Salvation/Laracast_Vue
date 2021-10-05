<template>
	<div class="home">
		<home-banner></home-banner>
		<home-stats></home-stats>
		<home-featured></home-featured>
		<home-carousel></home-carousel>
		<home-reviews></home-reviews>
	</div>
</template>

<script>
import HomeBanner from "../components/home-page/HomeBanner.vue";
import HomeStats from "../components/home-page/HomeStats.vue";
import HomeFeatured from "../components/home-page/HomeFeatured.vue";
import HomeCarousel from "../components/home-page/HomeCarousel.vue";
import HomeReviews from "../components/home-page/HomeReviews.vue";

export default {
	components: {
		HomeBanner,
		HomeStats,
		HomeFeatured,
		HomeCarousel,
		HomeReviews,
	},
};
</script>

<style scoped>
.home {
	background-color: #f7f8fc;
}
</style>

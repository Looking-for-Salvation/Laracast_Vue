<template>
	<div>
		<main>
			<home-banner></home-banner>
			<home-stats></home-stats>
			<home-featured></home-featured>
			<home-carousel></home-carousel>
			<home-reviews></home-reviews>
			<home-plans></home-plans>
			<home-team></home-team>
		</main>
	</div>
</template>

<script>
import HomeBanner from "./home/Banner.vue";
import HomeStats from "./home/Stats.vue";
import HomeFeatured from "./home/Featured.vue";
import HomeCarousel from "./home/Carousel.vue";
import HomeReviews from "./home/Reviews.vue";
import HomePlans from "./home/Plans.vue";
import HomeTeam from "./home/Team.vue";

export default {
	components: {
		HomeBanner,
		HomeStats,
		HomeFeatured,
		HomeCarousel,
		HomeReviews,
		HomePlans,
		HomeTeam,
	},
};
</script>

<template>
	<div class="home">
		<home-banner></home-banner>
		<home-stats></home-stats>
		<home-featured></home-featured>
	</div>
</template>

<script>
import HomeBanner from "../components/home-page/HomeBanner.vue";
import HomeStats from "../components/home-page/HomeStats.vue";
import HomeFeatured from "../components/home-page/HomeFeatured.vue";

export default {
	components: {
		HomeBanner,
		HomeStats,
		HomeFeatured,
	},
};
</script>

<style scoped>
.home {
	background-color: #f7f8fc;
}
</style>

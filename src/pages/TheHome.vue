<template>
	<div class="home">
		<home-banner></home-banner>
		<section class="home-skills pb-9">
			<home-stats></home-stats>
		</section>
	</div>
</template>

<script>
import HomeBanner from "../components/home-page/HomeBanner.vue";
import HomeStats from "../components/home-page/HomeStats.vue";

export default {
	components: {
		HomeBanner,
		HomeStats,
	},
};
</script>

<style scoped>
.home {
	background-color: #f7f8fc;
}
</style>

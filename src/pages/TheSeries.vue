<template>
	<div>
		<main>
			<div>
				<the-header></the-header>
			</div>
			<series-recent></series-recent>
			<series-trending></series-trending>
			<series-beginner></series-beginner>
			<series-tool></series-tool>
		</main>
	</div>
</template>

<script>
import SeriesRecent from "@/components/series-page/SeriesRecent.vue";
import SeriesTrending from "@/components/series-page/SeriesTrending.vue";
import SeriesBeginner from "@/components/series-page/SeriesBeginner.vue";
import SeriesTool from "@/components/series-page/SeriesTool.vue";

export default {
	components: {
		SeriesRecent,
		SeriesTrending,
		SeriesBeginner,
		SeriesTool,
	},
};
</script>

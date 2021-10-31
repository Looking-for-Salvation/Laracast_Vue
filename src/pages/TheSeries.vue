<template>
	<div>
		<main>
			<div>
				<the-header></the-header>
			</div>
			<series-recent></series-recent>
			<series-trending></series-trending>
		</main>
	</div>
</template>

<script>
import SeriesRecent from "@/components/series-page/SeriesRecent.vue";
import SeriesTrending from "@/components/series-page/SeriesTrending.vue";

export default {
	components: {
		SeriesRecent,
		SeriesTrending,
	},
};
</script>

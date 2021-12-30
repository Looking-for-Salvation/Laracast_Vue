<template>
	<div>
		<main>
			<div>
				<the-header></the-header>
			</div>
			<series-recent></series-recent>
			<series-trending></series-trending>
			<series-new-comer></series-new-comer>
			<series-tools></series-tools>
			<series-object-oriented></series-object-oriented>
			<series-code-editor></series-code-editor>
			<series-laravel></series-laravel>
			<series-tall></series-tall>
			<series-featured></series-featured>
			<series-test></series-test>
			<series-app></series-app>
			<series-laravel-updates></series-laravel-updates>
			<series-carousel></series-carousel>
		</main>
	</div>
</template>

<script>
import SeriesRecent from "@/views/series/Recent.vue";
import SeriesTrending from "@/views/series/Trending.vue";
import SeriesNewComer from "@/views/series/NewComer.vue";
import SeriesTools from "@/views/series/Tools.vue";
import SeriesObjectOriented from "@/views/series/ObjectOriented.vue";
import SeriesCodeEditor from "@/views/series/CodeEditor.vue";
import SeriesLaravel from "@/views/series/Laravel.vue";
import SeriesTall from "@/views/series/Tall.vue";
import SeriesFeatured from "@/views/series/Featured.vue";
import SeriesTest from "@/views/series/Test.vue";
import SeriesApp from "@/views/series/App.vue";
import SeriesLaravelUpdates from "@/views/series/LaravelUpdates.vue";
import SeriesCarousel from "@/views/series/Carousel.vue";

export default {
	components: {
		SeriesRecent,
		SeriesTrending,
		SeriesNewComer,
		SeriesTools,
		SeriesObjectOriented,
		SeriesCodeEditor,
		SeriesLaravel,
		SeriesTall,
		SeriesFeatured,
		SeriesTest,
		SeriesApp,
		SeriesLaravelUpdates,
		SeriesCarousel,
	},
};
</script>

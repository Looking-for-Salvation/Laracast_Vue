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
			<series-oop></series-oop>
			<series-code-editor></series-code-editor>
			<series-laravel></series-laravel>
			<series-tall></series-tall>
			<series-currently></series-currently>
			<series-test></series-test>
			<series-app></series-app>
			<series-new-laravel></series-new-laravel>
			<series-carousel></series-carousel>
		</main>
	</div>
</template>

<script>
import SeriesRecent from "@/components/series-page/SeriesRecent.vue";
import SeriesTrending from "@/components/series-page/SeriesTrending.vue";
import SeriesBeginner from "@/components/series-page/SeriesBeginner.vue";
import SeriesTool from "@/components/series-page/SeriesTool.vue";
import SeriesOop from "@/components/series-page/SeriesOop.vue";
import SeriesCodeEditor from "@/components/series-page/SeriesCodeEditor.vue";
import SeriesLaravel from "@/components/series-page/SeriesLaravel.vue";
import SeriesTall from "@/components/series-page/SeriesTall.vue";
import SeriesCurrently from "@/components/series-page/SeriesCurrently.vue";
import SeriesTest from "@/components/series-page/SeriesTest.vue";
import SeriesApp from "@/components/series-page/SeriesApp.vue";
import SeriesNewLaravel from "@/components/series-page/SeriesNewLaravel.vue";
import SeriesCarousel from "@/components/series-page/SeriesCarousel.vue";

export default {
	components: {
		SeriesRecent,
		SeriesTrending,
		SeriesBeginner,
		SeriesTool,
		SeriesOop,
		SeriesCodeEditor,
		SeriesLaravel,
		SeriesTall,
		SeriesCurrently,
		SeriesTest,
		SeriesApp,
		SeriesNewLaravel,
		SeriesCarousel,
	},
};
</script>

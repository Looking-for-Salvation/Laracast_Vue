<template>
	<section>
		<header class="container text-center mb-4 text-black font-IranSans pb-4 max-w-[650px] mx-auto">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">آپدیت جدید لاراول</h3>
			<p class="font-light inherits-color text-2lg">
				لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
				که لازم است
			</p>
		</header>
		<showcase-small :data="showcaseData"></showcase-small>
	</section>
</template>

<script>
import data from "@/assets/temp-data/series-page/laravel-updates/data.js";
import ShowcaseSmall from "@/components/ui/showcase/ShowcaseSmall.vue";

export default {
	components: {
		ShowcaseSmall,
	},
	setup() {
		const showcaseData = data;

		return { showcaseData };
	},
};
</script>

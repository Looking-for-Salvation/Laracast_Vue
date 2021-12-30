<template>
	<section>
		<header class="container text-center mb-4 mx-auto max-w-[650px] pb-4 text-black font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">دوره های محبوب</h3>
			<p class="font-light inherits-color text-2lg">اینا دوره هایی هستن که پرطرفدار بودن.</p>
		</header>
		<showcase-small :data="showcaseData"></showcase-small>
	</section>
</template>

<script>
import data from "@/assets/temp-data/series-page/trending/data.js";
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

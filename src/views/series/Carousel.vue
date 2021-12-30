<template>
	<section>
		<header class="container text-center text-black mb-4 pb-4 mx-auto max-w-[650px] font-IranSans">
			<h3 class="mb-2 text-3xl inherits-color md:font-light">لاراکستو بگرد!</h3>
			<p class="font-light inherits-color text-2lg">لاراکست به چند بخش تقسیم شده از فریمورک ها بگیر تا پکیج ها و ابزار مختلف</p>
		</header>
		<carousel-slider></carousel-slider>
	</section>
</template>

<script>
import CarouselSlider from "@/views/series/carousel/Slider.vue";

export default {
	components: {
		CarouselSlider,
	},
};
</script>

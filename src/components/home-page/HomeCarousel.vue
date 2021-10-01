<template>
	<section class="pt-6 mt-6 carousel pb-9">
		<div class="mx-auto">
			<header class="pb-4 mx-auto mb-4 text-center text-black font-IranSans">
				<h3 class="mb-4 text-3xl font-light">لاراکستو بگرد!</h3>
				<p class="text-lg font-light opacity-70">اگه میدونی دنبال چی هستی، لاراکست به چند بخش تقسیم شده از فریمورک ها بگیر تا پکیج ها و ابزار مختلف</p>
			</header>
			<carousel-slider></carousel-slider>
		</div>
	</section>
</template>

<script>
import CarouselSlider from "./home-carousel/CarouselSlider.vue";

export default {
	components: {
		CarouselSlider,
	},
};
</script>

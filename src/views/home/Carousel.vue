<template>
	<section class="carousel p-0 md:pt-[20px] md:pb-[35px]">
		<div class="mx-auto">
			<header class="container pb-4 mx-auto mb-4 text-center text-black font-IranSans">
				<h3 class="mb-4 text-3xl font-light">لاراکستو بگرد!</h3>
				<p class="font-light text-2lg opacity-70">اگه میدونی دنبال چی هستی، لاراکست به چند بخش تقسیم شده از فریمورک ها بگیر تا پکیج ها و ابزار مختلف</p>
			</header>
			<carousel-slider></carousel-slider>
		</div>
	</section>
</template>

<script>
import CarouselSlider from "./carousel/Slider.vue";

export default {
	components: {
		CarouselSlider,
	},
};
</script>

<template>
	<swiper
		:slidesPerView="'auto'"
		:slidesPerGroup="1"
		:centeredSlides="true"
		:spaceBetween="30"
		:breakpoints="{
			450: {
				slidesPerView: 2,
			},
			650: {
				slidesPerView: 3,
			},
			700: {
				slidesPerView: 3,
			},
			950: {
				slidesPerView: 4,
			},
			1150: {
				slidesPerView: 5,
			},
			1350: {
				slidesPerView: 6,
			},
			1550: {
				slidesPerView: 7,
			},
			1700: {
				slidesPerView: 8,
			},
			2000: {
				slidesPerView: 9,
			},
			2200: {
				slidesPerView: 10,
			},
		}"
		:loop="true"
		:navigation="true"
		class="mt-8 mySwiper"
		:grabCursor="true"
	>
		<swiper-slide v-for="slide in slidesData" :key="slide[0].name">
			<carousel-slides v-for="item in slide" :key="item.name" :item="item"></carousel-slides>
		</swiper-slide>
	</swiper>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import CarouselSlides from "./Slides.vue";

//* Swiper inclusion
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
SwiperCore.use([Pagination, Navigation]);

export default {
	components: {
		Swiper,
		SwiperSlide,
		CarouselSlides,
	},
	setup() {
		const store = useStore();
		const slidesData = computed(() => store.getters["carousel/slidesData"]);

		return {
			slidesData,
		};
	},
};
</script>

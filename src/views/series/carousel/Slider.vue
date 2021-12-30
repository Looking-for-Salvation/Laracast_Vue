<template>
	<swiper
		:slidesPerView="1"
		:loop="true"
		:navigation="true"
		:grabCursor="true"
		:breakpoints="{
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
		}"
		class="container mt-8 mySwiper"
		style="max-width: 1166px;"
	>
		<swiper-slide v-for="slide in slidesData" :key="slide[0].name">
			<div class="grid w-full gap-y-4">
				<carousel-item v-for="item in slide" :key="item.name" :item="item"></carousel-item>
			</div>
		</swiper-slide>
	</swiper>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import CarouselItem from "@/views/series/carousel/Item.vue";

//* Swiper inculsion
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
		CarouselItem,
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

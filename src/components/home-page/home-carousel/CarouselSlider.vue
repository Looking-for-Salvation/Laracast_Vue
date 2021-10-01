<template>
	<swiper :slidesPerView="8" :spaceBetween="50" :loop="true" :loopFillGroupWithBlank="true" :navigation="true" class="mySwiper">
		<swiper-slide>
			<carousel-item
				v-for="item in firstSlide"
				:key="item.name"
				:name="item.name"
				:route="item.route"
				:imgSource="item.imgSource"
				:seriesCount="item.seriesCount"
				:videosCount="item.videosCount"
				:order="item.itemOrder"
			></carousel-item>
		</swiper-slide>
		<swiper-slide>
			<carousel-item
				v-for="item in secondSlide"
				:key="item.name"
				:name="item.name"
				:route="item.route"
				:imgSource="item.imgSource"
				:seriesCount="item.seriesCount"
				:videosCount="item.videosCount"
				:order="item.itemOrder"
			></carousel-item>
		</swiper-slide>
		<swiper-slide>
			<carousel-item
				v-for="item in thirdSlide"
				:key="item.name"
				:name="item.name"
				:route="item.route"
				:imgSource="item.imgSource"
				:seriesCount="item.seriesCount"
				:videosCount="item.videosCount"
				:order="item.itemOrder"
			></carousel-item>
		</swiper-slide>
		<swiper-slide>
			<carousel-item
				v-for="item in forthSlide"
				:key="item.name"
				:name="item.name"
				:route="item.route"
				:imgSource="item.imgSource"
				:seriesCount="item.seriesCount"
				:videosCount="item.videosCount"
				:order="item.itemOrder"
			></carousel-item>
		</swiper-slide>
		<swiper-slide>
			<carousel-item
				v-for="item in fifthSlide"
				:key="item.name"
				:name="item.name"
				:route="item.route"
				:imgSource="item.imgSource"
				:seriesCount="item.seriesCount"
				:videosCount="item.videosCount"
				:order="item.itemOrder"
			></carousel-item>
		</swiper-slide>
		<swiper-slide>
			<carousel-item
				v-for="item in sixthSlide"
				:key="item.name"
				:name="item.name"
				:route="item.route"
				:imgSource="item.imgSource"
				:seriesCount="item.seriesCount"
				:videosCount="item.videosCount"
				:order="item.itemOrder"
			></carousel-item>
		</swiper-slide>
		<swiper-slide>
			<carousel-item
				v-for="item in seventhSlide"
				:key="item.name"
				:name="item.name"
				:route="item.route"
				:imgSource="item.imgSource"
				:seriesCount="item.seriesCount"
				:videosCount="item.videosCount"
				:order="item.itemOrder"
			></carousel-item>
		</swiper-slide>
		<swiper-slide>
			<carousel-item
				v-for="item in eighthSlide"
				:key="item.name"
				:name="item.name"
				:route="item.route"
				:imgSource="item.imgSource"
				:seriesCount="item.seriesCount"
				:videosCount="item.videosCount"
				:order="item.itemOrder"
			></carousel-item>
		</swiper-slide>
		<swiper-slide>
			<carousel-item
				v-for="item in ninthSlide"
				:key="item.name"
				:name="item.name"
				:route="item.route"
				:imgSource="item.imgSource"
				:seriesCount="item.seriesCount"
				:videosCount="item.videosCount"
				:order="item.itemOrder"
			></carousel-item>
		</swiper-slide>
		<swiper-slide>
			<carousel-item
				v-for="item in tenthSlide"
				:key="item.name"
				:name="item.name"
				:route="item.route"
				:imgSource="item.imgSource"
				:seriesCount="item.seriesCount"
				:videosCount="item.videosCount"
				:order="item.itemOrder"
			></carousel-item>
		</swiper-slide>
		<swiper-slide>
			<carousel-item
				v-for="item in eleventhSlide"
				:key="item.name"
				:name="item.name"
				:route="item.route"
				:imgSource="item.imgSource"
				:seriesCount="item.seriesCount"
				:videosCount="item.videosCount"
				:order="item.itemOrder"
			></carousel-item>
		</swiper-slide>
		<swiper-slide>
			<carousel-item
				v-for="item in twelfthSlide"
				:key="item.name"
				:name="item.name"
				:route="item.route"
				:imgSource="item.imgSource"
				:seriesCount="item.seriesCount"
				:videosCount="item.videosCount"
				:order="item.itemOrder"
			></carousel-item>
		</swiper-slide>
	</swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Pagination, Navigation]);

import { slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12 } from "./data.js";
import CarouselItem from "./CarouselItem.vue";

export default {
	components: {
		Swiper,
		SwiperSlide,
		CarouselItem,
	},
	setup() {
		const firstSlide = slide1;
		const secondSlide = slide2;
		const thirdSlide = slide3;
		const forthSlide = slide4;
		const fifthSlide = slide5;
		const sixthSlide = slide6;
		const seventhSlide = slide7;
		const eighthSlide = slide8;
		const ninthSlide = slide9;
		const tenthSlide = slide10;
		const eleventhSlide = slide11;
		const twelfthSlide = slide12;

		return {
			firstSlide,
			secondSlide,
			thirdSlide,
			forthSlide,
			fifthSlide,
			sixthSlide,
			seventhSlide,
			eighthSlide,
			ninthSlide,
			tenthSlide,
			eleventhSlide,
			twelfthSlide,
		};
	},
};
</script>

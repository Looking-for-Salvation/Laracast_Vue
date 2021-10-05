<template>
	<div class="relative flex">
		<div class="flex flex-wrap items-center justify-start p-8 bg-white">
			<div class="flex justify-between w-full">
				<reviews-item v-for="item in firstRow" :key="item.id" :imgSource="item.img" :id="item.id" @mouse-enter="setData"></reviews-item>
			</div>
			<div class="flex justify-between w-full">
				<reviews-item v-for="item in secondRow" :key="item.id" :imgSource="item.img" :id="item.id" @mouse-enter="setData"></reviews-item>
			</div>
			<div class="flex justify-between w-full">
				<reviews-item v-for="item in thirdRow" :key="item.id" :imgSource="item.img" :id="item.id" @mouse-enter="setData"></reviews-item>
			</div>
			<div class="flex justify-between w-full">
				<reviews-item v-for="item in forthRow" :key="item.id" :imgSource="item.img" :id="item.id" @mouse-enter="setData"></reviews-item>
			</div>
			<div class="flex justify-between w-full">
				<reviews-item v-for="item in fifthRow" :key="item.id" :imgSource="item.img" :id="item.id" @mouse-enter="setData"></reviews-item>
			</div>
		</div>
		<div class="absolute inset-y-0 left-0 flex items-center justify-center w-2/5 max-w-[600px] p-10 text-center bg-white bg-opacity-97">
			<div>
				<img :src="hoveredReview[0].imgSource" :alt="hoveredReview[0].name" class="inline-block w-16 mb-2 rounded-full xl:w-24" width="90" height="90" />
				<p class="mb-6 text-sm text-black font-IranSans">
					<a href="#" class="text-black hover:underline">{{ hoveredReview[0].name }}</a>
				</p>
				<p class="max-w-xs mb-8 text-xs text-gray-700 fon font-IranSans lg:text-sm">{{ hoveredReview[0].review }}</p>
				<a
					href="#"
					class="px-8 py-3 text-white transition-all duration-200 bg-blue-400 border rounded-full shadow-sm hover:bg-blue-500 hover:shadow-lg font-IranSans"
					>نمایش همه
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, computed } from "vue";

import ReviewsItem from "./ReviewsItem.vue";
import { row1, row2, row3, row4, row5 } from "./lessDetailedData.js";
import detailedData from "./detailedData.js";

export default {
	components: {
		ReviewsItem,
	},
	setup() {
		const fullData = detailedData;

		const hoveredId = ref("r01");

		const hoveredReview = computed(() => {
			return fullData.filter((review) => review.id === hoveredId.value);
		});

		const firstRow = row1;
		const secondRow = row2;
		const thirdRow = row3;
		const forthRow = row4;
		const fifthRow = row5;

		console.log(hoveredReview.value);

		function setData(id) {
			hoveredId.value = id;
		}

		return {
			firstRow,
			secondRow,
			thirdRow,
			forthRow,
			fifthRow,
			fullData,
			hoveredReview,
			setData,
		};
	},
};
</script>

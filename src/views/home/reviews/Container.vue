<template>
	<div class="relative flex">
		<div class="flex flex-wrap items-center justify-start p-8 bg-white">
			<div class="flex justify-between w-full" v-for="row in reviews" :key="row[0].id">
				<review-item v-for="item in row" :key="item.id" :item="item"></review-item>
			</div>
		</div>
		<div class="absolute inset-y-0 left-0 flex items-center justify-center w-2/5 max-w-[600px] p-10 text-center bg-white bg-opacity-97">
			<div>
				<img :src="selectedReview.img" :alt="selectedReview.name" class="inline-block w-16 mb-2 rounded-full xl:w-24" width="90" height="90" />
				<p class="mb-6 text-sm text-black font-IranSans">
					<a href="#" class="text-black hover:underline">{{ selectedReview.name }}</a>
				</p>
				<p class="max-w-xs mb-8 text-xs text-gray-700 fon font-IranSans lg:text-sm">{{ selectedReview.review }}</p>
				<a
					class="px-8 py-3 text-white transition-all duration-200 border rounded-full cursor-pointer review-button font-IranSans"
					@click="openReviewsModal"
				>
					نمایش همه
				</a>
			</div>
		</div>
	</div>
	<reviews-modal></reviews-modal>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import ReviewItem from "./Review.vue";
import ReviewsModal from "@/components/ui/modals/ReviewsModal.vue";

export default {
	components: {
		ReviewItem,
		ReviewsModal,
	},
	setup() {
		const store = useStore();
		const reviews = computed(() => store.getters["home/reviews/sortedReviews"]);
		const selectedReview = computed(() => store.getters["home/reviews/selectedReview"]);
		const openReviewsModal = () => store.dispatch("modals/openReviewsModal");

		return {
			reviews,
			selectedReview,
			openReviewsModal,
		};
	},
};
</script>

<style scoped>
.review-button {
	--border-opacity: 1;
	--bg-opacity: 1;
	--text-opacity: 1;
	background-color: rgba(50, 138, 241, var(--bg-opacity));
	border-color: rgba(50, 138, 241, var(--border-opacity));
	color: rgba(255, 255, 255, var(--text-opacity));
}

.review-button:hover {
	--border-opacity: 1;
	--bg-opacity: 1;
	--text-opacity: 1;
	background-color: rgba(39, 121, 189, var(--bg-opacity));
	border-color: rgba(50, 138, 241, var(--border-opacity));
	box-shadow: 0 0 10px rgb(0 0 0 / 25%);
	color: rgba(255, 255, 255, var(--text-opacity));
}
</style>

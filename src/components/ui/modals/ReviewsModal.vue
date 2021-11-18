<template>
	<base-modal inlineStyles="max-width: 1500px; max-height: 95vh;" :isVisible="reviewsModalVisibility" @close="closeReviewsModal">
		<div class="flex flex-col justify-between h-full px-4">
			<div class="flex-1 w-full md:px-10">
				<div class="h-screen">
					<div class="container py-6 mx-auto">
						<h1 class="mb-8 text-3xl text-center font-IranSans md:font-light">نظرات کاربران</h1>
						<div class="md:flex md:flex-wrap fade-in">
							<div v-for="review in reviews" :key="review.reviewId" class="mt-8 mb-10 text-center md:w-1/4 font-IranSans">
								<div class="px-8">
									<a href="#" class="m-4" target="_blank" rel="noreferrer">
										<img :src="review.imgSource" :alt="review.name" class="inline w-20 mb-4 border-2 border-blue-400 rounded-full" />
									</a>
									<h5 class="mb-6">
										<a href="#" class="text-black cursor-pointer hover:underline" target="_blank" rel="noreferrer">{{ review.name }}</a>
									</h5>
									<p>{{ review.review }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</base-modal>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
	setup() {
		const store = useStore();
		const reviews = computed(() => store.getters["home/reviews/reviewsData"]);
		const reviewsModalVisibility = computed(() => store.getters["modals/reviewsModalVisibility"]);
		const closeReviewsModal = () => store.dispatch("modals/closeReviewsModal");

		return {
			reviews,
			reviewsModalVisibility,
			closeReviewsModal,
		};
	},
};
</script>

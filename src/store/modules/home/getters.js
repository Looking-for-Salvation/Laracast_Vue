export default {
	selectedReview(state) {
		return state.reviewsData.find((item) => (item.reviewId = state.selectedReviewId));
	},
	sortedReviews(state) {
		return new Array(Math.ceil(state.reviewsData.length / 20)).fill().map(() => state.reviewsData.splice(0, 20));
	},
};

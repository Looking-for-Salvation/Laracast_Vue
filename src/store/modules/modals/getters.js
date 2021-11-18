export default {
	//* LoginModal related getters
	loginModalVisibility(state) {
		return state.isLoginVisible;
	},

	//* JoinModal related getters
	joinModalVisibility(state) {
		return state.isJoinVisible;
	},
	joinModalCurrentTab(state) {
		return state.joinModalCurrentTab;
	},

	//* SignupModal related getters
	signupModalVisibility(state) {
		return state.isSignupVisible;
	},

	//* ForgotPasswordModal related getters
	forgotPasswordModalVisibility(state) {
		return state.isForgotPasswordVisible;
	},

	//* MobileNavModal related getters
	mobileNavModalVisibility(state) {
		return state.isMobileNavVisible;
	},

	//* SupportModal related getters
	supportModalVisibility(state) {
		return state.isSupportVisible;
	},

	//* ReviewsModal related getters
	reviewsModalVisibility(state) {
		return state.isReviewsVisible;
	},
};

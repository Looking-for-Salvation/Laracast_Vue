export default {
	//* LoginModal related mutations
	openLogin(state) {
		state.isLoginVisible = true;
	},
	closeLogin(state) {
		state.isLoginVisible = false;
	},

	//* JoinModal related mutations
	openJoin(state) {
		state.isJoinVisible = true;
	},
	closeJoin(state) {
		state.isJoinVisible = false;
	},
	setJoinModalCurrentTab(state, payload) {
		state.joinModalCurrentTab = payload.tab;
	},

	//* SignupModal related mutations
	openSignup(state) {
		state.isSignupVisible = true;
	},
	closeSignup(state) {
		state.isSignupVisible = false;
	},

	//* ForgotPasswordModal related mutations
	openForgotPassword(state) {
		state.isForgotPasswordVisible = true;
	},
	closeForgotPassword(state) {
		state.isForgotPasswordVisible = false;
	},

	//* MobileNavModal related mutations
	openMobileNav(state) {
		state.isMobileNavVisible = true;
	},
	closeMobileNav(state) {
		state.isMobileNavVisible = false;
	},

	//* SupportModal related mutations
	openSupport(state) {
		state.isSupportVisible = true;
	},
	closeSupport(state) {
		state.isSupportVisible = false;
	},

	//* ReviewsModal related mutations
	openReviewsModal(state) {
		state.isReviewsVisible = true;
	},
	closeReviewsModal(state) {
		state.isReviewsVisible = false;
	},
};

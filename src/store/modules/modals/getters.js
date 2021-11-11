export default {
	loginModalVisibility(state) {
		return state.isLoginVisible;
	},
	joinModalVisibility(state) {
		return state.isJoinVisible;
	},
	signupModalVisibility(state) {
		return state.isSignupVisible;
	},
	forgotPasswordModalVisibility(state) {
		return state.isForgotPasswordVisible;
	},
	mobileNavModalVisibility(state) {
		return state.isMobileNavVisible;
	},
	supportModalVisibility(state) {
		return state.isSupportVisible;
	},
	joinModalCurrentTab(state) {
		return state.joinModalCurrentTab;
	},
};

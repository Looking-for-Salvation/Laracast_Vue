export default {
	openLogin(state) {
		state.isLoginVisible = true;
	},
	closeLogin(state) {
		state.isLoginVisible = false;
	},
	openJoin(state) {
		state.isJoinVisible = true;
	},
	closeJoin(state) {
		state.isJoinVisible = false;
	},
	openSignup(state) {
		state.isSignupVisible = true;
	},
	closeSignup(state) {
		state.isSignupVisible = false;
	},
	openForgotPassword(state) {
		state.isForgotPasswordVisible = true;
	},
	closeForgotPassword(state) {
		state.isForgotPasswordVisible = false;
	},
	openMobileNav(state) {
		state.isMobileNavVisible = true;
	},
	closeMobileNav(state) {
		state.isMobileNavVisible = false;
	},
	// setJoinModalPlans(state) {
	// 	state.joinModalCurrentTab = "plans";
	// },
	// setJoinModalFaq(state) {
	// 	state.joinModalCurrentTab = "faq";
	// },
	setJoinModalCurrentTab(state, payload) {
		state.joinModalCurrentTab = payload.tab;
	},
};

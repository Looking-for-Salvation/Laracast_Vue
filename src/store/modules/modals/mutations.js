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
	openSupport(state) {
		state.isSupportVisible = true;
	},
	closeSupport(state) {
		state.isSupportVisible = false;
	},
	setJoinModalCurrentTab(state, payload) {
		state.joinModalCurrentTab = payload.tab;
	},
};

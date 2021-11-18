export default {
	//* LoginModal related actions
	openLogin({ commit }) {
		commit("openLogin");
	},
	closeLogin({ commit }) {
		commit("closeLogin");
	},
	joinViaLogin({ commit }) {
		commit("closeLogin");
		commit("openJoin");
	},
	forgotPassword({ commit }) {
		commit("closeLogin");
		commit("openForgotPassword");
	},

	//* JoinModal related actions
	openJoin({ commit }) {
		commit("openJoin");
	},
	closeJoin({ commit }) {
		commit("closeJoin");
	},
	setJoinModalCurrentTab({ commit }, payload) {
		commit("setJoinModalCurrentTab", payload);
	},
	loginViaJoin({ commit }) {
		commit("closeJoin");
		commit("openLogin");
	},
	signupViaJoin({ commit }) {
		commit("closeJoin");
		commit("openSignup");
	},

	//* SignupModal related actions
	openSignup({ commit }) {
		commit("openSignup");
	},
	closeSignup({ commit }) {
		commit("closeSignup");
	},
	loginViaSignup({ commit }) {
		commit("closeSignup");
		commit("openLogin");
	},

	//* ForgotPasswordModal related actions
	closeForgotPassword({ commit }) {
		commit("closeForgotPassword");
	},
	loginViaForgotPassword({ commit }) {
		commit("closeForgotPassword");
		commit("openLogin");
	},

	//* MobileNav related actions
	openMobileNav({ commit }) {
		commit("openMobileNav");
	},
	closeMobileNav({ commit }) {
		commit("closeMobileNav");
	},
	loginViaMobileNav({ commit }) {
		commit("closeMobileNav");
		commit("openLogin");
	},
	joinViaMobileNav({ commit }) {
		commit("closeMobileNav");
		commit("openJoin");
	},

	//* SupportModal related actions
	openSupport({ commit }) {
		commit("openSupport");
	},
	closeSupport({ commit }) {
		commit("closeSupport");
	},

	//* ReviewsModal related actions
	openReviewsModal({ commit }) {
		commit("openReviewsModal");
	},
	closeReviewsModal({ commit }) {
		commit("closeReviewsModal");
	},
};

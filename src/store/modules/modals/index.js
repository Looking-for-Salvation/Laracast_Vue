import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
	namespaced: true,
	state() {
		return {
			isLoginVisible: false,
			isJoinVisible: false,
			joinModalCurrentTab: "plans",
			isSignupVisible: false,
			isForgotPasswordVisible: false,
			isMobileNavVisible: false,
			isSupportVisible: false,
			isReviewsVisible: false,
		};
	},
	mutations,
	actions,
	getters,
};

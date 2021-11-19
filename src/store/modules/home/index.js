import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

import reviewsModule from "./modules/reviews.js";
import plansModule from "./modules/plans.js";

export default {
	namespaced: true,
	modules: {
		reviews: reviewsModule,
		plans: plansModule,
	},
	state() {
		return {};
	},
	mutations,
	getters,
	actions,
};

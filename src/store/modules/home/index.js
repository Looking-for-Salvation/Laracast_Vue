import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

import reviewsModule from "./modules/reviews.js";

export default {
	namespaced: true,
	modules: {
		reviews: reviewsModule,
	},
	state() {
		return {};
	},
	mutations,
	getters,
	actions,
};

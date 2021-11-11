import { createStore } from "vuex";

import modalsModule from "./modules/modals/index.js";

const store = createStore({
	modules: {
		modals: modalsModule,
	},
});

export default store;

import { createStore } from "vuex";

import modalsModule from "./modules/modals/index.js";
import homeModule from "./modules/home/index.js";

const store = createStore({
	modules: {
		modals: modalsModule,
		home: homeModule,
	},
});

export default store;

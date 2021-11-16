import { createStore } from "vuex";

import modalsModule from "./modules/modals/index.js";
import homeModule from "./modules/home/index.js";
import carouselModule from "./modules/carousel/index.js";

const store = createStore({
	modules: {
		modals: modalsModule,
		home: homeModule,
		carousel: carouselModule,
	},
});

export default store;

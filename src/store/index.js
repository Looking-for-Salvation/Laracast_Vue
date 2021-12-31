import { createStore } from "vuex";

import modalsModule from "@/store/modules/modals/index.js";
import homeModule from "@/store/modules/home/index.js";
import carouselModule from "@/store/modules/carousel/index.js";
import topicsModule from "@/store/modules/topics/index.js";

const store = createStore({
	modules: {
		modals: modalsModule,
		home: homeModule,
		carousel: carouselModule,
		topics: topicsModule,
	},
});

export default store;

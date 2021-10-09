import { createApp } from "vue";

import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import "./assets/styles/tailwind.css";

import TheFooter from "./components/ui/TheFooter.vue";

createApp(App)
	.use(router)
	.use(store)
	.component("the-footer", TheFooter)
	.mount("#app");

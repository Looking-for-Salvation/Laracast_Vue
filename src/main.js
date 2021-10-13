import { createApp } from "vue";

import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import "./assets/styles/tailwind.css";

import TheFooter from "@/components/ui/TheFooter.vue";
import BaseModal from "@/components/ui/BaseModal.vue";

createApp(App)
	.use(router)
	.use(store)
	.component("the-footer", TheFooter)
	.component("base-modal", BaseModal)
	.mount("#app");

import { createApp } from "vue";

import App from "@/App.vue";
import router from "@/router.js";
import store from "@/store/index.js";
import "@/assets/styles/basic.css";
import "@/assets/styles/tailwind.css";

import TheHeader from "@/components/ui/TheHeader.vue";
import TheFooter from "@/components/ui/TheFooter.vue";
import BaseModal from "@/components/ui/BaseModal.vue";

createApp(App)
	.use(router)
	.use(store)
	.component("the-header", TheHeader)
	.component("the-footer", TheFooter)
	.component("base-modal", BaseModal)
	.mount("#app");

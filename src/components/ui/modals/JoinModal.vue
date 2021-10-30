<template>
	<base-modal inlineStyles="width: 1200px; max-width: 90vw;" isJoin="margin: 0px;" :isVisible="isVisible" @close="closeModal">
		<transition name="join-plans" mode="out-in">
			<join-plans v-if="isPlansVisible" @faq="faqViaPlans" @login="login" @signup="signup"></join-plans>
			<join-f-a-q v-else @plans="plansViaFAQ" @login="login" @signup="signup"></join-f-a-q>
		</transition>
	</base-modal>
</template>

<script>
import { ref } from "vue";

import JoinPlans from "./join-modal/JoinPlans.vue";
import JoinFAQ from "./join-modal/JoinFAQ.vue";

export default {
	props: {
		isVisible: {
			type: Boolean,
			required: true,
			default: false,
		},
		isFAQVisible: {
			type: Boolean,
			required: true,
			default: false,
		},
		isPlansVisible: {
			type: Boolean,
			required: true,
			default: true,
		},
	},
	components: {
		JoinPlans,
		JoinFAQ,
	},
	emits: ["close", "faq", "plans", "login"],
	setup(_, { emit }) {
		const closeModal = () => {
			emit("close");
		};

		const faqViaPlans = () => {
			emit("faq");
		};

		const plansViaFAQ = () => {
			emit("plans");
		};

		const login = () => {
			emit("login");
		};

		const signup = () => {
			emit("signup");
		};

		const isPersonal = ref(true);

		function setPlanPersonal() {
			isPersonal.value = true;
		}

		function setPlanTeams() {
			isPersonal.value = false;
		}

		return {
			closeModal,
			isPersonal,
			setPlanPersonal,
			setPlanTeams,
			faqViaPlans,
			plansViaFAQ,
			login,
			signup,
		};
	},
};
</script>

<style scoped>
.join-plans-enter-active,
.join-plans-leave-active {
	transition: all 0.1s ease-in-out;
}

.join-plans-enter-from,
.join-plans-leave-to {
	opacity: 0;
}
</style>

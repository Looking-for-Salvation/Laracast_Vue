<template>
	<base-modal inlineStyles="width: 1200px; max-width: 90vw;" isJoin="margin: 0px;" :isVisible="joinModalVisibility" @close="closeJoinModal">
		<div class="flex flex-col justify-between h-full px-4">
			<transition name="join-plans" mode="out-in">
				<join-plans v-if="joinModalCurrentTab === 'plans'"></join-plans>
				<join-f-a-q v-else-if="joinModalCurrentTab === 'faq'"></join-f-a-q>
			</transition>
			<div class="relative text-center">
				<div class="mt-10 lg:grid lg:grid-cols-4 lg:gap-6">
					<div class="mt-6 ml-auto lg:flex lg:justify-end lg:w-38 lg:mt-0">
						<transition name="join-plans" mode="out-in">
							<button
								class="inline-flex items-center text-black font-IranSans hover:text-blue-400"
								v-if="joinModalCurrentTab === 'plans'"
								@click="setJoinModalCurrentTab('faq')"
							>
								<span class="hidden p-2 bg-gray-100 md:inline-block rounded-xl">
									<svg viewBox="0 0 20 20" class="w-6" data-v-2836fdb5-s="">
										<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-2836fdb5-s="">
											<g class="fill-current" data-v-2836fdb5-s="">
												<polygon
													points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"
													data-v-2836fdb5-s=""
												></polygon>
											</g>
										</g>
									</svg>
								</span>
								<span class="md:mr-3">سوال های پرتکرار</span>
							</button>
							<button
								class="inline-flex items-center text-black font-IranSans hover:text-blue-400"
								v-else-if="joinModalCurrentTab === 'faq'"
								@click="setJoinModalCurrentTab('plans')"
							>
								<span class="hidden p-2 bg-gray-100 md:inline-block rounded-xl">
									<svg viewBox="0 0 20 20" class="w-6" data-v-2836fdb5-s="">
										<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-2836fdb5-s="">
											<g class="fill-current" data-v-2836fdb5-s="">
												<polygon
													points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"
													data-v-2836fdb5-s=""
												></polygon>
											</g>
										</g>
									</svg>
								</span>
								<span class="md:mr-3">طرح های ما</span>
							</button>
						</transition>
					</div>
					<div class="py-4 mx-auto lg:py-0 lg:col-start-2 lg:col-end-4">
						<a href="#" class="mx-auto mb-4 bg-gray-100 border-gray-100 md:ml-4 md:mb-0 font-IranSans button" @click="signup">اکانت رایگان انجمن</a>
						<router-link to="/gift-certificates" class="mx-auto bg-gray-100 border-gray-100 font-IranSans button">اکانت هدیه</router-link>
					</div>
					<div class="mr-auto lg:flex lg:w-38">
						<button class="inline-flex items-center text-black font-IranSans hover:text-blue-400" @click="login">
							<span class="md:ml-3">ورود</span>
							<span class="hidden p-2 bg-gray-100 md:inline-block rounded-xl">
								<svg viewBox="0 0 20 20" class="w-6 transform rotate-180" data-v-2836fdb5-s="">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-2836fdb5-s="">
										<g class="fill-current" data-v-2836fdb5-s="">
											<polygon
												points="12.9497475 10.7071068 13.6568542 10 8 4.34314575 6.58578644 5.75735931 10.8284271 10 6.58578644 14.2426407 8 15.6568542 12.9497475 10.7071068"
												data-v-2836fdb5-s=""
											></polygon>
										</g>
									</g>
								</svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</base-modal>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import JoinPlans from "./join-modal/JoinPlans.vue";
import JoinFAQ from "./join-modal/JoinFAQ.vue";

export default {
	components: {
		JoinPlans,
		JoinFAQ,
	},
	setup() {
		const store = useStore();

		const joinModalVisibility = computed(() => store.getters["modals/joinModalVisibility"]);
		const closeJoinModal = () => store.dispatch("modals/closeJoin");
		const login = () => store.dispatch("modals/loginViaJoin");
		const signup = () => store.dispatch("modals/signupViaJoin");

		const joinModalCurrentTab = computed(() => store.getters["modals/joinModalCurrentTab"]);
		const setJoinModalCurrentTab = (currentTab) => store.dispatch("modals/setJoinModalCurrentTab", { tab: currentTab });

		return {
			joinModalVisibility,
			closeJoinModal,
			login,
			signup,
			joinModalCurrentTab,
			setJoinModalCurrentTab,
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

.button {
	--tw-text-opacity: 1;
	border-radius: 20px;
	border-style: solid;
	border-width: 1px;
	color: rgba(34, 41, 47, var(--tw-text-opacity));
	display: block;
	font-size: 0.834rem;
	font-weight: 600;
	line-height: 1;
	max-width: 30rem;
	padding: 1.25rem 1rem;
	position: relative;
	text-align: center;
	text-transform: uppercase;
	transition-duration: 0.15s;
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

@media (min-width: 768px) {
	.button {
		display: inline-block;
		padding-bottom: 0.75rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 0.75rem;
	}
}

@media (min-width: 992px) {
	.button {
		max-width: 100%;
		padding-bottom: 0.83rem;
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 0.83rem;
		transition: background 0.3s, border-color 0.2s;
	}
}

.button:hover {
	--tw-text-opacity: 1;
	border-color: currentColor;
	color: rgba(50, 138, 241, var(--tw-text-opacity));
}
</style>

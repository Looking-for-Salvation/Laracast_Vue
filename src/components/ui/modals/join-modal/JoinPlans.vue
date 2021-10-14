<template>
	<div class="flex flex-col justify-between h-full px-4">
		<div class="flex-1 w-full px-10">
			<div class="mb-auto">
				<div>
					<div class="mx-auto">
						<div class="flex">
							<div class="w-3/4 mx-auto mt-2 mb-8 text-center">
								<div class="mb-8">
									<h1 class="mb-10 text-4xl font-light tracking-tight text-black font-IranSans">بزارید شروع کنیم</h1>
								</div>
								<div class="mx-auto plans-toggle-wrap">
									<div class="flex h-full plans-toggle">
										<div class="plans-toggle-personal" :class="{ 'plans-toggle-is-active': isPersonal }">
											<button @click="setPlanPersonal" class="block w-full h-full text-base font-IranSans">شخصی</button>
										</div>
										<div class="plans-toggle-teams" :class="{ 'plans-toggle-is-active': !isPersonal }">
											<button @click="setPlanTeams" class="block w-full h-full text-base font-IranSans">تیمی</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<personal-plans class="mt-4" v-if="isPersonal"></personal-plans>
						<teams-plans class="mt-4" v-else></teams-plans>
					</div>
				</div>
			</div>
		</div>
		<div class="relative text-center border-t border-solid border-opacity-10">
			<div class="grid grid-cols-3 gap-6 mt-10">
				<div class="flex justify-end ml-auto w-38">
					<button class="inline-flex items-center text-black font-IranSans hover:text-blue-400" @click="faq">
						<span class="inline-block p-2 bg-gray-100 rounded-xl">
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
						<span class="mr-3">سوال های پرتکرار</span>
					</button>
				</div>
				<div class="mx-auto">
					<a href="#" class="mx-auto ml-4 bg-gray-100 border-gray-100 font-IranSans button">اکانت رایگان انجمن</a>
					<router-link to="/gift-certificates" class="mx-auto bg-gray-100 border-gray-100 font-IranSans button">اکانت هدیه</router-link>
				</div>
				<div class="flex mr-auto w-38">
					<button class="inline-flex items-center text-black font-IranSans hover:text-blue-400" @click="login">
						<span class="ml-3">ورود</span>
						<span class="inline-block p-2 bg-gray-100 rounded-xl">
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
</template>

<script>
import { ref, defineAsyncComponent } from "vue";

const PersonalPlans = defineAsyncComponent(() => import("../../../home-page/home-plans/PersonalPlans.vue"));
const TeamsPlans = defineAsyncComponent(() => import("../../../home-page/home-plans/TeamsPlans.vue"));

export default {
	components: {
		PersonalPlans,
		TeamsPlans,
	},
	emits: ["faq", "login"],
	setup(_, { emit }) {
		const faq = () => {
			emit("faq");
		};

		const login = () => {
			emit("login");
		};

		const isPersonal = ref(true);

		function setPlanPersonal() {
			isPersonal.value = true;
		}

		function setPlanTeams() {
			isPersonal.value = false;
		}

		return {
			isPersonal,
			setPlanPersonal,
			setPlanTeams,
			faq,
			login,
		};
	},
};
</script>

<style scoped>
.plans-toggle-wrap {
	background: url("../../../../assets/images/home/home-plans/plans-toggle-border.svg");
	height: 40px;
	width: 221px;
}

.plans-toggle-personal {
	padding-left: 13px;
}

.plans-toggle-personal.plans-toggle-is-active {
	padding-right: 0;
}

.plans-toggle-personal,
.plans-toggle-teams {
	border-radius: 18px;
	width: 50%;
}

.plans-toggle-is-active + .plans-toggle-teams {
	padding-left: 13px;
}

.plans-toggle-is-active > button {
	color: #fff;
}

.plans-toggle-is-active {
	background-image: linear-gradient(125deg, #21c8f6, #637bff);
}

.button {
	--tw-text-opacity: 1;
	max-width: 100%;
	padding-bottom: 0.83rem;
	padding-left: 2rem;
	padding-right: 2rem;
	padding-top: 0.83rem;
	transition: background 0.3s, border-color 0.2s;
	display: inline-block;
	border-radius: 20px;
	border-style: solid;
	border-width: 1px;
	color: rgba(34, 41, 47, var(--tw-text-opacity));
	font-size: 0.834rem;
	font-weight: 600;
	line-height: 1;
	position: relative;
	text-align: center;
	text-transform: uppercase;
}

.button:hover {
	--tw-text-opacity: 1;
	border-color: currentColor;
	color: rgba(50, 138, 241, var(--tw-text-opacity));
}
</style>

<template>
	<div class="flex-1 w-full md:px-10">
		<div class="mb-auto">
			<div>
				<div class="mx-auto">
					<div class="flex">
						<div class="mt-2 mb-8 text-center mobile:flex-1 md:w-3/4 md:mx-auto">
							<div class="mb-8">
								<h1 class="mb-10 text-4xl font-light tracking-tight text-black font-IranSans md:hidden">شروع</h1>
								<h1 class="hidden mb-10 text-4xl font-light tracking-tight text-black font-IranSans md:block">بزارید شروع کنیم</h1>
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
					<team-plans class="mt-4" v-else></team-plans>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";

const PersonalPlans = defineAsyncComponent(() => import("@/components/ui/plans/PersonalPlans.vue"));
const TeamPlans = defineAsyncComponent(() => import("@/components/ui/plans/TeamPlans.vue"));

export default {
	components: {
		PersonalPlans,
		TeamPlans,
	},
	setup() {
		const isPersonal = ref(true);
		const setPlanPersonal = () => (isPersonal.value = true);
		const setPlanTeams = () => (isPersonal.value = false);

		return {
			isPersonal,
			setPlanPersonal,
			setPlanTeams,
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
</style>

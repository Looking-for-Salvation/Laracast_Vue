<template>
	<section class="home-plans md:pt-[25px] md:pb-[35px]">
		<div class="container">
			<div>
				<div class="mb-8 text-center mobile:flex-1 lg:mx-auto lg:w-3/4">
					<h3 class="mb-2 text-3xl font-light text-black font-IranSans">طرحی که به کارت میاد رو انتخاب کن</h3>
					<p class="font-light text-black text-2lg font-IranSans opacity-70 md:mx-auto md:w-4/5">
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
						سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
						درصد گذشته حال
					</p>
				</div>
				<div>
					<div class="mx-auto" style="max-width: 1500px;">
						<div class="flex">
							<div class="mb-8 text-center md:w-3/4 md:mx-auto mobile:flex-1">
								<div class="mx-auto plans-toggle-wrap">
									<div class="flex h-full plans-toggle">
										<div class="plans-toggle-personal" :class="{ 'plans-toggle-is-active': isPersonal }">
											<button @click="setPlanPersonal" class="block w-full h-full text-xs font-bold font-IranSans">شخصی</button>
										</div>
										<div class="plans-toggle-teams" :class="{ 'plans-toggle-is-active': !isPersonal }">
											<button @click="setPlanTeams" class="block w-full h-full text-xs font-bold font-IranSans">تیمی</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<personal-plans v-if="isPersonal"></personal-plans>
						<team-plans v-else></team-plans>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { ref } from "vue";

import TeamPlans from "@/components/ui/plans/TeamPlans.vue";
import PersonalPlans from "@/components/ui/plans/PersonalPlans.vue";

export default {
	components: {
		TeamPlans,
		PersonalPlans,
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
	background: url("../../assets/images/home/home-plans/plans-toggle-border.svg");
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

@media screen and (min-width: 1100px) and (max-width: 2000px) {
	.home-plans {
		background-image: url("../../assets/images/home/home-plans/plans-bg-left-wire.svg"), url("../../assets/images/home/home-plans/plans-bg-left.svg"),
			url("../../assets/images/home/home-plans/plans-bg-right.svg");
		background-position: 10%, left top, 100% 100%;
		background-repeat: no-repeat, no-repeat, no-repeat;
	}
}
</style>

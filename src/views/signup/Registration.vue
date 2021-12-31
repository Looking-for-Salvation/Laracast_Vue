<template>
	<section class="grid place-items-center lg:min-h-[calc(100vh-60px]">
		<div class="container w-full lg:h-full">
			<div class="h-full lg:flex lg:gap-x-5 xl:gap-x-14">
				<aside
					class="lg:max-w-[415px] xl:max-w-[496px] flex mb-6 lg:mb-0 w-full lg:min-h-[650px] lg:max-h-[790px] rounded-[42px] p-8 lg:p-0 md:overflow-hidden relative h-full"
					style="background-image: radial-gradient(circle at 3% 0px, rgb(91, 121, 162), rgb(46, 68, 105) 58%);"
				>
					<div class="text-white lg:mx-auto lg:mt-[93px] lg:text-center">
						<figure class="text-center md:text-right lg:text-center font-IranSans">
							<img src="@/assets/images/signup/taylor@2x.webp" alt="Taylor Otwell" class="mix-blend-luminosity" width="138" height="143" />
							<blockquote class="relative z-10 mt-4 text-lg">متاسفم، ولی اگر در لاراکست عضو نیستید، باشوازا داش!</blockquote>
							<figcaption class="block mt-2 font-light text-white text-opacity-50">
								-
								<cite>تیلور اُتول (سازنده لاراول)</cite>
							</figcaption>
						</figure>
					</div>
					<img
						src="@/assets/images/signup/laracasts-gang.svg"
						alt="Lary the Laracasts robot mascot staring at glowing laptop."
						width="496"
						height="368"
						class="hidden md:block absolute left-[-146px] top-[8px] lg:top-auto lg:left-auto lg:bottom-[-76px] lg:right-0 opacity-50 lg:opacity-100 md:opacity-25 mix-blend-luminosity lazyloaded"
					/>
				</aside>
				<main class="flex-1 h-full mx-5 md:mx-8 lg:ml-0">
					<header class="flex justify-between mb-8 gap-x-5">
						<h2 class="flex-1 text-2xl text-black border-b border-gray-200 font-IranSans">{{ headerTitle }}</h2>
						<div class="self-end hidden lg:flex gap-x-3">
							<button
								class="pb-3 text-gray-700 transition-all border-b text-2xs font-IranSans"
								:class="{ 'border-blue-400': currentTab === 'plans' }"
								@click="setCurrentTab('plans')"
							>
								جزئیات طرح
							</button>
							<button
								class="pb-3 text-gray-700 transition-all border-b text-2xs font-IranSans"
								:class="{ 'border-blue-400': currentTab === 'payment' }"
								@click="setCurrentTab('payment')"
							>
								پرداخت
							</button>
						</div>
					</header>
					<form autocomplete="off">
						<signup-plans v-show="currentTab === 'plans'" @setCurrentTab="setCurrentTab('payment')"></signup-plans>
						<signup-payment v-show="currentTab === 'payment'" @setCurrentTab="setCurrentTab('plans')"></signup-payment>
					</form>
				</main>
			</div>
		</div>
	</section>
</template>

<script>
import { ref, computed } from "vue";
import SignupPlans from "@/views/signup/registration/Plans.vue";
import SignupPayment from "@/views/signup/registration/Payment.vue";

export default {
	components: {
		SignupPlans,
		SignupPayment,
	},
	setup() {
		const currentTab = ref("plans");
		const headerTitle = computed(() => {
			let header = "";
			if (currentTab.value === "plans") header = "طرح خود را انتخاب کنید";
			if (currentTab.value === "payment") header = "نحوه پرداخت را انتخاب کنید";
			return header;
		});
		const setCurrentTab = (tab) => (currentTab.value = tab);

		return {
			currentTab,
			headerTitle,
			setCurrentTab,
		};
	},
};
</script>

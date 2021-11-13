<template>
	<teleport to="body">
		<transition name="mobile-nav">
			<div class="fixed inset-0" style="z-index: 1000;" v-show="mobileNavModalVisibility">
				<div class="absolute inset-0 py-8 text-center text-white bg-blue-500 rounded-none shadow" tabindex="-1" role="dialog">
					<section class="h-full px-0 lg:px-4">
						<button
							class="absolute z-10 flex items-center justify-center w-10 h-10 text-gray-700 transition-all bg-gray-200 hover:bg-gray-100 rounded-xl right-4 hover:text-blue-400 hover:shadow -top-2"
							@click="closeMobileNavModal"
						>
							<svg width="16" viewBox="0 0 12 16" class="fill-current">
								<path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path>
							</svg>
						</button>
						<div class="flex flex-col justify-between h-full px-4 overflow-y-auto">
							<div class="flex-1 w-full md:px-10">
								<div class="flex flex-col h-full nav-modal-wrap">
									<ul class="flex flex-col justify-around my-auto overflow-auto font-IranSans">
										<li class="mb-4">
											<a class="text-white cursor-pointer text-2lg" @click="login">ورود</a>
										</li>
										<li class="my-4">
											<a class="text-white cursor-pointer text-2lg" @click="join">ثبت نام</a>
										</li>
										<li class="my-4">
											<router-link to="/" class="text-white text-2lg">صفحه اصلی</router-link>
										</li>
										<li class="my-4">
											<router-link to="/browse" class="text-white text-2lg">موضوعات</router-link>
										</li>
										<li class="my-4">
											<router-link to="/series" class="text-white text-2lg">دوره ها</router-link>
										</li>
										<li class="my-4">
											<router-link to="/larabit" class="text-white text-2lg">لارابیت</router-link>
										</li>
										<li class="my-4">
											<router-link to="/podcast" class="text-white text-2lg">پادکست</router-link>
										</li>
										<li class="my-4">
											<router-link to="/discuss" class="text-white text-2lg">انجمن</router-link>
										</li>
										<li class="my-4">
											<router-link to="/" class="text-white text-2lg">دوره های اخیر</router-link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</transition>
	</teleport>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
	setup() {
		const store = useStore();

		const mobileNavModalVisibility = computed(() => store.getters["modals/mobileNavModalVisibility"]);
		const closeMobileNavModal = () => store.dispatch("modals/closeMobileNav");
		const login = () => store.dispatch("modals/loginViaMobileNav");
		const join = () => store.dispatch("modals/joinViaMobileNav");

		return {
			mobileNavModalVisibility,
			closeMobileNavModal,
			login,
			join,
		};
	},
};
</script>

<style scoped>
.mobile-nav-enter-active {
	transition: all 0.15s;
	transition-timing-function: ease-out;
}
.mobile-nav-leave-active {
	transition: all 0.05s;
	transition-timing-function: ease-out;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
	transform: translateX(-50vw);
}
</style>

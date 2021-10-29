<template>
	<teleport to="body">
		<transition>
			<div class="fixed inset-0" style="z-index: 1000;" v-show="isVisible">
				<div class="absolute inset-0 py-8 text-center text-white bg-blue-500 rounded-none shadow" tabindex="-1" role="dialog">
					<section class="h-full px-0 lg:px-4">
						<button
							class="absolute z-10 flex items-center justify-center w-10 h-10 text-gray-700 transition-all bg-gray-200 hover:bg-gray-100 rounded-xl right-4 hover:text-blue-400 hover:shadow -top-2"
							@click="close"
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
											<router-link to="/" class="text-white text-2lg">ورود</router-link>
										</li>
										<li class="my-4">
											<router-link to="/" class="text-white text-2lg">ثبت نام</router-link>
										</li>
										<li class="my-4">
											<router-link to="/" class="text-white text-2lg">صفحه اصلی</router-link>
										</li>
										<li class="my-4">
											<router-link to="/" class="text-white text-2lg">موضوعات</router-link>
										</li>
										<li class="my-4">
											<router-link to="/" class="text-white text-2lg">دوره ها</router-link>
										</li>
										<li class="my-4">
											<router-link to="/" class="text-white text-2lg">لارابیت</router-link>
										</li>
										<li class="my-4">
											<router-link to="/" class="text-white text-2lg">پادکست</router-link>
										</li>
										<li class="my-4">
											<router-link to="/" class="text-white text-2lg">انجمن</router-link>
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
export default {
	props: {
		isVisible: {
			type: Boolean,
			required: true,
		},
	},
	setup(_, { emit }) {
		const close = () => {
			emit("close");
		};

		return {
			close,
		};
	},
};
</script>

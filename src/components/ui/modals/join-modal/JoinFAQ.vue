<template>
	<div class="flex flex-col justify-between h-full px-4">
		<div class="flex-1 w-full md:px-10">
			<div class="mb-auto">
				<div class="mx-auto">
					<div class="mx-auto mt-2 mb-16 text-center text-black md:w-3/4">
						<h1 class="mb-8 text-2xl font-light tracking-tight md:text-4xl font-IranSans">سوال های پرتکرار</h1>
					</div>
					<div class="container flex flex-wrap mx-auto mb-10 text-black lg:px-10">
						<div class="mb-12 lg:w-1/2">
							<div class="lg:pl-10">
								<h4 class="mb-3 text-xl font-IranSans">لورم ایپسوم متن ساختگی با تولید</h4>
								<p class="leading-loose lg:pl-8 font-IranSans text-xm">
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
									ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
								</p>
							</div>
						</div>
						<div class="mb-12 lg:w-1/2">
							<div class="lg:pr-10">
								<h4 class="mb-3 text-xl font-IranSans">لورم ایپسوم متن ساختگی با تولید</h4>
								<p class="leading-loose lg:pr-8 font-IranSans text-xm">
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
									ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
								</p>
							</div>
						</div>
						<div class="mb-12 lg:w-1/2">
							<div class="lg:pl-10">
								<h4 class="mb-3 text-xl font-IranSans">لورم ایپسوم متن ساختگی با تولید</h4>
								<p class="leading-loose lg:pl-8 font-IranSans text-xm">
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
									ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
								</p>
							</div>
						</div>

						<div class="mb-12 lg:w-1/2">
							<div class="lg:pr-10">
								<h4 class="mb-3 text-xl font-IranSans">لورم ایپسوم متن ساختگی با تولید</h4>
								<p class="leading-loose lg:pr-8 font-IranSans text-xm">
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
									ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="relative text-center border-t border-solid border-opacity-10">
			<div class="mt-10 lg:flex lg:justify-between lg:items-center">
				<div class="mt-6 lg:flex lg:justify-end lg:mt-0 lg:w-38">
					<button class="inline-flex items-center text-black font-IranSans hover:text-blue-400" @click="plansViaFAQ">
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
				</div>
				<!-- <div class="mx-auto">
					<a href="#" class="mx-auto ml-4 bg-gray-100 border-gray-100 font-IranSans button" @click="signup">اکانت رایگان انجمن</a>
					<router-link to="/gift-certificates" class="mx-auto bg-gray-100 border-gray-100 font-IranSans button">اکانت هدیه</router-link>
				</div> -->
				<div class="lg:flex lg:w-38">
					<button class="inline-flex items-center text-black font-IranSans hover:text-blue-400" @click="loginViaJoin">
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
</template>

<script>
export default {
	emits: ["plans", "login", "signup"],
	setup(_, { emit }) {
		const plansViaFAQ = () => {
			emit("plans");
		};

		const loginViaJoin = () => {
			emit("login");
		};

		const signup = () => {
			emit("signup");
		};
		return {
			plansViaFAQ,
			loginViaJoin,
			signup,
		};
	},
};
</script>

<style scoped>
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

<template>
	<div class="h-full p-8 lg:p-0">
		<div class="w-full h-full lg:grid-cols-2 xl:grid-cols-6 lg:grid lg:absolute lg:top-0">
			<div class="h-full mx-auto text-center xl:col-start-2 xl:col-end-4 lg:w-3/4 lg:pr-8">
				<div class="top-0 z-10 flex flex-col justify-center h-full font-IranSans">
					<div class="px-8 py-4 mt-16 bg-white hello max-w-[650px] lg:mx-0 mx-auto lg:shadow-sm lg:py-8 lg:px-10 rounded-xl">
						<h1 class="mb-1 text-3xl tracking-wide text-black">404</h1>
						<p class="mb-8 text-2xl leading-normal text-black">صفحه مورد نظر پیدا نشد.</p>
						<p class="mb-8 text-lg leading-normal text-black opacity-50">اگر نیاز به کمک دارید با پشتیبانی تماس بگیرید.</p>
						<div class="flex flex-col max-w-xs mx-auto mt-4 lg:max-w-none lg:flex-row lg:justify-center lg:mx-0">
							<router-link to="/join" class="mb-4 lg:mb-0 lg:ml-4 button button-blue">ثبت نام</router-link>
							<router-link to="/" class="text-black bg-gray-200 border border-gray-200 border-solid button hover:border-blue-400 hover:text-blue-400"
								>صفحه اصلی</router-link
							>
						</div>
					</div>
				</div>
			</div>
			<lottie-animation
				path="./404.json"
				:loop="true"
				:autoplay="true"
				class="hidden h-full animation xl:col-start-4 xl:col-end-6 lg:block"
			></lottie-animation>
		</div>
	</div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
	components: {
		LottieAnimation,
	},
	setup() {
		document.body.className = "not-found";
	},
};
</script>

<style scoped>
.button {
	border-radius: 20px;
	border-style: solid;
	border-width: 1px;
	display: block;
	font-size: 0.834rem;
	font-weight: 600;
	padding: 1.25rem 1rem;
	line-height: 1;
	position: relative;
	text-align: center;
	transition-duration: 0.2s;
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.button-blue {
	--tw-border-opacity: 1;
	--tw-bg-opacity: 1;
	--tw-text-opacity: 1;
	background-color: rgba(50, 138, 241, var(--tw-bg-opacity));
	border-color: rgba(50, 138, 241, var(--tw-border-opacity));
	color: rgba(255, 255, 255, var(--tw-text-opacity));
}

.button-blue:hover {
	--tw-border-opacity: 1;
	--tw-bg-opacity: 1;
	--tw-text-opacity: 1;
	background-color: rgba(39, 121, 189, var(--tw-bg-opacity));
	border-color: rgba(50, 138, 241, var(--tw-border-opacity));
	box-shadow: 0 0 10px rgb(0 0 0 / 25%);
	color: rgba(255, 255, 255, var(--tw-text-opacity));
}

.animation {
	width: 500px;
}

@media (min-width: 768px) {
	.button {
		display: inline-block;
		padding-bottom: 0.75rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 0.75rem;
	}

	.hello {
		min-width: 350px;
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

	.animation {
		width: 600px;
	}
}
</style>

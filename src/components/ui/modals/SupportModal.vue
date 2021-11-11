<template>
	<base-modal inlineStyles="max-width: 1200px; max-height: 95vh;" :isVisible="supportModalVisibility" @close="closeSupportModal">
		<div class="flex flex-col justify-between h-full px-4">
			<div class="flex-1 w-full md:px-10">
				<div class="flex items-center h-full md:py-8">
					<div class="container w-full mx-auto">
						<div class="max-w-xl mx-auto">
							<h1 class="mt-2 mb-10 text-3xl font-light tracking-tight text-center text-black font-IranSans">ارسال تیکت</h1>
							<div class="mt-10">
								<form @submit.prevent autocomplete="off" class="p-8 md:mx-auto">
									<div class="control">
										<input type="text" name="name" class="input is-minimal font-IranSans" placeholder="نام و نام خانوادگی" />
									</div>
									<div class="control">
										<input type="text" name="email" class="input is-minimal font-IranSans" placeholder="ایمیل خود را وارد کنید" />
									</div>
									<div class="control">
										<textarea name="question" class="textarea is-minimal font-IranSans min-h-[100px]" placeholder="سوال خود را مطرح کنید"></textarea>
									</div>
									<div class="control">
										<input type="text" name="verification" id="verification" class="input is-minimal font-IranSans" placeholder="جمع 1 + 5 ؟" />
									</div>
									<div class="flex justify-end mb-10 control">
										<a class="ml-4 bg-gray-100 border-gray-100 cursor-pointer button font-IranSans">انصراف</a>
										<button class="bg-blue-400 button submit-button font-IranSans">ارسال</button>
									</div>
									<p class="max-w-xl pt-10 text-sm text-black font-IranSans text-opacity-60">
										اگر مشکل برنامه نویسی دارید مشکل خود را
										<router-link to="/discuss" class="text-sm text-blue-400 font-IranSans">در انجمن مطرح کنید.</router-link>
										لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
										ستون و سطرآنچنان که لازم است.
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</base-modal>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
	setup() {
		const store = useStore();

		const supportModalVisibility = computed(() => store.getters["modals/supportModalVisibility"]);
		const closeSupportModal = () => store.dispatch("modals/closeSupport");

		return {
			supportModalVisibility,
			closeSupportModal,
		};
	},
};
</script>

<style scoped>
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

.button.submit-button {
	--tw-border-opacity: 1;
	--tw-bg-opacity: 1;
	--tw-text-opacity: 1;
	background-color: rgba(50, 138, 241, var(--tw-bg-opacity));
	border-color: rgba(50, 138, 241, var(--tw-border-opacity));
	color: rgba(255, 255, 255, var(--tw-text-opacity));
}

.button.submit-button:hover {
	--tw-border-opacity: 1;
	--tw-bg-opacity: 1;
	--tw-text-opacity: 1;
	background-color: rgba(39, 121, 189, var(--tw-bg-opacity));
	border-color: rgba(50, 138, 241, var(--tw-border-opacity));
	box-shadow: 0 0 10px rgb(0 0 0 / 25%);
	color: rgba(255, 255, 255, var(--tw-text-opacity));
}

input::placeholder,
textarea::placeholder {
	font-size: 0.9rem;
}
</style>

<template>
	<base-modal inlineStyles="height: 600px; max-width: 600px;" :isVisible="forgotPasswordModalVisibility" @close="closeForgotPassword">
		<div class="flex flex-col justify-between h-full px-4">
			<div class="flex-1 w-full md:px-10">
				<div class="flex items-center h-full md:py-8">
					<div class="container w-full mx-auto">
						<div class="max-w-xs mx-auto">
							<div class="mt-8">
								<h1 class="mb-12 text-3xl font-light tracking-tight text-center text-black font-IranSans">فراموشی رمزعبور</h1>
								<form @submit.prevent class="pt-10">
									<div class="control">
										<label class="block text-xs text-gray-600 font-IranSans" for="email">ایمیل</label>
										<div class="relative flex items-center border-b border-gray-200 border-solid">
											<input
												type="text"
												name="email"
												class="text-base font-IranSans input is-minimal"
												autocomplete="username"
												placeholder="ایمیل خود را وارد کنید"
												style="border: none;"
											/>
											<div class="absolute left-0 flex items-center justify-center w-4 h-4 p-1 mx-auto -mt-px bg-gray-300 rounded-full">
												<svg width="10" height="8" viewBox="0 0 10 8">
													<path
														fill="#FFF"
														fill-rule="evenodd"
														stroke="#FFF"
														stroke-width=".728"
														d="M3.533 5.646l-2.199-2.19c-.195-.194-.488-.194-.684 0-.195.195-.195.487 0 .682l2.883 2.87L9.055 1.51c.195-.194.195-.487 0-.681-.196-.195-.49-.195-.685 0L3.533 5.646z"
													></path>
												</svg>
											</div>
										</div>
									</div>
									<div class="mt-10 text-center control">
										<button class="w-full text-base form-button font-IranSans" type="submit">ریست</button>
										<button class="block mx-auto mt-4 text-base text-gray-700 font-IranSans hover:underline" @click="login">ورود</button>
									</div>
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

		const forgotPasswordModalVisibility = computed(() => store.getters["modals/forgotPasswordModalVisibility"]);
		const closeForgotPassword = () => store.dispatch("modals/closeForgotPassword");
		const login = () => store.dispatch("modals/loginViaForgotPassword");

		return {
			forgotPasswordModalVisibility,
			closeForgotPassword,
			login,
		};
	},
};
</script>

<style scoped>
.form-button {
	--tw-border-opacity: 1;
	--tw-bg-opacity: 1;
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
	background-color: rgba(50, 138, 241, var(--tw-bg-opacity));
	border-color: rgba(50, 138, 241, var(--tw-border-opacity));
	color: rgba(255, 255, 255, var(--tw-text-opacity));
}

@media (min-width: 768px) {
	.form-button {
		display: inline-block;
		padding-bottom: 0.75rem;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 0.75rem;
	}
}

@media (min-width: 992px) {
	.form-button {
		max-width: 100%;
		padding-bottom: 0.83rem;
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 0.83rem;
		transition: background 0.3s, border-color 0.2s;
	}
}

.form-button:hover {
	--tw-border-opacity: 1;
	--tw-bg-opacity: 1;
	--tw-text-opacity: 1;
	background-color: rgba(39, 121, 189, var(--tw-bg-opacity));
	border-color: rgba(50, 138, 241, var(--tw-border-opacity));
	box-shadow: 0 0 10px rgb(0 0 0 / 25%);
	color: rgba(255, 255, 255, var(--tw-text-opacity));
}

input::placeholder {
	font-size: 0.9rem;
}
</style>

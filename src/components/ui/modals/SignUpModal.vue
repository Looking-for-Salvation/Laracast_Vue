<template>
	<base-modal inlineStyles="max-width: 600px;" :isVisible="signupModalVisibility" @close="closeSignupModal">
		<div class="flex flex-col justify-between h-full px-4">
			<div class="flex-1 w-full md:px-10">
				<div class="flex items-center h-full md:py-8">
					<div class="container w-full mx-auto">
						<div class="max-w-xs mx-auto">
							<header class="flex items-center justify-center text-center">
								<h1 class="mb-12 text-3xl font-light tracking-tight text-center text-black font-IranSans">ثبت نام</h1>
							</header>
							<div class="mt-8">
								<form @submit.prevent>
									<div class="control">
										<label class="block text-xs text-gray-600 font-IranSans" for="username">نام کاربری</label>
										<div class="relative flex items-center border-b border-gray-200 border-solid">
											<input
												type="text"
												name="username"
												class="text-base font-IranSans input is-minimal"
												autocomplete="username"
												placeholder="نام کاربری خود را وارد کنید"
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
									<div class="control">
										<label class="block text-xs text-gray-600 font-IranSans" for="email">رمزعبور</label>
										<div class="relative flex items-center border-b border-gray-200 border-solid">
											<input
												type="password"
												name="email"
												class="text-base font-IranSans input is-minimal"
												autocomplete="username"
												placeholder="رمزعبور خود را وارد کنید"
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
									<div class="mt-10 text-center">
										<button class="w-full text-base login-form-button md:max-w-2/3 font-IranSans" type="submit">ثبت نام</button>
										<button class="block mx-auto mt-8 text-base text-gray-700 font-IranSans hover:underline" @click="login">اکانت دارید؟</button>
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

		const signupModalVisibility = computed(() => store.getters["modals/signupModalVisibility"]);
		const closeSignupModal = () => store.dispatch("modals/closeSignup");
		const login = () => store.dispatch("modals/loginViaSignup");

		return {
			signupModalVisibility,
			closeSignupModal,
			login,
		};
	},
};
</script>

<style scoped>
.login-form-button {
	--tw-border-opacity: 1;
	--tw-bg-opacity: 1;
	--tw-text-opacity: 1;
	background-color: rgba(50, 138, 241, var(--tw-bg-opacity));
	border-color: rgba(50, 138, 241, var(--tw-border-opacity));
	color: rgba(255, 255, 255, var(--tw-text-opacity));
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
	position: relative;
	text-align: center;
	text-transform: uppercase;
	font-weight: 600;
	line-height: 1;
}

.login-form-button:hover {
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

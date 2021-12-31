<template>
	<div>
		<fieldset class="lg:max-w-[350px]">
			<legend class="px-0 mb-4 text-xs font-IranSans">نحوه پرداخت</legend>
			<div></div>
			<div></div>
		</fieldset>
		<fieldset class="lg:max-w-[350px] mt-10">
			<legend class="px-0 mb-4 text-xs font-IranSans">مشخصات خود را وارد کنید</legend>
			<div class="control">
				<label for="username" class="block text-gray-400 text-2xs font-IranSans">نام کاربری</label>
				<div class="relative flex items-center border-b border-gray-200 border-solid font-IranSans">
					<input type="text" id="username" class="text-sm input is-minimal" style="border: none;" required placeholder="نام کاربری خود را وارد کنید" />
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
				<label for="email" class="block text-gray-400 text-2xs font-IranSans">ایمیل</label>
				<div class="relative flex items-center border-b border-gray-200 border-solid font-IranSans">
					<input type="email" id="email" class="text-sm input is-minimal" style="border: none;" required placeholder="ایمیل خود را وارد کنید" />
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
				<label for="password" class="block text-gray-400 text-2xs font-IranSans">رمز عبور</label>
				<div class="relative flex items-center border-b border-gray-200 border-solid font-IranSans">
					<input type="password" id="password" class="text-sm input is-minimal" style="border: none;" required placeholder="رمز عبور خود را وارد کنید" />
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
		</fieldset>
		<div class="control mt-10 md:flex md:space-x-4 max-w-[500px] font-IranSans mx-auto md:mx-0">
			<div class="ml-4">
				<button type="submit" class="button blue-button min-w-[200px] text-[14px] md:w-auto w-full max-w-none md:flex-1">ثبت نام</button>
			</div>
			<div class="mt-4 md:mt-0">
				<button @click="setCurrentTab" type="button" class="button gray-button text-[14px] min-w-[200px] w-full max-w-none md:flex-1 md:w-auto">
					تغییر طرح
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	emits: ["setCurrentTab"],
	setup(_, { emit }) {
		const setCurrentTab = () => emit("setCurrentTab");

		return { setCurrentTab };
	},
};
</script>

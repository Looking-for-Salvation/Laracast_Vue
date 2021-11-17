<template>
	<teleport to="#app">
		<transition name="modal">
			<div class="fixed inset-0 modal" id="modal" v-show="isVisible">
				<transition name="modal-overlay">
					<div class="absolute inset-0 w-full h-screen bg-black modal-overlay bg-opacity-70" v-if="isVisible" @click="close"></div>
				</transition>
				<transition name="modal-inner">
					<div tabindex="-1" class="absolute inset-0 flex items-center justify-center m-auto modal-inner" :style="inlineStyles" v-show="isVisible">
						<div
							class="relative flex flex-col w-full px-6 m-4 overflow-auto bg-white md:m-0 md:mx-auto modal-content rounded-2xl max-h-90vh py-9"
							:style="[inlineStyles, isJoin]"
						>
							<section class="h-full p-0 lg:px-4" style="padding: 0px;">
								<button
									class="absolute flex items-center justify-center w-10 h-10 text-gray-700 transition-all duration-200 transform bg-gray-100 right-4 rounded-xl hover:text-blue-400 hover:shadow-sm -translate-y-0 md:-translate-y-1/2"
									@click="close"
								>
									<svg width="16" viewBox="0 0 12 16" class="fill-current">
										<path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path>
									</svg>
								</button>
								<slot></slot>
							</section>
						</div>
					</div>
				</transition>
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
			default: false,
		},
		inlineStyles: {
			type: String,
			required: true,
		},
		isJoin: {
			type: String,
			required: false,
			default: "",
		},
	},
	emits: ["close"],
	setup(_, { emit }) {
		const close = () => emit("close");

		return {
			close,
		};
	},
};
</script>

<style scoped>
.modal {
	z-index: 1000;
}

.modal-enter-active {
	transition: all 0.25s ease-out;
}
.modal-leave-active {
	transition: all 0.15s ease-out;
}

.modal-enter-from,
.modal-leave-to {
	opacity: 1;
}

.modal-inner-enter-active {
	transition: all 0.25s;
	transition-timing-function: ease-out;
}
.modal-inner-leave-active {
	transition: all 0.15s;
	transition-timing-function: ease-out;
}

.modal-inner-enter-from,
.modal-inner-leave-to {
	transform: translateY(80vh);
	z-index: 300;
}

.modal-overlay-enter-active {
	transition: all 0.25s ease-in-out;
}
.modal-overlay-leave-active {
	transition: all 0.15s ease-in-out;
}

.modal-overlay-enter-from,
.modal-overlay-leave-to {
	opacity: 0;
}

/* .modal-overlay-enter-to,
.modal-overlay-leave-from {
	z-index: 100;
} */
</style>

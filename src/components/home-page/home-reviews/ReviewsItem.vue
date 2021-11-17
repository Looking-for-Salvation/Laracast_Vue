<template>
	<div class="mx-1 my-2 text-center lg:m-2" @mouseenter="mouseEntered" @mouseleave="mouseLeft">
		<a href="#" class="block" target="_blank" rel="noreferrer">
			<img
				:src="item.imgSource"
				width="48"
				height="48"
				class="w-12 border-2 border-solid rounded-full"
				:class="{ 'border-transparent': !isHovered, 'border-blue-400': isHovered }"
			/>
		</a>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	setup(props, context) {
		const isHovered = ref(false);

		function mouseEntered() {
			isHovered.value = true;

			context.emit("mouse-enter", props.id);
		}

		function mouseLeft() {
			isHovered.value = false;
		}

		return {
			isHovered,
			mouseEntered,
			mouseLeft,
		};
	},
};
</script>

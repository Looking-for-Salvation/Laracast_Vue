<template>
	<div class="mx-1 my-2 text-center lg:m-2" @mouseenter="mouseEntered" @mouseleave="mouseLeft">
		<a href="#" class="block" target="_blank" rel="noreferrer">
			<img
				:src="item.img"
				width="48"
				height="48"
				class="w-12 border-2 border-solid rounded-full"
				:class="{ 'border-transparent': !isHovered || !item.selected, 'border-blue-400': isHovered || item.selected }"
			/>
		</a>
	</div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	setup(props) {
		const store = useStore();

		const isHovered = ref(false);

		const mouseEntered = () => {
			isHovered.value = true;
			store.dispatch("home/reviews/setSelected", { id: props.item.reviewId });
		};

		const mouseLeft = () => (isHovered.value = false);

		return {
			isHovered,
			mouseEntered,
			mouseLeft,
		};
	},
};
</script>

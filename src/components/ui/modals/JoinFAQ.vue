<template>
	<base-modal inlineStyles="width: 1200px; max-width: 90vw;" :isVisible="isVisible" @close="closeModal"></base-modal>
</template>

<script>
export default {
	props: {
		isVisible: {
			type: Boolean,
		},
	},
	emits: ["close"],
	setup(_, { emit }) {
		const closeModal = () => {
			emit("close");
		};

		return {
			closeModal,
		};
	},
};
</script>

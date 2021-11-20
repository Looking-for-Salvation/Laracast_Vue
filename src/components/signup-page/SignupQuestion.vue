<template>
	<div class="signup-faq-item bg-[#73a3e4] bg-opacity-10 p-6 rounded-2xl">
		<header>
			<h4 class="flex items-center gap-3 mb-3 text-xl font-IranSans">
				<img :src="item.img" :alt="item.title" />
				{{ item.title }}
			</h4>
		</header>
		<p class="generic-content leading-loose text-[14px] font-IranSans mt-4" v-html="item.question"></p>
	</div>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
};
</script>

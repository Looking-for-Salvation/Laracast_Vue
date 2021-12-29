<template>
	<div
		class="flex justify-center mx-auto mb-6 text-center lg:relative w-60"
		:class="{ 'left-n100': item.itemOrder === 'top', 'left-0': item.itemOrder === 'middle', 'left-p100': item.itemOrder === 'bottom' }"
	>
		<router-link :to="item.url" class="flex flex-col justify-between w-full h-20 px-4 py-1 mx-2 bg-white cursor-pointer card">
			<div class="flex items-center flex-1">
				<div class="flex justify-center ml-4">
					<img height="50" width="50" :src="item.imgSource" :alt="item.name" />
				</div>
				<div>
					<h2 class="text-sm text-black font-IranSans">{{ item.name }}</h2>
					<div class="text-gray-700 text-2xs font-IranSans">
						{{ `${item.seriesCount} دوره` }}
						<span class="relative inline-block px-1 text-xs" style="top: 1px;"> • </span>
						{{ `${item.videosCount} ویدیو` }}
					</div>
				</div>
			</div>
		</router-link>
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

<style scoped>
.left-n100 {
	left: -100px;
}

.left-0 {
	left: 0;
}

.left-p100 {
	left: 100px;
}
</style>

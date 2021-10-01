<template>
	<div
		class="relative flex justify-center mb-6 text-center w-60"
		:class="{ 'left-n100': order === 'top', 'left-0': order === 'middle', 'left-p100': order === 'bottom' }"
	>
		<router-link :to="route" class="flex flex-col justify-between w-full h-20 px-4 py-1 mx-2 bg-white cursor-pointer card">
			<div class="flex items-center flex-1">
				<div class="flex justify-center ml-4">
					<img height="50" width="50" :src="imgSource" :alt="name" />
				</div>
				<div>
					<h2 class="text-sm text-black font-IranSans">{{ name }}</h2>
					<div class="text-gray-700 text-2xs font-IranSans">
						{{ `${seriesCount} دوره` }}
						<span class="relative inline-block px-1 text-xs" style="top: 1px;"> • </span>
						{{ `${videosCount} ویدیو` }}
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
		imgSource: {
			type: String,
			required: true,
		},
		route: {
			type: String,
			required: true,
		},
		seriesCount: {
			type: Number,
			required: true,
		},
		videosCount: {
			type: Number,
			required: true,
		},
		order: {
			type: String,
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

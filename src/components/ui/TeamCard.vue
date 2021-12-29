<template>
	<div class="mx-auto max-w-[500px]">
		<div class="flex flex-col justify-between w-full h-full px-8 py-4 overflow-visible card">
			<header class="flex flex-col items-center mb-4" style="margin-top: -40px;">
				<img :src="member.img" :alt="member.name" height="130" width="130" class="mb-4 transform rounded-full" />
				<h4 class="mb-px text-xl text-black font-IranSans">{{ member.name }}</h4>
				<h5 class="text-black text-opacity-30 font-IranSans">{{ member.role }}</h5>
			</header>
			<div class="mb-8 text-base text-gray-700 font-IranSans" style="min-height: 120px;">{{ member.biography }}</div>
			<footer class="flex items-center justify-between">
				<p class="text-base text-black font-IranSans text-opacity-80">عرض ارادت در</p>
				<div class="flex">
					<a :href="member.twitter" aria-label="Twitter">
						<svg width="32" height="32" viewBox="0 0 36 36" class="text-blue-400 transition-all hover:text-blue-500" role="img">
							<path
								class="fill-current"
								fill-rule="evenodd"
								d="M18 0C8.075 0 0 8.075 0 18c0 9.924 8.075 18 18 18 9.924 0 18-8.076 18-18 0-9.925-8.074-18-18-18zm8.03 13.88c.008.179.012.358.012.538 0 5.475-4.166 11.786-11.788 11.786-2.34 0-4.518-.684-6.351-1.86.324.039.654.058.988.058 1.942 0 3.728-.663 5.146-1.773-1.813-.034-3.343-1.231-3.87-2.878.252.048.512.075.778.075.378 0 .745-.05 1.092-.145-1.895-.38-3.323-2.054-3.323-4.062l.001-.052c.558.31 1.197.496 1.876.517-1.111-.741-1.843-2.01-1.843-3.447 0-.76.204-1.472.56-2.084 2.043 2.507 5.097 4.156 8.54 4.33-.071-.304-.107-.62-.107-.945 0-2.287 1.855-4.143 4.142-4.143 1.192 0 2.268.504 3.025 1.308.944-.185 1.829-.529 2.631-1.005-.311.968-.966 1.779-1.824 2.292.84-.1 1.64-.322 2.38-.652-.553.83-1.255 1.56-2.065 2.142z"
							></path>
						</svg>
					</a>
				</div>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		member: {
			type: Object,
			required: true,
		},
	},
};
</script>

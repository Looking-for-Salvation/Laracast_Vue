<template>
	<section class="hidden md:block p-0 md:pt-[20px] pb-[35px] reviews">
		<div>
			<div class="flex justify-center mb-8 text-center lg:mx-auto lg:w-2/3 xl:w-1/2">
				<div class="container">
					<h3 class="mx-auto mb-3 text-3xl font-light text-black font-IranSans">لاراکست توسط هزاران هزار برنامه نویس استفاده می شه!</h3>
				</div>
			</div>
			<reviews-container></reviews-container>
		</div>
	</section>
</template>

<script>
import ReviewsContainer from "./reviews/Container.vue";

export default {
	components: {
		ReviewsContainer,
	},
};
</script>

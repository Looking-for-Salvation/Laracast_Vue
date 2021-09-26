<template>
	<section class="home-skills pb-9">
		<div class="flex flex-col items-center justify-center mb-9">
			<div class="flex text-center rounded-lg mb-14">
				<div class="px-10 home-skills-stat_item">
					<div class="h-8 mb-2.5">
						<img src="../../assets/images/home/series-available-icon.svg" alt="Hours of Learning" />
					</div>
					<div class="mb-0.5 text-xl text-black font-IranSans">
						<span>&#1777;&#1780;&#1785;</span>
					</div>
					<div class="text-xs tracking-wider opacity-70 font-IranSans">
						دوره آموزشی
					</div>
				</div>
				<div class="relative px-10 home-skills-stat_item">
					<div class="h-8 mb-2.5">
						<img src="../../assets/images/home/lessons-available-icon.svg" alt="Hours of Learning" />
					</div>
					<div class="mb-0.5 text-xl text-black font-IranSans">
						<span>&#1777;&#1785;&#1778;&#1782;</span>
					</div>
					<div class="text-xs tracking-wider opacity-70 font-IranSans">
						جلسه ویدویی
					</div>
				</div>
				<div class="px-10 home-skills-stat_item">
					<div class="h-8 mb-2.5">
						<img src="../../assets/images/home/hours-of-learning-icon.svg" alt="Hours of Learning" />
					</div>
					<div class="mb-0.5 text-xl text-black font-IranSans">
						<span>&#1779;&#1778;&#1782;</span>
					</div>
					<div class="text-xs tracking-wider opacity-70 font-IranSans">
						ساعت آموزش
					</div>
				</div>
			</div>
			<div class="py-5 mb-4 font-IranSans">
				<h3 class="block mx-auto mb-4 text-3xl font-light text-center text-black">مختصرترین ویدیو های آموزشی برای برنامه نویسان وب</h3>
			</div>
			<skill-cards></skill-cards>
		</div>
	</section>
</template>

<script>
import SkillCards from "./home-stats/SkillCards.vue";

export default {
	components: {
		SkillCards,
	},
};
</script>

<style scoped>
.home-skills-stat_item:nth-child(2)::after,
.home-skills-stat_item:nth-child(2)::before {
	background-color: transparent;
	border-image-slice: 1;
	border-image-source: linear-gradient(0deg, transparent, #000 48%, transparent);
	border-style: solid;
	border-width: 2px;
	content: "";
	height: 67px;
	-o-object-fit: contain;
	object-fit: contain;
	opacity: 0.07;
	position: absolute;
	top: 15px;
	width: 1px;
}

.home-skills-stat_item:nth-child(2)::after {
	right: 0;
}

.home-skills-stat_item:nth-child(2)::before {
	left: 0;
}
</style>

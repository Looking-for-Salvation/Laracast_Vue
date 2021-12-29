<template>
	<section class="home-skills pt-6 md:pb-[35px]">
		<div class="container">
			<div class="flex items-center mb-6 md:justify-center lg:mb-9">
				<div class="home-skills-stat_item text-center card mx-3 flex-1 lg:flex-none w-auto lg:w-[150px] h-auto rounded-2xl p-4">
					<div class="mb-1" style="height: 30px;">
						<img src="../../assets/images/home/series-available-icon.svg" alt="Hours of Learning" />
					</div>
					<div class="mb-1 text-xl text-black font-IranSans">
						<span>&#1777;&#1780;&#1785;</span>
					</div>
					<div class="text-xs tracking-wider text-gray-500 font-IranSans">دوره <span class="hidden md:inline">آموزشی</span></div>
				</div>
				<div class="home-skills-stat_item text-center card mx-3 flex-1 lg:flex-none w-auto lg:w-[150px] h-auto rounded-2xl p-4">
					<div class="mb-1" style="height: 30px;">
						<img src="../../assets/images/home/lessons-available-icon.svg" alt="Hours of Learning" />
					</div>
					<div class="mb-1 text-xl text-black font-IranSans">
						<span>&#1777;&#1785;&#1778;&#1782;</span>
					</div>
					<div class="text-xs tracking-wider text-gray-500 font-IranSans">جلسه <span class="hidden md:inline">ویدویی</span></div>
				</div>
				<div class="home-skills-stat_item text-center card mx-3 flex-1 lg:flex-none w-auto lg:w-[150px] h-auto rounded-2xl p-4">
					<div class="mb-1" style="height: 30px;">
						<img src="../../assets/images/home/hours-of-learning-icon.svg" alt="Hours of Learning" />
					</div>
					<div class="mb-1 text-xl text-black font-IranSans">
						<span>&#1779;&#1778;&#1782;</span>
					</div>
					<div class="text-xs tracking-wider text-gray-500 font-IranSans">ساعت <span class="hidden md:inline">آموزش</span></div>
				</div>
			</div>
			<div class="py-5 mb-4 font-IranSans">
				<header class="container pb-4 mx-auto mb-4 text-center text-black md:hidden">
					<h3 class="mb-2 text-3xl font-light text-black font-IranSans">ویدیو های مختصر برای برنامه نویسان</h3>
				</header>
				<header class="container hidden pb-4 mx-auto mb-4 text-center text-black md:block">
					<h3 class="mb-2 text-3xl font-light text-black font-IranSans">مختصرترین ویدیو های آموزشی برای برنامه نویسان وب</h3>
				</header>
			</div>
			<div class="lg:flex xl:justify-around xl:mx-8">
				<skill-card v-for="skill in skills" :key="skill.type" :skill="skill"></skill-card>
			</div>
		</div>
	</section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import SkillCard from "@/components/ui/SkillCard.vue";

export default {
	components: {
		SkillCard,
	},
	setup() {
		const store = useStore();
		const skills = computed(() => store.getters["home/skills/skills"]);

		return { skills };
	},
};
</script>

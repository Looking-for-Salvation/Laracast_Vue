<template>
	<div class="lg:flex xl:justify-around xl:mx-8">
		<skill-card
			v-for="skill in skills"
			:key="skill.type"
			:skillType="skill.type"
			:skillSeriesCount="skill.seriesCount"
			:skillLessonsCount="skill.lessonsCount"
			:skillImgSource="skill.imgSource"
			:skillRoute="skill.route"
		></skill-card>
	</div>
</template>

<script>
import SkillCard from "./SkillCard.vue";
import frameworksImage from "../../../assets/images/home/frameworks-default.svg";
import languagesImages from "../../../assets/images/home/languages-default.svg";
import techniquesImage from "../../../assets/images/home/techniques-default.svg";
import testingImages from "../../../assets/images/home/testing-default.svg";
import toolingImages from "../../../assets/images/home/tooling-default.svg";

export default {
	components: {
		SkillCard,
	},
	setup() {
		const skills = [
			{
				type: "frameworks",
				seriesCount: 55,
				lessonsCount: 951,
				imgSource: frameworksImage,
				route: "/browse/frameworks",
			},
			{
				type: "languages",
				seriesCount: 17,
				lessonsCount: 149,
				imgSource: languagesImages,
				route: "/browse/languages",
			},
			{
				type: "techniques",
				seriesCount: 33,
				lessonsCount: 370,
				imgSource: techniquesImage,
				route: "/browse/techniques",
			},
			{
				type: "testing",
				seriesCount: 12,
				lessonsCount: 100,
				imgSource: testingImages,
				route: "/browse/testing",
			},
			{
				type: "tooling",
				seriesCount: 30,
				lessonsCount: 345,
				imgSource: toolingImages,
				route: "/browse/tooling",
			},
		];

		return {
			skills,
		};
	},
};
</script>

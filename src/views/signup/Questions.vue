<template>
	<section class="text-white" style="background-image: linear-gradient(to right, rgb(91, 121, 162), rgb(46, 68, 105));">
		<div class="container" style="max-width: 1166px;">
			<header class="container text-center mb-4 mx-auto max-w-[650px] pb-4 text-white">
				<h3 class="mb-2 text-3xl inherits-color font-IranSans md:font-light">سوالات متدوال در مورد طرح ها</h3>
			</header>
			<div class="grid gap-6 md:grid-cols-2">
				<signup-question v-for="question in questions" :key="question.title" :item="question"></signup-question>
			</div>
		</div>
	</section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import SignupQuestion from "@/views/signup/questions/Question.vue";

export default {
	components: {
		SignupQuestion,
	},
	setup() {
		const store = useStore();
		const questions = computed(() => store.getters["home/plans/questions"]);

		return { questions };
	},
};
</script>

<template>
	<div>
		<main>
			<the-header></the-header>
			<div>
				<signup-registeration></signup-registeration>
				<signup-questions></signup-questions>
			</div>
		</main>
	</div>
</template>

<script>
import SignupRegisteration from "@/components/signup-page/SignupRegisteration.vue";
import SignupQuestions from "@/components/signup-page/SignupQuestions.vue";

export default {
	components: {
		SignupRegisteration,
		SignupQuestions,
	},
};
</script>

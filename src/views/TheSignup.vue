<template>
	<div>
		<main>
			<the-header></the-header>
			<div>
				<signup-registration></signup-registration>
				<signup-questions></signup-questions>
			</div>
		</main>
	</div>
</template>

<script>
import SignupRegistration from "@/views/signup/Registration.vue";
import SignupQuestions from "@/views/signup/Questions.vue";

export default {
	components: {
		SignupRegistration,
		SignupQuestions,
	},
};
</script>

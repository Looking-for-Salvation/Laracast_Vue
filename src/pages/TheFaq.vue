<template>
	<div>
		<main>
			<the-header></the-header>
			<section>
				<div class="container" style="max-width: 1166px;">
					<div class="max-w-md mx-auto generic-content">
						<header class="container mx-auto text-center max-w-[650px] mb-4 pb-6 text-black font-IranSans">
							<h3 class="mb-2 text-3xl inherits-color md:font-light">سوال های پرتکرار</h3>
							<p class="font-light inherits-color text-2lg">این ها سوال هایی هستند که به صورت مکرر از ما پرسیده شده.</p>
						</header>
						<div class="flex mb-8">
							<div class="ml-4">
								<button
									class="flex items-center justify-center w-6 h-6 text-xs font-bold leading-none text-gray-500 border border-gray-400 border-solid rounded-full cursor-pointer"
									@click="firstQuestion"
								>
									<svg
										width="12"
										height="16"
										viewBox="0 0 12 16"
										class="transition duration-200 transform fill-current"
										:class="{ 'rotate-45': !questions.first }"
									>
										<path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path>
									</svg>
								</button>
							</div>
							<div class="leading-loose font-IranSans">
								<h3 @click="firstQuestion" class="mb-3 text-lg leading-none text-black cursor-pointer md:font-light md:text-2xl">
									تیم لاراکست کی هست؟
								</h3>
								<transition name="answer">
									<div v-show="questions.first">
										<p>
											لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
											مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
											باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
											را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
											و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
											سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
										</p>
									</div>
								</transition>
							</div>
						</div>
						<div class="flex mb-8">
							<div class="ml-4">
								<button
									class="flex items-center justify-center w-6 h-6 text-xs font-bold leading-none text-gray-500 border border-gray-400 border-solid rounded-full cursor-pointer"
									@click="secondQuestion"
								>
									<svg
										width="12"
										height="16"
										viewBox="0 0 12 16"
										class="transition duration-200 transform fill-current"
										:class="{ 'rotate-45': !questions.second }"
									>
										<path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path>
									</svg>
								</button>
							</div>
							<div class="leading-loose font-IranSans">
								<h3 @click="secondQuestion" class="mb-3 text-lg leading-none text-black cursor-pointer md:font-light md:text-2xl">
									آیا برخی از دوره ها رایگان هستند؟
								</h3>
								<transition name="answer">
									<div v-show="questions.second">
										<p>
											لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
											در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
										</p>
									</div>
								</transition>
							</div>
						</div>
						<div class="flex mb-8">
							<div class="ml-4">
								<button
									class="flex items-center justify-center w-6 h-6 text-xs font-bold leading-none text-gray-500 border border-gray-400 border-solid rounded-full cursor-pointer"
									@click="thirdQuestion"
								>
									<svg
										width="12"
										height="16"
										viewBox="0 0 12 16"
										class="transition duration-200 transform fill-current"
										:class="{ 'rotate-45': !questions.third }"
									>
										<path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path>
									</svg>
								</button>
							</div>
							<div class="leading-loose font-IranSans">
								<h3 @click="thirdQuestion" class="mb-3 text-lg leading-none text-black cursor-pointer md:font-light md:text-2xl">
									هرچند یکبار دوره های جدید اضافه می شوند؟
								</h3>
								<transition name="answer">
									<div v-show="questions.third">
										<p>
											لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
											در ستون و سطرآنچنان که لازم است
										</p>
									</div>
								</transition>
							</div>
						</div>
						<div class="flex mb-8">
							<div class="ml-4">
								<button
									class="flex items-center justify-center w-6 h-6 text-xs font-bold leading-none text-gray-500 border border-gray-400 border-solid rounded-full cursor-pointer"
									@click="forthQuestion"
								>
									<svg
										width="12"
										height="16"
										viewBox="0 0 12 16"
										class="transition duration-200 transform fill-current"
										:class="{ 'rotate-45': !questions.forth }"
									>
										<path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path>
									</svg>
								</button>
							</div>
							<div class="leading-loose font-IranSans">
								<h3 @click="forthQuestion" class="mb-3 text-lg leading-none text-black cursor-pointer md:font-light md:text-2xl">
									امکان پرداخت با PayPal هست؟
								</h3>
								<transition name="answer">
									<div v-show="questions.forth">
										<p>
											لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
											در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
										</p>
									</div>
								</transition>
							</div>
						</div>
						<div class="flex mb-8">
							<div class="ml-4">
								<button
									class="flex items-center justify-center w-6 h-6 text-xs font-bold leading-none text-gray-500 border border-gray-400 border-solid rounded-full cursor-pointer"
									@click="fifthQuestion"
								>
									<svg
										width="12"
										height="16"
										viewBox="0 0 12 16"
										class="transition duration-200 transform fill-current"
										:class="{ 'rotate-45': !questions.fifth }"
									>
										<path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path>
									</svg>
								</button>
							</div>
							<div class="leading-loose font-IranSans">
								<h3 @click="fifthQuestion" class="mb-3 text-lg leading-none text-black cursor-pointer md:font-light md:text-2xl">
									آیا طرح هایی برای شرکت و تیم ها دارید؟
								</h3>
								<transition name="answer">
									<div v-show="questions.fifth">
										<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
									</div>
								</transition>
							</div>
						</div>
						<div class="flex mb-8">
							<div class="ml-4">
								<button
									class="flex items-center justify-center w-6 h-6 text-xs font-bold leading-none text-gray-500 border border-gray-400 border-solid rounded-full cursor-pointer"
									@click="sixthQuestion"
								>
									<svg
										width="12"
										height="16"
										viewBox="0 0 12 16"
										class="transition duration-200 transform fill-current"
										:class="{ 'rotate-45': !questions.sixth }"
									>
										<path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path>
									</svg>
								</button>
							</div>
							<div class="leading-loose font-IranSans">
								<h3 @click="sixthQuestion" class="mb-3 text-lg leading-none text-black cursor-pointer md:font-light md:text-2xl">
									چجوری می تونم به لاراکست کمک کنم؟
								</h3>
								<transition name="answer">
									<div v-show="questions.sixth">
										<p>
											لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
											در ستون و سطرآنچنان که لازم است
										</p>
									</div>
								</transition>
							</div>
						</div>
						<div class="flex mb-8">
							<div class="ml-4">
								<button
									class="flex items-center justify-center w-6 h-6 text-xs font-bold leading-none text-gray-500 border border-gray-400 border-solid rounded-full cursor-pointer"
									@click="seventhQuestion"
								>
									<svg
										width="12"
										height="16"
										viewBox="0 0 12 16"
										class="transition duration-200 transform fill-current"
										:class="{ 'rotate-45': !questions.seventh }"
									>
										<path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path>
									</svg>
								</button>
							</div>
							<div class="leading-loose font-IranSans">
								<h3 @click="seventhQuestion" class="mb-3 text-lg leading-none text-black cursor-pointer md:font-light md:text-2xl">
									آیا میشه طرحم رو از ماهیانه به سالیانه تغییر بدم؟
								</h3>
								<transition name="answer">
									<div v-show="questions.seventh">
										<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
									</div>
								</transition>
							</div>
						</div>
						<div class="flex mb-8">
							<div class="ml-4">
								<button
									class="flex items-center justify-center w-6 h-6 text-xs font-bold leading-none text-gray-500 border border-gray-400 border-solid rounded-full cursor-pointer"
									@click="eighthQuestion"
								>
									<svg
										width="12"
										height="16"
										viewBox="0 0 12 16"
										class="transition duration-200 transform fill-current"
										:class="{ 'rotate-45': !questions.eighth }"
									>
										<path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path>
									</svg>
								</button>
							</div>
							<div class="leading-loose font-IranSans">
								<h3 @click="eighthQuestion" class="mb-3 text-lg leading-none text-black cursor-pointer md:font-light md:text-2xl">
									آیا می تونم تو لاراکست فقط لاراول یاد بگیرم؟
								</h3>
								<transition name="answer">
									<div v-show="questions.eighth">
										<p>
											لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
											در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
										</p>
									</div>
								</transition>
							</div>
						</div>
						<div class="flex mb-8">
							<div class="ml-4">
								<button
									class="flex items-center justify-center w-6 h-6 text-xs font-bold leading-none text-gray-500 border border-gray-400 border-solid rounded-full cursor-pointer"
									@click="ninthQuestion"
								>
									<svg
										width="12"
										height="16"
										viewBox="0 0 12 16"
										class="transition duration-200 transform fill-current"
										:class="{ 'rotate-45': !questions.ninth }"
									>
										<path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path>
									</svg>
								</button>
							</div>
							<div class="leading-loose font-IranSans">
								<h3 @click="ninthQuestion" class="mb-3 text-lg leading-none text-black cursor-pointer md:font-light md:text-2xl">
									هرینه طرح ها به جه صورت است؟
								</h3>
								<transition name="answer">
									<div v-show="questions.ninth">
										<p>
											لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
											در ستون و سطرآنچنان که لازم است
										</p>
									</div>
								</transition>
							</div>
						</div>
						<div class="flex mb-8">
							<div class="ml-4">
								<button
									class="flex items-center justify-center w-6 h-6 text-xs font-bold leading-none text-gray-500 border border-gray-400 border-solid rounded-full cursor-pointer"
									@click="tenthQuestion"
								>
									<svg
										width="12"
										height="16"
										viewBox="0 0 12 16"
										class="transition duration-200 transform fill-current"
										:class="{ 'rotate-45': !questions.tenth }"
									>
										<path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path>
									</svg>
								</button>
							</div>
							<div class="leading-loose font-IranSans">
								<h3 @click="tenthQuestion" class="mb-3 text-lg leading-none text-black cursor-pointer md:font-light md:text-2xl">
									آیا فیلم، Total Recall، یک رویا بود؟
								</h3>
								<transition name="answer">
									<div v-show="questions.tenth">
										<p>
											لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
											در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
											لورم
											<br />
											<br />
											ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
											ستون و سطرآنچنان که لازم است
										</p>
									</div>
								</transition>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script>
import { reactive } from "vue";

export default {
	setup() {
		const questions = reactive({
			first: false,
			second: false,
			third: false,
			forth: false,
			fifth: false,
			sixth: false,
			seventh: false,
			eighth: false,
			ninth: false,
			tenth: false,
		});

		const firstQuestion = () => (questions.first = !questions.first);
		const secondQuestion = () => (questions.second = !questions.second);
		const thirdQuestion = () => (questions.third = !questions.third);
		const forthQuestion = () => (questions.forth = !questions.forth);
		const fifthQuestion = () => (questions.fifth = !questions.fifth);
		const sixthQuestion = () => (questions.sixth = !questions.sixth);
		const seventhQuestion = () => (questions.seventh = !questions.seventh);
		const eighthQuestion = () => (questions.eighth = !questions.eighth);
		const ninthQuestion = () => (questions.ninth = !questions.ninth);
		const tenthQuestion = () => (questions.tenth = !questions.tenth);

		return {
			questions,
			firstQuestion,
			secondQuestion,
			thirdQuestion,
			forthQuestion,
			fifthQuestion,
			sixthQuestion,
			seventhQuestion,
			eighthQuestion,
			ninthQuestion,
			tenthQuestion,
		};
	},
};
</script>

<style scoped>
.answer-enter-active,
.asnwer-leave-active {
	transition: all 0.5s ease-out;
}

.answer-enter-from,
.answer-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>

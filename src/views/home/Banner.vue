<template>
	<div>
		<div class="relative home-banner">
			<div class="flex flex-col home-banner-inner">
				<the-header transparent home></the-header>
				<div class="flex flex-1 py-10 mt-10 home-banner-main section lg:items-center lg:mt-0">
					<div class="container w-full mx-auto" style="max-width: 1400px;">
						<div class="grid grid-cols-12">
							<img
								id="home-banner-illustration"
								class="absolute pointer-events-none lazyloaded"
								srcset="
									../../assets/images/home/home-banner/banner-illustration-sm.png 1000w,
									../../assets/images/home/home-banner/banner-illustration-md.png 1400w,
									../../assets/images/home/home-banner/banner-illustration-lg.png 2000w
								"
								sizes="1288px"
								alt="Lary the robot surrounded by Laracasts series thumbnails"
							/>
							<div
								class="relative max-w-sm col-span-12 mx-auto text-center font-IranSans md:mt-10 lg:mt-0 home-banner-content md:col-start-5 md:col-span-8 xl:col-start-7 xl:col-span-6 lg:max-w-none lg:mx-0 lg:mr-6 xl:mx-0"
							>
								<h1 class="tracking-normal header-title mb-7 md:mb-8 md:font-light" style="width: max-content;">
									مرجع آموزش
									<span
										class="block font-normal leading-tight has-cursor header-title-accent"
										contenteditable
										spellcheck="false"
										style="width: max-content;"
									>
										برنامه نویسی وب
									</span>
								</h1>
								<p class="hidden max-w-md leading-loose text-white md:block lg:text-lg opacity-70 mb-9 md:mb-5">
									ارتقای مهارت های برنامه نویسی، با رویکرد محتوای چندرسانه ای.
									<br />
									شروع یادگیری بهترین استک های برنامه نویسی شامل Laravel, Vue و بسیاری موارد دیگر
								</p>
								<div class="flex space-x-6">
									<router-link
										to="/series"
										class="object-right px-8 py-2 ml-6 text-black transition-all duration-300 bg-white border rounded-full font-IranSans hover:text-blue-400"
										><span class="hidden md:inline">مشاهده </span>
										دوره ها
									</router-link>
									<router-link
										to="/discuss"
										class="object-right px-8 py-2 text-white transition-all duration-300 bg-white border border-opacity-25 rounded-full bg-opacity-10 font-IranSans hover:text-blue-400 hover:bg-opacity-100"
										>انجمن
										<span class="hidden md:inline"> گفتگو</span>
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.home-banner {
	background-image: radial-gradient(circle at 51% 111%, #1285f3, #003a99 86%);
	mask: url("../../assets/images/home/home-bg-mask.svg");
	-webkit-mask: url("../../assets/images/home/home-bg-mask.svg");
	-webkit-mask-position: center;
	mask-position: center;
	-webkit-mask-repeat: no-repeat;
	mask-repeat: no-repeat;
	-webkit-mask-size: cover;
	mask-size: cover;
}

.home-banner-inner {
	overflow: hidden;
}

.header-title {
	--tw-text-opacity: 1;
	color: rgba(255, 255, 255, var(--tw-text-opacity));
	font-size: 2.2rem;
	letter-spacing: -0.02em;
	line-height: 1.1;
	margin-bottom: 1.5rem;
}

.header-title-accent {
	-webkit-text-fill-color: transparent;
	background: linear-gradient(90deg, #637bff 20%, #21c8f6 40%, #637bff 60%, #21c8f6 80%, #637bff);
	background-clip: text;
	-webkit-background-clip: text;
	background-size: 200% auto;
	caret-color: #637bff;
	color: #000;
	padding-right: 5px;
}

.header-title-accent.has-cursor:after {
	-webkit-animation: cursor-blink 0.8s infinite;
	animation: cursor-blink 0.8s infinite;
	background: #21c8f6;
	content: none;
	display: inline-block;
	height: 20px;
	left: 8px;
	line-height: 17px;
	margin-left: 3px;
	position: relative;
	top: 20px;
	width: 5px;
	will-change: opacity;
}

.header-title-accent:focus {
	outline: none;
}

.header-title-accent:focus:after {
	content: none;
}

.desc-header {
	direction: rtl;
}

#home-banner-illustration {
	bottom: -64px;
	cursor: pointer;
	right: 0;
	margin-right: -15%;
	max-width: none;
	mix-blend-mode: luminosity;
	width: 160vw;
	transform: scaleX(-1);
}

@media screen and (min-width: 340px) {
	.header-title {
		font-size: 2.4rem;
	}

	.header-title-accent.has-cursor:after {
		height: 30px;
		width: 5px;
	}
}

@media (min-width: 400px) {
	#home-banner-illustration {
		bottom: -20vw;
		right: 0;
		margin-right: -5%;
		width: 125vw;
	}

	.home-banner-main {
		padding-left: 3rem;
		padding-right: 3rem;
	}

	.home-banner-content {
		text-align: right;
	}
}

@media (max-width: 768px) {
	#home-banner-illustration.lazyloaded {
		opacity: 0.2;
	}
}

@media (min-width: 768px) {
	.home-banner-inner {
		min-height: 672px;
	}

	.header-title {
		font-size: 2.6666rem;
		line-height: 1.3;
		margin-bottom: 1.25rem;
		text-align: right;
	}

	.header-title-accent {
		font-size: 2.6666rem;
	}

	#home-banner-illustration {
		bottom: auto;
		right: -230px;
		margin-right: 0;
		top: -180px;
		width: 945px;
	}
}

@media (min-width: 992px) {
	.header-title {
		font-size: 45px;
		line-height: 1;
	}

	.header-title-accent {
		font-size: 45px;
	}

	.home-banner-content {
		left: 20px;
		top: -25px;
	}

	.header-title-accent.has-cursor:after {
		height: 50px;
		width: 20px;
	}
}

@media (min-width: 1200px) {
	#home-banner-illustration {
		right: -1.5%;
		top: -160px;
		width: 79%;
	}

	.home-banner-content {
		left: 90px;
		top: -50px;
	}
}

@media (min-width: 1500px) {
	.home-banner-inner {
		min-height: 795px;
	}

	.header-title {
		font-size: 55px;
	}

	.header-title-accent {
		font-size: 55px;
	}

	#home-banner-illustration {
		right: 1.5%;
		top: -200px;
		width: 80%;
		max-width: 1288px;
	}
}

@-webkit-keyframes cursor-blink {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}
@keyframes cursor-blink {
	0% {
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
}
</style>

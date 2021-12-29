import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

import reviewsModule from "./modules/reviews.js";
import plansModule from "./modules/plans.js";
import skillsModule from "./modules/skills.js";

export default {
	namespaced: true,
	modules: {
		reviews: reviewsModule,
		plans: plansModule,
		skills: skillsModule,
	},
	state() {
		return {
			TeamMembers: [
				{
					name: "محمدرضا مهدویان",
					role: "سازنده لاراکست",
					img: ownerImg,
					biography:
						"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد",
					twitter: "http://twitter.com",
				},
				{
					name: "پریسا نعمتی",
					role: "طراح",
					img: designerImg,
					biography:
						"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده",
					twitter: "http://twitter.com",
				},
				{
					name: "فرشاد جعفری",
					role: "مدرس",
					img: teacherImg,
					biography:
						"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
					twitter: "http://twitter.com",
				},
			],
		};
	},
	mutations,
	getters,
	actions,
};

import ownerImg from "@/assets/images/home/home-team/Owner.jpg";
import designerImg from "@/assets/images/home/home-team/Designer.jpg";
import teacherImg from "@/assets/images/home/home-team/Teacher.jpg";

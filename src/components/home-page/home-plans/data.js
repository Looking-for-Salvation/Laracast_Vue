import monthlyImage from "../../../assets/images/home/home-plans/sub-monthly.svg";
import yearlyImage from "../../../assets/images/home/home-plans/sub-yearly.svg";
import lifetimeImage from "../../../assets/images/home/home-plans/sub-lifetime.svg";

export default [
	{
		periodicity: "monthly",
		price: "50,000",
		img: monthlyImage,
		description: "هرچیزی که میخوای یاد بگیر. دسترسی به محتوای بی پایان از برنامه نویسی با طرح ماهانه ما",
		route: "/signup?plan=monthly-15",
		primary: false,
	},
	{
		periodicity: "yearly",
		price: "500,000",
		img: yearlyImage,
		description: "هرچیزی که میخوای یاد بگیر. دسترسی به محتوای بی پایان از برنامه نویسی با طرح سالانه ما",
		route: "/signup?plan=yearly-99",
		primary: true,
	},
	{
		periodicity: "lifetime",
		price: "5,000,000",
		img: lifetimeImage,
		description: "هرچیزی که میخوای یاد بگیر. دسترسی به محتوای بی پایان از برنامه نویسی با طرح مادام العمر ما",
		route: "/signup?plan=forever",
		primary: false,
	},
];

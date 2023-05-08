import { IFields, IFrames, IMenuItem } from "../types";

export const headerButtons: string[] = ["Anywhere", "Any week", "Add guests", "search"];

export const bottomMenu: IMenuItem[] = [
	{ id: 1, icon: "search", route: "/" },
	{ id: 2, icon: "travels", route: "/bookings" },
	{ id: 3, icon: "plus", route: "/places/new" },
	{ id: 4, icon: "message", route: "/message" },
	{ id: 5, icon: "profile", route: "/profile" },
];

export const accountFrames: IFrames[] = [
	{
		id: 1,
		icon: "card",
		route: "personal-info",
		headText: "Personal information",
		subText: "Provide personal and contact information",
	},
	{
		id: 2,
		icon: "shield",
		route: "/",
		headText: "Entrance and security",
		subText: "Update your password and secure your account",
	},
	{
		id: 3,
		icon: "paymant",
		route: "/",
		headText: "Payments and benefits",
		subText: "Check payments, payments, coupons and gift cards",
	},
	{
		id: 4,
		icon: "taxes",
		route: "/",
		headText: "Taxes",
		subText: "Management of taxpayer information and tax documents",
	},
	{
		id: 5,
		icon: "horn",
		route: "/",
		headText: "Notifications",
		subText: "Select notification settings and communication methods",
	},
	{
		id: 6,
		icon: "eye",
		route: "/",
		headText: "Privacy and data sharing",
		subText: "Manage personal information, connected services, and data sharing settings",
	},
	{
		id: 7,
		icon: "switch",
		route: "/",
		headText: "Global preferences",
		subText: "Select the default language, currency and time zone",
	},
	{
		id: 8,
		icon: "trips",
		route: "/",
		headText: "Business trips",
		subText: "Add a business email address and take advantage of Airbnb for Business",
	},
	{
		id: 9,
		icon: "tools",
		route: "/",
		headText: "Tools for the pro host",
		subText: "Use professional tools to manage multiple housing options on Airbnb",
	},
	{
		id: 10,
		icon: "ref",
		route: "/",
		headText: "Referral bonus and coupon",
		subText: "Balance of referral bonuses and coupons: $0. Read more.",
	},
];

export const rigthFrames: IFrames[] = [
	{
		id: 1,
		icon: "s1",
		headText: "Why isn't my information here?",
		subText: "We hide certain account information to protect your identity.",
	},
	{
		id: 2,
		icon: "s2",
		headText: "What information can I edit?",
		subText:
			"The information used to confirm your identity cannot be changed. You can edit your contact information and some personal information, but we will ask for proof of identity the next time you book or create a listing.",
	},
	{
		id: 3,
		icon: "s3",
		headText: "What information is available to others?",
		subText:
			"Airbnb only provides guests and hosts with each other's contact information once a reservation has been confirmed.",
	},
];

export const accountFields: IFields[] = [
	{
		headText: "Phone numbers",
		subText:
			"Include a phone number so Airbnb and guests can contact you for confirmed reservations. You can add other rooms and specify their purpose.",
		button: "Add",
	},
	{
		headText: "State-issued ID card",
		subText: "No info",
		button: "Add",
	},
	{
		headText: "Address",
		subText: "No info",
		button: "Edit",
	},
	{
		headText: "Emergency contact person",
		subText: "No info",
		button: "Add",
	},
];

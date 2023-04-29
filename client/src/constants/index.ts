import { IMenuItem } from "../types";

export const headerButtons: string[] = ["Anywhere", "Any week", "Add guests", "search"];

export const accountMenu: IMenuItem[] = [
	{ id: 1, icon: "home", route: "/", label: "Home" },
	{ id: 2, icon: "profile", route: "/profile", label: "Profile" },
	{ id: 3, icon: "travels", route: "/bookings", label: "Bookings" },
	{ id: 4, icon: "places", route: "/places", label: "My accommodations" },
	{ id: 5, icon: "settings", route: "/settings", label: "Settings" },
];

export const bottomMenu: IMenuItem[] = [
	{ id: 1, icon: "search", route: "/" },
	{ id: 2, icon: "travels", route: "/bookings" },
	{ id: 3, icon: "plus", route: "/places/new" },
	{ id: 4, icon: "message", route: "/message" },
	{ id: 5, icon: "profile", route: "/profile" },
];

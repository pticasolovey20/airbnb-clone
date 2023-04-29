/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#040714",
				secondary: "#F5385D",

				blue: { 100: "#0c1335" },
				purple: { 100: "#5c199e" },
				pink: { 100: "#e3105a" },
			},
		},
	},
	plugins: [],
};

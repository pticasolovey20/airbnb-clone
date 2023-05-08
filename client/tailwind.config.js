/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0F0F0F",
				secondary: "#F5385D",

				blue: { 100: "#0c1335" },
				purple: { 100: "#5c199e" },
				pink: { 100: "#FF5A5F" },

				dark: {
					one: "#0F0F0F",
					two: "#212121",
					three: "#1C1C1C",
				},

				silver: {
					one: "#CCCCCC",
					two: "#212121",
					three: "#292929",
				},

				// AFAFAF
				// FF5A5F
				// BDBDBD
			},
		},
	},
	plugins: [],
};

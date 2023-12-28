import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				mission: "url('/assets/images/aboutUs/mission.png')",
			},
			colors: {
				primary: "#C4161C",
				primaryShade: "#DF343A",
				hoverPrimary: "#6D0E16",
				textPrimary: "#272727",
				textSecondary: "#5B5B5B",
				textLight: "#7B7B7B",
				blue: "#2B3589",
				bgPrimary: "#F6F6F6",
				herbalPrimary: "#7C4007",
				herbalSecondary: "#CC7A2D",
				herbalBg: "#FBEEE2",
			},
		},
	},
	plugins: [],
};

export default config;

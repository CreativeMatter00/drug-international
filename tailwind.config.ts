import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#C4161C",
				primaryShade: "#DF343A",
				hoverPrimary: "#6D0E16",
				textPrimary: "#272727",
				textSecondary: "#5B5B5B",
				textLight: "#7B7B7B",
				blue: "#2B3589",
				bgPrimary: "#F6F6F6",
			},
		},
	},
	plugins: [],
};

export default config;

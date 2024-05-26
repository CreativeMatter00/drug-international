const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: ".next",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.drug-international.com",
				port: "",
				pathname: "/uploads/**",
			},
		],
		domains: ["www.drug-international.com"],
		unoptimized: true,
	},
};

module.exports = withNextIntl(nextConfig);

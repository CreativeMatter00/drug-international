/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.drug-international.com",
				port: "",
				pathname: "/uploads/**",
			},
		],
	},
};

module.exports = nextConfig;

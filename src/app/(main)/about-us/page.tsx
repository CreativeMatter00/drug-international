"use client";

import { useState } from "react";
import Banner from "@/components/ui/Banner";

function Page() {
	const tabTitle = [
		"company profile",
		"Founder Chairman Profile",
		"Message from MD",
		"Mission & vision",
		"Quality Policy",
		"Corporate Social Responsibility",
		"sister concerns",
	];

	const [selectedTab, setSelectedTab] = useState(0);

	return (
		<div className="relative">
			<Banner src="/assets/images/aboutUs/banner.jpg" title="about us" />
			<div className="absolute bottom-[-100px] w-full">
				<div className="container mx-auto bg-white py-14 px-12 rounded-2xl shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.75)]">
					<div className="flex items-center gap-4 text-center text-textPrimary overflow-x-auto">
						{tabTitle.map((title: string, index: number) => (
							<div
								className={`uppercase py-4 px-2 h-[106px] flex items-center cursor-pointer rounded-md font-medium text-sm ${
									selectedTab === index ? "bg-[#DF343A] text-white" : ""
								}`}
								key={index}
								onClick={() => setSelectedTab(index)}
							>
								{title}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page;

"use client";

import { useState } from "react";
import CompanyProfile from "./CompanyProfile";
import FounderProfile from "./FounderProfile";
import MdProfile from "./MdProfile";
import QualityPolicy from "./QualityPolicy";
import CorporateResponsibility from "./CorporateResponsibility";
import SisterConcerns from "./SisterConcerns";
import MissionVision from "./MissionVision";

function AboutUs() {
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
		<div className="relative mt-[-100px] w-full mb-10">
			<div className="container mx-auto bg-white py-8 md:py-14 px-4 md:px-12 rounded-2xl shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.75)]">
				<div className="flex items-center gap-4 text-center text-textPrimary overflow-x-auto mb-20">
					{tabTitle.map((title: string, index: number) => (
						<div
							className={`uppercase py-4 px-2 h-[106px] flex items-center cursor-pointer rounded-md font-medium text-sm ${
								selectedTab === index ? "bg-primaryShade text-white" : ""
							}`}
							key={index}
							onClick={() => setSelectedTab(index)}
						>
							{title}
						</div>
					))}
				</div>

				<div className="border border-[#7B7B7B55] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.3)] uppercase mb-16 py-6 rounded-md flex items-center justify-center gap-4 w-full">
					<div className="border border-t-primaryShade w-[20%]" />
					<div className="text-base font-medium text-center">
						{tabTitle[selectedTab]}
					</div>
					<div className="border border-t-primaryShade w-[20%]" />
				</div>

				{selectedTab === 0 && <CompanyProfile />}
				{selectedTab === 1 && <FounderProfile />}
				{selectedTab === 2 && <MdProfile />}
				{selectedTab === 3 && <MissionVision />}
				{selectedTab === 4 && <QualityPolicy />}
				{selectedTab === 5 && <CorporateResponsibility />}
				{selectedTab === 6 && <SisterConcerns />}
			</div>
		</div>
	);
}

export default AboutUs;

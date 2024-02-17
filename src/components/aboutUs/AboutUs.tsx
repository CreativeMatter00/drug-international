"use client";

import { useState } from "react";
import CompanyProfile from "./CompanyProfile";
import FounderProfile from "./FounderProfile";
import MdProfile from "./MdProfile";
import QualityPolicy from "./QualityPolicy";
import CorporateResponsibility from "./CorporateResponsibility";
import SisterConcerns from "./SisterConcerns";
import MissionVision from "./MissionVision";
import Banner from "../ui/Banner";
import { useLocale } from "next-intl";

function AboutUs() {
	const locale = useLocale();

	const tabTitle = [
		{ en: "Company Profile", cn: "公司简介" },
		{ en: "Founder Chairman Profile", cn: "创始主席简介" },
		{ en: "Message from MD", cn: "董事总经理致辞" },
		{ en: "Mission & vision", cn: "使命与愿景" },
		{ en: "Quality Policy", cn: "质量政策" },
		{ en: "Corporate Social Responsibility", cn: "企业社会责任" },
		{ en: "Sister Concerns", cn: "关联企业" },
	];

	const [selectedTab, setSelectedTab] = useState(0);

	return (
		<div>
			<div className="relative">
				<Banner src="/assets/images/aboutUs/banner.jpg" title="about us" />
				<div className="relative mt-[-100px] w-full mb-10">
					<div className="container mx-auto bg-white py-8 md:py-14 px-4 md:px-12 rounded-2xl shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.75)] overflow-y-hidden">
						<div className="flex items-center justify-center gap-4 text-center text-textPrimary overflow-x-auto mb-20">
							{tabTitle.map((title: any, index: number) => (
								<div
									className={`uppercase py-4 px-2 h-[106px] flex items-center cursor-pointer rounded-md font-medium text-sm ${
										selectedTab === index ? "bg-primaryShade text-white" : ""
									}`}
									key={index}
									onClick={() => setSelectedTab(index)}
								>
									{locale === "cn" ? (
										<div> {title.cn} </div>
									) : (
										<div> {title.en} </div>
									)}
								</div>
							))}
						</div>

						<div className="border border-[#7B7B7B55] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.3)] uppercase mb-16 py-6 rounded-md flex items-center justify-center gap-4 w-full">
							<div className="border border-t-primaryShade w-[20%]" />
							<div className="text-base font-medium text-center">
								{locale === "cn" ? (
									<div> {tabTitle[selectedTab].cn} </div>
								) : (
									<div> {tabTitle[selectedTab].en} </div>
								)}
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
			</div>
		</div>
	);
}

export default AboutUs;

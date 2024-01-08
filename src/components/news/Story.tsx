import React from "react";
import StoryCard from "./cards/StoryCard";

function Story() {
	return (
		<div className="px-10 py-20 bg-[#F2F2F2] font-medium">
			<p className="text-lg text-textPrimary uppercase mb-4"> Recent Stories</p>
			<div className="flex flex-col gap-4 max-h-[1200px] overflow-y-auto">
				<StoryCard
					src="/assets/images/news/4.jpg"
					storyType="Success Stories"
					title="Advancing Cardiovascular Solutions"
					description="Explore our latest pharmaceutical breakthroughs addressing critical aspects of cardiovascular health."
				/>
				<StoryCard
					src="/assets/images/news/5.jpg"
					storyType="Drug Discoveries"
					title="Innovative Mental Health Medication"
					description="Unveiling a pioneering pharmaceutical solution to support mental health and well-being."
				/>
				<StoryCard
					src="/assets/images/news/6.jpg"
					storyType="Herbal & Unani Insights"
					title="Herbal Remedies for Stress Relief"
					description="Unveiling a pioneering pharmaceutical solution to support mental health and well-being."
				/>
				<StoryCard
					src="/assets/images/news/4.jpg"
					storyType="Success Stories"
					title="Advancing Cardiovascular Solutions"
					description="Explore our latest pharmaceutical breakthroughs addressing critical aspects of cardiovascular health."
				/>
				<StoryCard
					src="/assets/images/news/5.jpg"
					storyType="Drug Discoveries"
					title="Innovative Mental Health Medication"
					description="Unveiling a pioneering pharmaceutical solution to support mental health and well-being."
				/>
				<StoryCard
					src="/assets/images/news/6.jpg"
					storyType="Herbal & Unani Insights"
					title="Herbal Remedies for Stress Relief"
					description="Unveiling a pioneering pharmaceutical solution to support mental health and well-being."
				/>
			</div>
		</div>
	);
}

export default Story;

import OurLegacy from "@/components/ourLegacy/OurLegacy";
import Banner from "@/components/ui/Banner";

const Timeline = () => {
	return (
		<div>
			<div className="relative">
				<Banner src="/assets/images/ourLegacy/banner.png" title="Our Legacy" />
				<OurLegacy />
			</div>
		</div>
	);
};

export default Timeline;

import Facilities from "@/components/facilities/Facilities";
import Banner from "@/components/ui/Banner";
import React from "react";

function page() {
	return (
		<div>
			<div className="relative">
				<Banner src="/assets/images/facilities/banner.jpg" title="facilities" />
				<Facilities />
			</div>
		</div>
	);
}

export default page;

import ContactUs from "@/components/contactUs/ContactUs";
import Banner from "@/components/ui/Banner";
import React from "react";

function page() {
	return (
		<div>
			<div className="relative">
				<Banner src="/assets/images/contactUs/banner.jpg" title="Contact Us" />
				<ContactUs />
			</div>
		</div>
	);
}

export default page;

import AboutUs from "@/components/aboutUs/AboutUs";
import Banner from "@/components/ui/Banner";

function Page() {
	return (
		<div className="relative">
			<Banner src="/assets/images/aboutUs/banner.jpg" title="about us" />
			<AboutUs />
		</div>
	);
}

export default Page;

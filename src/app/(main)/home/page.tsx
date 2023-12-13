import Achievements from "@/components/home/Achievements";
import CSR from "@/components/home/CSR";
import Hero from "@/components/home/Hero";
import LatestProducts from "@/components/home/LatestProducts";
import SecurityCheck from "@/components/home/SecurityCheck";
import SpecializedProducts from "@/components/home/SpecializedProducts";
import WhoWeAre from "@/components/home/WhoWeAre";

function page() {
	return (
		<div>
			<Hero />
			<WhoWeAre />
			<LatestProducts />
			<SecurityCheck />
			<SpecializedProducts />
			<CSR />
			<Achievements />
		</div>
	);
}

export default page;

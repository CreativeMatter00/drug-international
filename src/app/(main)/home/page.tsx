import Hero from "@/components/home/Hero";
import LatestProducts from "@/components/home/LatestProducts";
import SecurityCheck from "@/components/home/SecurityCheck";
import WhoWeAre from "@/components/home/WhoWeAre";

function page() {
	return (
		<div>
			<Hero />
			<WhoWeAre />
			<LatestProducts />
			<SecurityCheck />
		</div>
	);
}

export default page;

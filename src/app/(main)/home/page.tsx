import Hero from "@/components/home/Hero";
import LatestProducts from "@/components/home/LatestProducts";
import WhoWeAre from "@/components/home/WhoWeAre";

function page() {
	return (
		<div>
			<Hero />
			<WhoWeAre />
			<LatestProducts />
		</div>
	);
}

export default page;

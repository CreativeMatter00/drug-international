import LatestProducts from "@/components/products/latestProducts/LatestProducts";
import BreadCrumb from "@/components/ui/breadcrumb/BreadCrumb";

function page() {
	return (
		<div>
			<BreadCrumb title="latest products" />
			<LatestProducts />
		</div>
	);
}

export default page;

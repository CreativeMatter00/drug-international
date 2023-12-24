import ProductCard from "@/components/products/ProductCard";
import LatestProducts from "@/components/products/latest-products/LatestProducts";
import BreadCrumb from "@/components/ui/breadcrumb/BreadCrumb";
import ButtonInverted from "@/components/ui/button/ButtonInverted";

function page() {
	return (
		<div>
			<BreadCrumb title="latest products" />
			<LatestProducts />
		</div>
	);
}

export default page;

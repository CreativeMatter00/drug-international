import AllProducts from "@/components/products/all-products/AllProducts";
import BreadCrumb from "@/components/ui/breadcrumb/BreadCrumb";

function page() {
	return (
		<div>
			<BreadCrumb title="all products" />
			<AllProducts />
		</div>
	);
}

export default page;

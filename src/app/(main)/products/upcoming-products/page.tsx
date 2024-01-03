import UpcomingProducts from "@/components/products/upcomingProducts/UpcomingProducts";
import BreadCrumb from "@/components/ui/breadcrumb/BreadCrumb";

function page() {
	return (
		<div>
			<BreadCrumb title="upcoming products" />
			<UpcomingProducts />
		</div>
	);
}

export default page;

import ProductCard from "@/components/products/ProductCard";
import BreadCrumb from "@/components/ui/breadcrumb/BreadCrumb";

function page() {
	return (
		<div>
			<BreadCrumb title="latest products" />
			<div className="container mx-auto">
				<div className="grid grid-cols-3">
					<ProductCard
						title="toposar"
						genericName="etoposide"
						theraputicName="oncology"
					/>
					<ProductCard
						title="toposar"
						genericName="etoposide"
						theraputicName="oncology"
					/>
					<ProductCard
						title="toposar"
						genericName="etoposide"
						theraputicName="oncology"
					/>
				</div>
			</div>
		</div>
	);
}

export default page;

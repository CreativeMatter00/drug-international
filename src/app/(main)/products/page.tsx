import Products from "@/components/products/Products";
import Banner from "@/components/ui/Banner";
import React from "react";

function page() {
	return (
		<div>
			<div className="relative">
				<Banner src="/assets/images/products/banner.jpg" title="products" />
				<Products />
			</div>
		</div>
	);
}

export default page;

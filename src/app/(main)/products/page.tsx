import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";
import React from "react";

function page() {
	const DynamicProducts = dynamic(
		() => import("@/components/products/Products"),
		{
			loading: () => <Loader />,
		}
	);

	return (
		<div>
			<DynamicProducts />
		</div>
	);
}

export default page;

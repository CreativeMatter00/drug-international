"use client";

import { useState } from "react";

import BreadCrumb from "@/components/ui/breadcrumb/BreadCrumb";
import AllProductSidebar from "@/components/ui/navSidebar/AllProductSidebar/AllProductSidebar";
import AllProducts from "@/components/products/allProducts/AllProducts";

function Page() {
	const [isAllSidebarVisible, setIsAllSidebarVisible] =
		useState<boolean>(false);
	const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);

	return (
		<div>
			<BreadCrumb title="all products" />

			<AllProductSidebar
				isOverlayVisible={isOverlayVisible}
				setIsOverlayVisible={setIsOverlayVisible}
				isAllSidebarVisible={isAllSidebarVisible}
				setIsAllSidebarVisible={setIsAllSidebarVisible}
			/>

			<AllProducts
				isOverlayVisible={isOverlayVisible}
				setIsOverlayVisible={setIsOverlayVisible}
				setIsAllSidebarVisible={setIsAllSidebarVisible}
				isAllSidebarVisible={isAllSidebarVisible}
			/>
		</div>
	);
}

export default Page;

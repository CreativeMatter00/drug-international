"use client";

import { useState } from "react";

import BreadCrumb from "@/components/ui/breadcrumb/BreadCrumb";
import AllProductSidebar from "@/components/ui/navSidebar/AllProductSidebar/AllProductSidebar";
import AllProducts from "@/components/products/allProducts/AllProducts";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

function Page() {
	const [isAllSidebarVisible, setIsAllSidebarVisible] =
		useState<boolean>(false);
	const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);
	const [therapeuticId, setTherapeuticId] = useState<any | null>(null);
	const t = useTranslations("AllProducts");

	const searchParams = useSearchParams();
	const productId = Number(searchParams.get("id"));

	return (
		<div className="pt-8">
			{/* <BreadCrumb title={t("allProduct")} /> */}

			<AllProductSidebar
				isOverlayVisible={isOverlayVisible}
				setIsOverlayVisible={setIsOverlayVisible}
				isAllSidebarVisible={isAllSidebarVisible}
				setIsAllSidebarVisible={setIsAllSidebarVisible}
				setTherapeuticId={setTherapeuticId}
			/>

			<AllProducts
				isOverlayVisible={isOverlayVisible}
				setIsOverlayVisible={setIsOverlayVisible}
				setIsAllSidebarVisible={setIsAllSidebarVisible}
				isAllSidebarVisible={isAllSidebarVisible}
				therapeuticId={therapeuticId}
				medicineTypeId={productId}
			/>
		</div>
	);
}

export default Page;

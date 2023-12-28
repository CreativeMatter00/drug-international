"use client";

import { useState } from "react";
import AllProducts from "@/components/products/all-products/AllProducts";
import BreadCrumb from "@/components/ui/breadcrumb/BreadCrumb";
import AllProductSidebar from "@/components/ui/navSidebar/AllProductSidebar/AllProductSidebar";

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

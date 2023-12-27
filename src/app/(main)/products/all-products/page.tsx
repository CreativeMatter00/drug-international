"use client";

import { useState } from "react";
import AllProducts from "@/components/products/all-products/AllProducts";
import BreadCrumb from "@/components/ui/breadcrumb/BreadCrumb";
import AllProductSidebar from "@/components/ui/navSidebar/AllProductSidebar/AllProductSidebar";

function Page() {
  const [isAllSidebarVisible, setIsAllSidebarVisible] = useState<boolean>(true);

  return (
    <div>
      <BreadCrumb title="all products" />

      <AllProductSidebar
        isAllSidebarVisible={isAllSidebarVisible}
        setIsAllSidebarVisible={setIsAllSidebarVisible}
      />

      <AllProducts
        setIsAllSidebarVisible={setIsAllSidebarVisible}
        isAllSidebarVisible={isAllSidebarVisible}
      />
    </div>
  );
}

export default Page;

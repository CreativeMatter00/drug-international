import BreadCrumb from "@/components/ui/breadcrumb/BreadCrumb";
import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

function page() {
  const DynamicLatestProducts = dynamic(
    () => import("@/components/products/latestProducts/LatestProducts"),
    {
      loading: () => <Loader />,
    }
  );
  return (
    <div>
      <BreadCrumb title="latest products" />
      <DynamicLatestProducts />
    </div>
  );
}

export default page;

import BreadCrumb from "@/components/ui/breadcrumb/BreadCrumb";
import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

function page() {
  const DynamicUpcomingProducts = dynamic(
    () => import("@/components/products/upcomingProducts/UpcomingProducts"),
    {
      loading: () => <Loader />,
    }
  );
  return (
    <div>
      <BreadCrumb title="upcoming products" />
      <DynamicUpcomingProducts />
    </div>
  );
}

export default page;

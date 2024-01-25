import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

function page() {
  const DynamicHome = dynamic(() => import("@/components/home/Home"), {
    loading: () => <Loader />,
  });
  return (
    <div>
      <DynamicHome />
    </div>
  );
}

export default page;

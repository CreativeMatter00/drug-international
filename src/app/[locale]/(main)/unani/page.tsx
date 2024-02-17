import Loader from "@/components/ui/loader/Loader";
import Unani from "@/components/unani/Unani";
import dynamic from "next/dynamic";

function page() {
  const DynamicUnani = dynamic(() => import("@/components/unani/Unani"), {
    loading: () => <Loader />,
  });
  return (
    <div>
      <DynamicUnani />
    </div>
  );
}

export default page;

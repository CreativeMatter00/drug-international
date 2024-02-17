import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

function Page() {
  const DynamicGlobal = dynamic(() => import("@/components/global/Global"), {
    loading: () => <Loader />,
  });
  return (
    <div>
      <DynamicGlobal />
    </div>
  );
}

export default Page;

import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

const Timeline = () => {
  const DynamicLegacy = dynamic(
    () => import("@/components/ourLegacy/OurLegacy"),
    {
      loading: () => <Loader />,
    }
  );

  return (
    <div>
      <DynamicLegacy />
    </div>
  );
};

export default Timeline;

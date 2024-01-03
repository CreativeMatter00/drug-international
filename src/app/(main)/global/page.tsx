import FlagPart from "@/components/global/FlagPart";
import GlobalPresence from "@/components/global/GlobalPresence";
import MapPart from "@/components/global/MapPart";

function Page() {
  return (
    <div className="w-full">
      {/* <MapPart /> */}
      <FlagPart />
      <GlobalPresence />
    </div>
  );
}

export default Page;

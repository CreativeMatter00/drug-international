import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

function page() {
	const DynamicFacilities = dynamic(
		() => import("@/components/facilities/Facilities"),
		{
			loading: () => <Loader />,
		}
	);
	return (
		<div>
			<DynamicFacilities />
		</div>
	);
}

export default page;

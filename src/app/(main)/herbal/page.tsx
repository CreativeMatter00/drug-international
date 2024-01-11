import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

function page() {
	const DynamicHerbal = dynamic(() => import("@/components/herbal/Herbal"), {
		loading: () => <Loader />,
	});
	return (
		<div>
			<DynamicHerbal />
		</div>
	);
}

export default page;

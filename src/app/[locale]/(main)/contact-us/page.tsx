import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

function page() {
	const DynamicContactUs = dynamic(
		() => import("@/components/contactUs/ContactUs"),
		{
			loading: () => <Loader />,
		}
	);
	return (
		<div>
			<DynamicContactUs />
		</div>
	);
}

export default page;

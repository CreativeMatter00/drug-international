import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

function page() {
	const DynamicNews = dynamic(
		() => import("@/components/contactUs/ContactUs"),
		{
			loading: () => <Loader />,
		}
	);

	return (
		<div>
			<DynamicNews />
		</div>
	);
}

export default page;

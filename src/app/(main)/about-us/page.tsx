import Loader from "@/components/ui/loader/Loader";
import dynamic from "next/dynamic";

function Page() {
	const DynamicAboutUs = dynamic(() => import("@/components/aboutUs/AboutUs"), {
		loading: () => <Loader />,
	});

	return (
		<div>
			<DynamicAboutUs />
		</div>
	);
}

export default Page;

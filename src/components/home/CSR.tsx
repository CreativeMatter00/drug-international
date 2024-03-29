import { useTranslations } from "next-intl";

function CSR() {
	const t = useTranslations("Home");

	return (
		<div className="py-12">
			<div className="text-center font-semibold text-3xl md:text-4xl pb-12 uppercase">
				{/* Virtual Tour */}
				{t("CSR")}
			</div>
			<div className="container mx-auto px-4">
				<iframe
					src="https://www.youtube.com/embed/f7eQMcfUUbA?si=ol-91BJrkcYloZtG"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					className="mx-auto w-full h-[300px] md:h-[500px]"
				></iframe>
			</div>
		</div>
	);
}

export default CSR;

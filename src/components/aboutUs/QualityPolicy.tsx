import Image from "next/image";

function QualityPolicy() {
	return (
		<div className="py-24">
			<Image
				src={"/assets/images/aboutUs/Quality Policy.jpg"}
				width={1000}
				height={1417}
				alt="Quality Policy"
				className="max-w-xl h-auto mx-auto"
			/>
		</div>
	);
}

export default QualityPolicy;

import Image from "next/image";

function QualityPolicy() {
	return (
		<div className="py-8">
			<div className="max-w-xl h-auto mx-auto">
				<Image
					src={"/assets/images/aboutUs/Quality Policy.jpg"}
					width={1000}
					height={1417}
					alt="Quality Policy"
					className="object-fill"
				/>
			</div>
		</div>
	);
}

export default QualityPolicy;

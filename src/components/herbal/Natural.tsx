import Image from "next/image";

function Natural() {
	return (
		<div className="relative my-8 md:my-20 min-h-[452px] flex flex-col items-center justify-center">
			<div className="flex justify-end w-full">
				<Image
					src="/assets/images/herbal/Alocap.png"
					width={800}
					height={452}
					alt="alocap"
					className="pl-4 block min-[1620px]:hidden"
				/>
			</div>
			<div className="container mx-auto p-4 md:p-0">
				<div className="w-full min-[1620px]:w-1/2">
					<p className="font-medium text-2xl text-herbalPrimary uppercase mb-4 mt-8 min-[1620px]:mt-0">
						Natural Harmony
					</p>

					<p className="font-medium text-lg text-herbalSecondary uppercase mb-8">
						Unveiling the Power of Herbal Elegance with Drug International
						Herbal Ltd
					</p>

					<p className="font-medium text-base text-textSecondary mb-8">
						Embrace the purity of nature with Drug International Herbal Ltd. Our
						herbal products harness the essence of botanical wonders to promote
						wellness naturally. From time-honored remedies to modern herbal
						innovations, our offerings are crafted with precision to support a
						holistic approach to health. Explore a world of herbal excellence
						where tradition meets cutting-edge science, delivering the best in
						natural well-being for you.
					</p>
				</div>
			</div>

			<div className="hidden min-[1620px]:block absolute top-0 right-0">
				<Image
					src="/assets/images/herbal/Alocap.png"
					width={800}
					height={452}
					alt="alocap"
					className=""
				/>
			</div>
		</div>
	);
}

export default Natural;

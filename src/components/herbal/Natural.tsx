import Image from "next/image";

function Natural() {
	return (
		<div className="relative my-20 min-h-[452px] flex items-center justify-center">
			<div className="container mx-auto">
				<div className="w-1/2">
					<p className="font-medium text-2xl text-herbalPrimary uppercase mb-4">
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

			<div className="absolute top-0 right-0">
				<Image
					src="/assets/images/herbal/Alocap.png"
					width={800}
					height={452}
					alt="alocap"
				/>
			</div>
		</div>
	);
}

export default Natural;

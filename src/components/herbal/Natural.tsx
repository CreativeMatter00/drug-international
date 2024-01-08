/* eslint-disable react/no-unescaped-entities */
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
						Living in sync with the power of perfect balance of herbal with Drug
						International Herbal Limited.
					</p>

					<p className="font-medium text-base text-textSecondary mb-8">
						Experience the essence of nature's goodness with Drug International
						Herbal Ltd. Our herbal products are like nature's gifts, promoting
						wellness in the most relaxed way. From trusted remedies to
						contemporary herbal innovations, we've got your health covered. Our
						medicines are carefully crafted to support a comprehensive approach
						to health. Join us on this well-being journey, where herbs make
						feeling good super easy and natural. Your wellness adventure begins
						here!
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

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

function Botanical() {
	const t = useTranslations("Herbal");

	return (
		<div className="font-medium">
			<div className="text-center uppercase mb-8">
				<p className="text-herbalPrimary text-xl md:text-2xl mb-6">
					{/* Botanical Relief  */}
					{t("ingridientsTitle")}
				</p>
				<p className="text-herbalSecondary text-lg">
					{/* Step Into the Natural Wonders in Our Herbal Products */}
					{t("ingridientsSubTitle")}
				</p>
			</div>

			<div className="pt-10 pb-16">
				<Marquee>
					<div className="flex flex-col gap-8 items-center mr-8">
						<Image
							src={"/assets/images/herbal/marquee/1.png"}
							width={274}
							height={253}
							alt="Drug International"
							className="h-[100px] w-auto md:h-[200px] mx-auto"
						/>
						<div className="flex flex-col items-center gap-3">
							<p className="text-herbalPrimary font-semibold text-xl md:text-2xl text-center">
								Turmeric
							</p>
							<p className="text-herbalSecondary font-medium text-base text-center">
								Curcuma longa
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-8 items-center mr-8">
						<Image
							src={"/assets/images/herbal/marquee/2.png"}
							width={274}
							height={253}
							alt="Drug International"
							className="h-[100px] w-auto md:h-[200px] mx-auto"
						/>
						<div className="flex flex-col items-center gap-3">
							<p className="text-herbalPrimary font-semibold text-xl md:text-2xl text-center">
								Ginger
							</p>
							<p className="text-herbalSecondary font-medium text-base text-center">
								Zingiber officinale
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-8 items-center mr-8">
						<Image
							src={"/assets/images/herbal/marquee/3.png"}
							width={274}
							height={253}
							alt="Drug International"
							className="h-[100px] w-auto md:h-[200px] mx-auto"
						/>
						<div className="flex flex-col items-center gap-3">
							<p className="text-herbalPrimary font-semibold text-xl md:text-2xl text-center">
								Ginseng
							</p>
							<p className="text-herbalSecondary font-medium text-base text-center">
								Panax ginseng
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-8 items-center mr-8">
						<Image
							src={"/assets/images/herbal/marquee/4.png"}
							width={274}
							height={253}
							alt="Drug International"
							className="h-[100px] w-auto md:h-[200px] mx-auto"
						/>
						<div className="flex flex-col items-center gap-3">
							<p className="text-herbalPrimary font-semibold text-xl md:text-2xl text-center">
								Aloe Vera
							</p>
							<p className="text-herbalSecondary font-medium text-base text-center">
								Aloe barbadensis miller
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-8 items-center mr-8">
						<Image
							src={"/assets/images/herbal/marquee/5.png"}
							width={274}
							height={253}
							alt="Drug International"
							className="h-[100px] w-auto md:h-[200px] mx-auto"
						/>
						<div className="flex flex-col items-center gap-3">
							<p className="text-herbalPrimary font-semibold text-xl md:text-2xl text-center">
								Lavender
							</p>
							<p className="text-herbalSecondary font-medium text-base text-center">
								Lavandula angustifolia
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-8 items-center mr-8">
						<Image
							src={"/assets/images/herbal/marquee/6.png"}
							width={274}
							height={253}
							alt="Drug International"
							className="h-[100px] w-auto md:h-[200px] mx-auto"
						/>
						<div className="flex flex-col items-center gap-3">
							<p className="text-herbalPrimary font-semibold text-xl md:text-2xl text-center">
								Chamomile
							</p>
							<p className="text-herbalSecondary font-medium text-base text-center">
								Matricaria chamomilla
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-8 items-center mr-8">
						<Image
							src={"/assets/images/herbal/marquee/7.png"}
							width={274}
							height={253}
							alt="Drug International"
							className="h-[100px] w-auto md:h-[200px] mx-auto"
						/>
						<div className="flex flex-col items-center gap-3">
							<p className="text-herbalPrimary font-semibold text-xl md:text-2xl text-center">
								Echinacea
							</p>
							<p className="text-herbalSecondary font-medium text-base text-center">
								Echinacea purpurea
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-8 items-center mr-8">
						<Image
							src={"/assets/images/herbal/marquee/8.png"}
							width={274}
							height={253}
							alt="Drug International"
							className="h-[100px] w-auto md:h-[200px] mx-auto"
						/>
						<div className="flex flex-col items-center gap-3">
							<p className="text-herbalPrimary font-semibold text-xl md:text-2xl text-center">
								Peppermint
							</p>
							<p className="text-herbalSecondary font-medium text-base text-center">
								Mentha piperita
							</p>
						</div>
					</div>
				</Marquee>
			</div>
		</div>
	);
}

export default Botanical;

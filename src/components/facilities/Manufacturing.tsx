/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Manufacturing() {
	const t = useTranslations("Facilities");

	const slideInAnimationTop = {
		hidden: { opacity: 0, y: 400 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={slideInAnimationTop}
		>
			<p className="font-medium text-3xl uppercase text-primary mb-10">
				{/* Manufacturing Facility */}
				{t("manufacturingFacility")}
			</p>

			<div className="mb-8 min-h-[200px]">
				<Image
					src="/assets/images/facilities/facility.jpg"
					width={720}
					height={405}
					alt="product"
					className="w-full h-auto rounded-md"
				/>
			</div>

			<div className="font-medium text-base text-textSecondary">
				<p className="">
					{/* Drug International Limited stands as a leading pharmaceutical
					manufacturer in Bangladesh, boasting a state-of-the-art facility
					designed, built, and validated in alignment with the WHO-cGMP concept
					and local Drug Administration Regulations. Our expansive plant
					includes two independent production buildings connected via a covered
					corridor, providing a secure environment shielded from environmental
					hazards. Prioritizing cleanliness, we have eliminated potential
					sources of dust and smoke in the surrounding areas, with constructions
					following approved layout plans and meeting regulatory building codes.
					The facility features advanced materials such as sandwich panels
					covering walls and ceilings, while a uniform 5mm layer of epoxy paint
					on all floors facilitates easy cleaning in production and controlled
					areas, ensuring product quality. Our commitment extends to
					comprehensive infrastructure, including a modern QC laboratory, a
					Product Development Laboratory, an Engineering department, a Canteen,
					and a Conference Room. To ensure uninterrupted operations, a generator
					is in place, and our water treatment plant guarantees the purity and
					distribution of water throughout the facility. The Effluent Water
					Treatment Plant (ETP) underscores our dedication to responsible
					wastewater management. Drug International Limited remains steadfast in
					formulating medicines with strict compliance to WHO cGMP guidelines,
					emphasizing a controlled environment with separate departments and
					standardized facilities to uphold the highest standards of quality and
					regulatory compliance. */}
					{t("facilitiesDescription")}
				</p>
			</div>
		</motion.div>
	);
}

export default Manufacturing;

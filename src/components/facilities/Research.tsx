/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Research() {
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
				{/* Research & Development */}
				{t("rnd")}
			</p>

			<div className="mb-8">
				<Image
					src="/assets/images/facilities/researchFacility.jpg"
					width={720}
					height={405}
					alt="product"
					className="w-full h-auto rounded-md"
				/>
			</div>

			<div className="font-medium text-base text-textSecondary">
				<p className="">
					{/* Innovation thrives in our dedicated Research & Development center,
					where the quest for excellence never ceases. Our R&D team works
					tirelessly to pioneer new formulations, enhance existing products, and
					push the boundaries of pharmaceutical innovation. Join us on a journey
					of discovery, where scientific curiosity meets the drive to improve
					healthcare outcomes. */}
					{t("rndDescription")}
				</p>
			</div>
		</motion.div>
	);
}

export default Research;

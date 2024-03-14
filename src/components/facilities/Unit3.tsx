"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

function Unit3() {
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
				{t("unit3")}
			</p>

			<div className=" grid grid-cols-2 mb-8">
				<Image
					src="/assets/images/facilities/unit3.jpg"
					width={720}
					height={405}
					alt="product"
					className="max-h-[700px] w-auto mx-auto rounded-md"
				/>
				<Image
					src="/assets/images/facilities/unit3-2.jpg"
					width={720}
					height={405}
					alt="product"
					className="max-h-[700px] w-auto mx-auto rounded-md"
				/>
			</div>

			<div className="font-medium text-base text-textSecondary">
				<p className=""></p>
			</div>
		</motion.div>
	);
}

export default Unit3;

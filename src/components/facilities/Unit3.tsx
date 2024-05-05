/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

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

			<SlideshowLightbox className="container grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
				<img
					className="w-full rounded-lg h-80"
					src="/assets/images/facilities/unit-3/1.jpg"
					alt="unit-3"
				/>
				<img
					className="w-full rounded-lg h-80"
					src="/assets/images/facilities/unit-3/2.jpg"
					alt="unit-3"
				/>
				<img
					className="w-full rounded-lg h-80"
					src="/assets/images/facilities/unit-3/3.jpg"
					alt="unit-3"
				/>

				<img
					className="w-full rounded-lg h-80"
					src="/assets/images/facilities/unit-3/4.jpg"
					alt="unit-3"
				/>
				<img
					className="w-full rounded-lg h-80"
					src="/assets/images/facilities/unit-3/5.jpg"
					alt="unit-3"
				/>
			</SlideshowLightbox>
		</motion.div>
	);
}

export default Unit3;

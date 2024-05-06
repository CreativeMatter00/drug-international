/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

function Warehouse() {
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
				{t("warehouse")}
			</p>

			<SlideshowLightbox className="container grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto ">
				<img
					className="w-auto rounded-lg h-48 mx-auto"
					src="/assets/images/facilities/warehouse1.jpg"
					alt="warehouse"
				/>
				<img
					className="w-auto rounded-lg h-48 mx-auto"
					src="/assets/images/facilities/warehouse2.jpg"
					alt="warehouse"
				/>
				<img
					className="w-auto rounded-lg h-48 mx-auto"
					src="/assets/images/facilities/warehouse3.jpg"
					alt="warehouse"
				/>
			</SlideshowLightbox>

			<div className="font-medium text-base text-textSecondary mt-8">
				<p className="">
					{/* Efficiency meets precision in our meticulously organized warehouse,
					the logistical backbone of Drug International Limited. Our warehouse
					is designed to ensure seamless storage and distribution of
					pharmaceuticals, maintaining the integrity and quality of our
					products. Take a glimpse into the hub that ensures our medications
					reach every corner of the world with the same quality they were
					crafted with. */}
					{t("warehouseDescription")}
				</p>
			</div>
		</motion.div>
	);
}

export default Warehouse;

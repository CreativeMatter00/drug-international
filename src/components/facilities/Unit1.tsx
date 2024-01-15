"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Unit1() {
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
				Unit - 1
			</p>

			<div className="mb-8">
				<Image
					src="/assets/images/facilities/unit1.jpg"
					width={720}
					height={405}
					alt="product"
					className="w-full h-auto rounded-md"
				/>
			</div>

			<div className="font-medium text-base text-textSecondary">
				<p className="">
					Drug International Limited (Unit-1) is a leading facility with modern
					capabilities for formulating various medicines. We specialize in solid
					dosage forms (tablets and hard capsules), dry syrup, liquid dosage
					forms, semi-solid preparations (creams and ointments), soft gelatin
					capsules, sterile injectables, and sterile solutions for the eyes,
					ears, and nose. Additionally, we produce metered dose inhalers (MDI)
					and nasal sprays. Our innovative approach includes formulating select
					pharmaceuticals in soft capsule form to preserve their original
					medicinal properties, particularly for vitamins and cardiovascular
					drugs.
				</p>
			</div>
		</motion.div>
	);
}

export default Unit1;

"use client";

import { motion } from "framer-motion";

import Image from "next/image";

function QualityPolicy() {
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
			<div className="py-8">
				<div className="max-w-xl h-auto mx-auto">
					<Image
						src={"/assets/images/aboutUs/Quality Policy.jpg"}
						width={1000}
						height={1417}
						alt="Quality Policy"
						className="object-fill"
					/>
				</div>
			</div>
		</motion.div>
	);
}

export default QualityPolicy;

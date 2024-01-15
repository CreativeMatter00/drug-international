"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Warehouse() {
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
				Warehouse
			</p>

			<div className="mb-8 flex flex-wrap">
				<div className="w-full md:w-1/3 p-2">
					<div className="h-[400px] md:h-[240px]">
						<Image
							src="/assets/images/facilities/warehouse1.jpg"
							width={500}
							height={500}
							alt="product"
							className="h-full w-full object-cover rounded-md"
						/>
					</div>
				</div>
				<div className="w-full md:w-1/3 p-2">
					<div className="h-[400px] md:h-[240px]">
						<Image
							src="/assets/images/facilities/warehouse2.jpg"
							width={500}
							height={500}
							alt="product"
							className="h-full w-full object-cover rounded-md"
						/>
					</div>
				</div>
				<div className="w-full md:w-1/3 p-2">
					<div className="h-[400px] md:h-[240px]">
						<Image
							src="/assets/images/facilities/warehouse3.jpg"
							width={500}
							height={500}
							alt="product"
							className="h-full w-full object-cover rounded-md"
						/>
					</div>
				</div>
			</div>

			<div className="font-medium text-base text-textSecondary">
				<p className="">
					Efficiency meets precision in our meticulously organized warehouse,
					the logistical backbone of Drug International Limited. Our warehouse
					is designed to ensure seamless storage and distribution of
					pharmaceuticals, maintaining the integrity and quality of our
					products. Take a glimpse into the hub that ensures our medications
					reach every corner of the world with the same quality they were
					crafted with.
				</p>
			</div>
		</motion.div>
	);
}

export default Warehouse;

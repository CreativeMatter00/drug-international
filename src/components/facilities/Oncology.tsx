"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function Oncology() {
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
				Oncology
			</p>

			<div className="mb-8 flex flex-wrap">
				<div className="w-full md:w-1/2 p-2">
					<div className="h-[240px] md:h-[440px]">
						<Image
							src="/assets/images/facilities/oncology1.jpg"
							width={500}
							height={500}
							alt="product"
							className="h-full object-cover rounded-md"
						/>
					</div>
				</div>
				<div className="w-full md:w-1/2 p-2">
					<div className="h-[240px] md:h-[440px]">
						<Image
							src="/assets/images/facilities/oncology2.jpg"
							width={500}
							height={500}
							alt="product"
							className="h-full object-cover rounded-md"
						/>
					</div>
				</div>
			</div>

			<div className="font-medium text-base text-textSecondary">
				<p className="">
					Our commitment to advancing cancer care is embodied in our specialized
					Oncology division. Explore a space where groundbreaking research,
					compassionate care, and cutting-edge treatments converge. From
					development to distribution, our Oncology facilities are dedicated to
					improving the lives of those affected by cancer.
				</p>
			</div>
		</motion.div>
	);
}

export default Oncology;

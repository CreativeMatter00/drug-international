"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Image from "next/image";

function BAB() {
	const revealAnimation = {
		hidden: { scale: 0 },
		visible: { scale: 1, transition: { duration: 0.5 } },
	};

	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: true });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<div className="py-8">
			<div className="text-center font-semibold text-4xl pb-12 uppercase">
				BAB Certificates
			</div>

			<motion.div
				ref={ref}
				initial="hidden"
				animate={controls}
				variants={revealAnimation}
			>
				<div className="px-4">
					<Image
						src={"/assets/images/home/bab.png"}
						height={266}
						width={588}
						alt="BAB Certificate"
						className="mx-auto mb-10"
					/>
					<div className="container mx-auto text-center">
						<p className="text-textSecondary text-base font-medium">
							At Khwaja Yunus Ali Medical College & Hospital, we take immense
							pride in our latest accomplishment - the prestigious BAB
							(Bangladesh Accreditation Board) Certificate. This recognition
							signifies our unwavering commitment to maintaining the highest
							standards of excellence in healthcare and medical education.
						</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default BAB;

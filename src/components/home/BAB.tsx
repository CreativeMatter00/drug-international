"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Image from "next/image";
import { useTranslations } from "next-intl";

function BAB() {
	const t = useTranslations("Home");

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
				{/* BAB Certificates */}
				{t("BABCertificateTitle")}
			</div>

			<motion.div
				ref={ref}
				initial="hidden"
				animate={controls}
				variants={revealAnimation}
			>
				<div className="px-4">
					<div className="flex flex-col md:flex-row items-center justify-center max-w-screen mb-12">
						<Image
							src={"/assets/images/home/achievement.jpg"}
							height={1024}
							width={1552}
							alt="BAB Certificate"
							className="max-h-[400px] w-auto"
						/>
						<Image
							src={"/assets/images/home/certificate.jpg"}
							height={1024}
							width={725}
							alt="BAB Certificate"
							className="max-h-[400px] w-auto"
						/>
					</div>
					<div className="container mx-auto text-center">
						<p className="text-textSecondary text-base font-medium">
							{/* At Khwaja Yunus Ali Medical College & Hospital, we take immense
							pride in our latest accomplishment - the prestigious BAB
							(Bangladesh Accreditation Board) Certificate. This recognition
							signifies our unwavering commitment to maintaining the highest
							standards of excellence in healthcare and medical education. */}
							{t("BABCertificateSubTitle")}
						</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default BAB;

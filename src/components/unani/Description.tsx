"use client";

import { motion, useAnimation } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Description() {
	const t = useTranslations("Unani");

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
		<div className="py-16 container mx-auto">
			<motion.div
				ref={ref}
				initial="hidden"
				animate={controls}
				variants={revealAnimation}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 text-medium gap-y-16 md:gap-y-36 relative px-4">
					<div className="absolute inset-0 items-center justify-center hidden md:flex">
						<Image
							src="/assets/images/unani/natural.png"
							width={392}
							height={316}
							alt="Nature's Wisdom Unveiled"
						/>
					</div>
					<div className="w-full md:w-2/3">
						<p className="uppercase text-2xl text-textPrimary pb-6">
							{/* Traditional Formulations */}
							{t("hero2Title1")}
						</p>
						<p className="text-textSecondary text-base">
							{/* Dive into centuries-old healing traditions with our Unani
							products. Our Unani formulations, crafted from a blend of herbs
							and natural ingredients, are designed to promote overall
							well-being. */}
							{t("hero2SubTitle1")}
						</p>
					</div>

					<div className="w-full md:w-2/3 text-right ml-auto">
						<p className="uppercase text-2xl text-textPrimary pb-6">
							{/* Balancing Body and Mind */}
							{t("hero2Title2")}
						</p>
						<p className="text-textSecondary text-base">
							{/* Disclose the balance of body and mind with our Unani products.
							Inspired by ancient wisdom, these remedies aim to restore health
							naturally. */}
							{t("hero2SubTitle2")}
						</p>
					</div>

					<div className="flex items-center justify-center md:hidden">
						<Image
							src="/assets/images/unani/natural.png"
							width={392}
							height={316}
							alt="Nature's Wisdom Unveiled"
							className=""
						/>
					</div>

					<div className="w-full md:w-2/3">
						<p className="uppercase text-2xl text-textPrimary pb-6">
							{/* Proven Effectiveness Over Time */}
							{t("hero2Title3")}
						</p>
						<p className="text-textSecondary text-base">
							{/* Our Unani products, rooted in a rich heritage of healing, harness
							the power of botanicals and herbs known for their therapeutic
							properties. Experience results that stand the test of centuries of
							traditional use. */}
							{t("hero2SubTitle3")}
						</p>
					</div>
					<div className="w-full md:w-2/3 text-right ml-auto">
						<p className="uppercase text-2xl text-textPrimary pb-6">
							{/* Well-Being with Holistic Solutions */}
							{t("hero2Title4")}
						</p>
						<p className="text-textSecondary text-base">
							{/* Enrich your wellness journey with our holistic Unani solutions.
							Beyond relieving symptoms, our range addresses the root causes of
							health issues, ensuring comprehensive well-being for a healthier,
							more balanced life. */}
							{t("hero2SubTitle4")}
						</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Description;

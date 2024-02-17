"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";

function WhoWeAre() {
	const t = useTranslations("Home");

	const slideInAnimationLeft = {
		hidden: { opacity: 0, x: -300 },
		visible: { opacity: 1, x: 0 },
	};
	const slideInAnimationRight = {
		hidden: { opacity: 0, x: 300 },
		visible: { opacity: 1, x: 0 },
	};

	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: true });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<div className="grid grid-cols-1 mb-28 md:grid-cols-2">
			<motion.div
				ref={ref}
				className="bg-primary text-white font-semibold py-10 px-8 md:text-right md:py-28 md:px-24"
				initial="hidden"
				animate={controls}
				variants={slideInAnimationLeft}
			>
				<div className="w-full md:max-w-[512px] lg:max-w-[640px] ml-auto">
					{/* <h1 className="text-3xl underline mb-5 md:mb-28"> WHO WE ARE </h1> */}
					<h1 className="text-3xl underline mb-5 md:mb-28">
						{" "}
						{t("whoWeAreTitle")}{" "}
					</h1>
					<p className="text-base">
						{/* We were the first company in Bangladesh to formulate medicines in
            soft capsule form for the purpose of maximizing absorption and
            retention properties of some particular medicines such as vitamins.
            We continue to lead in the field of soft gelatin capsule manufacture
            in Bangladesh. We were also the first in the country to produce a
            soft gelatin capsule vaginal suppository with anti-bacterial and
            anti-fungal properties branded under the name of GYNOMIX. Presently,
            we use our refined and modern production processes to export
            pharmaceutical products to many countries around the world. */}
						{t("whoWeAreDescription")}
					</p>
				</div>
			</motion.div>

			<motion.div
				className="bg-bgPrimary text-textPrimary font-semibold py-10 px-8 md:py-28 md:px-24"
				initial="hidden"
				animate="visible"
				variants={slideInAnimationRight}
			>
				<div className="w-full md:max-w-[512px] lg:max-w-[640px] mr-auto">
					{/* <h1 className="text-3xl underline mb-5 md:mb-28"> WHAT WE DO </h1> */}
					<h1 className="text-3xl underline mb-5 md:mb-28">
						{" "}
						{t("whatWeDoTitle")}{" "}
					</h1>
					<p className="text-base">
						{/* We formulate drugs for all age groups and genders in different
            dosage forms including capsules, tablets, syrups, suspensions,
            injectables, soft gelatin capsules, suppositories, creams, and
            ointments. We maintain two principles of unique supply chain
            management: formulating optimized versions of medicines for specific
            patient groups and adopting policies for market release immediately
            after production. These policies benefit both the patients and the
            pharmacies as the medicine delivery system extends the product’s
            lifecycle. Our formulating principles have always revolved around
            the health and welfare of patients. We constantly strive to improve
            the quality of life of our patients and customers. */}
						{t("whatWeDoDescription")}
					</p>
				</div>
			</motion.div>
		</div>
	);
}

export default WhoWeAre;

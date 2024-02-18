"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import styles from "@/styles/Herbal.module.css";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";
import OurProductCard from "./OurProductCard";
import { useLocale, useTranslations } from "next-intl";

function OurProducts() {
	const t = useTranslations("Herbal");

	const slideInAnimationTop = {
		hidden: { opacity: 0, y: 300 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: true });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	const locale = useLocale();

	return (
		<div>
			<p className="font-medium text-2xl text-herbalPrimary uppercase text-center py-16">
				{/* Our Products */}
				{t("ourProducts")}
			</p>
			<div className={`${styles.background2}`}>
				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={slideInAnimationTop}
				>
					<div className="container mx-auto py-10">
						<div className="flex flex-wrap flex-col md:flex-row items-center justify-between gap-16 px-4 md:px-0">
							<OurProductCard
								src="/assets/images/herbal/products/m1.png"
								title="Garlicap"
								description="Garlic Oil"
							/>
							<OurProductCard
								src="/assets/images/herbal/products/m2.png"
								title="Dalion"
								description="Dandelion"
							/>
							<OurProductCard
								src="/assets/images/herbal/products/m3.png"
								title="Anros"
								description="Andrographis"
							/>
							<OurProductCard
								src="/assets/images/herbal/products/m4.png"
								title="Biloba"
								description="Ginkgo Biloba"
							/>
							<OurProductCard
								src="/assets/images/herbal/products/m5.png"
								title="Biogut"
								description="Saccharomyces boulardii"
							/>
							<OurProductCard
								src="/assets/images/herbal/products/m6.png"
								title="Devas"
								description="Adhatoda Vasica & Other Ingredients"
							/>
							<OurProductCard
								src="/assets/images/herbal/products/m7.png"
								title="Dort"
								description="St. John's Wort"
							/>
							<OurProductCard
								src="/assets/images/herbal/products/m8.png"
								title="Alocap"
								description="Aloe Vera Extract"
							/>
						</div>
						<div className="pt-16">
							<Link href={`/${locale}/products`}>
								<button className="bg-transparent text-herbalPrimary uppercase font-medium flex items-center gap-4 m-auto">
									{/* View All <FaArrowRightLong /> */}
									{t("viewAll")} <FaArrowRightLong />
								</button>
							</Link>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}

export default OurProducts;

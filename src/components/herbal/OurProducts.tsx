"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import styles from "@/styles/Herbal.module.css";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import OurProductCard from "./OurProductCard";
import { useLocale, useTranslations } from "next-intl";
import { getHerbalProducts } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import ProductLoader from "../ui/loader/ProductLoader";

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

	const { isLoading, error, data } = useQuery({
		queryKey: ["getHerbalProducts"],
		queryFn: getHerbalProducts,
	});

	if (error)
		return (
			<div className="text-center text-xl font-md py-8">
				Something went wrong. Please reload
			</div>
		);

	return (
		<div>
			<p className="font-medium text-2xl text-herbalPrimary uppercase text-center py-16">
				{/* Our Products */}
				{t("ourProducts")}
			</p>
			<div className={`${styles.background2} overflow-hidden`}>
				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={slideInAnimationTop}
				>
					<div className="container mx-auto py-10 px-10 max-md:px-1">
						<div className="flex flex-wrap flex-col md:flex-row items-center gap-12 justify-center px-1 md:px-0 max-md:justify-between">
							{isLoading ? (
								<ProductLoader />
							) : (
								data?.slice(0, 8).map((product: any, index: number) => (
									<Link
										href={`/${locale}/products/${product?.MEDICINE_ID}`}
										key={index}
									>
										<OurProductCard
											src={`https://www.drug-international.com/${product?.MEDICINE_IMAGES[0]}`}
											title={product?.MEDICINE_NAME}
										/>
									</Link>
								))
							)}
						</div>
						<div className="pt-16">
							<Link href={`/${locale}/products/all-products?id=2`}>
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

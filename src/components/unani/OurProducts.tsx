/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import styles from "@/styles/Unani.module.css";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getUnaniProducts } from "@/api/api";
import Loader from "../ui/loader/Loader";

function OurProducts() {
	const t = useTranslations("Unani");

	const slideInAnimationTop = {
		hidden: { opacity: 0, y: 300 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: true });
	const locale = useLocale();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	const { isLoading, error, data } = useQuery({
		queryKey: ["getUnaniProducts"],
		queryFn: getUnaniProducts,
	});

	if (error)
		return (
			<div className="text-center text-xl font-md py-8">
				Something went wrong. Please reload
			</div>
		);

	return (
		<div className="font-medium">
			<p className="bg-[#159A48] text-white py-12 text-3xl text-center uppercase">
				{/* Our Products */}
				{t("ourProducts")}
			</p>
			<div className={`${styles.background2} py-32`}>
				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={slideInAnimationTop}
				>
					<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-y-12">
						{isLoading ? (
							<Loader />
						) : (
							data?.slice(0, 9).map((product: any, index: number) => (
								<div
									className="flex flex-col justify-center items-center mx-auto group"
									key={index}
								>
									<div className="bg-white rounded-md mb-4 h-[300px] w-[300px] flex items-center justify-center overflow-hidden">
										<img
											src={`https://www.drug-international.com/${product?.MEDICINE_IMAGES[0]}`}
											// width={300}
											// height={300}
											alt={product.MEDICINE_NAME}
											className="mx-auto h-full max-h-[260px] w-auto group-hover:scale-105 transition-all"
										/>
									</div>
									<div className="mb-6 text-center">
										<p className="text-2xl text-[#04672A] uppercase">
											{product.MEDICINE_NAME}
										</p>
									</div>
									<Link href={`/${locale}/products/${product.MEDICINE_ID}`}>
										<button className="mx-auto bg-[#159A48] text-base py-3 px-5 text-white rounded-md">
											View Product
										</button>
									</Link>
								</div>
							))
						)}
					</div>
				</motion.div>
				<div>
					<Link href={`/${locale}/products/all-products?id=3`}>
						<button className="flex items-center justify-center w-full pt-20 gap-4 text-[#04672A]">
							{/* View All <FaArrowRightLong /> */}
							{t("viewAll")} <FaArrowRightLong />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default OurProducts;

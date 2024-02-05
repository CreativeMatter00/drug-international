"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SpecializedProductCard from "./SpecializedProductCard";
import { useQuery } from "@tanstack/react-query";
import { getSpecializedProducts } from "@/api/api";
import { DNA } from "react-loader-spinner";

function SpecializedProducts() {
	const slideInAnimationRight = {
		hidden: { opacity: 0, x: -300 },
		visible: { opacity: 1, x: 0, transition: { duration: 1 } },
	};

	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: true });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	const breakpoints = {
		1200: {
			slidesPerView: 6,
			spaceBetween: 30,
		},
		// when window width is >= 768px (PC or laptop)
		768: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		// when window width is < 768px (mobile)
		0: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
	};

	const { isLoading, error, data } = useQuery({
		queryKey: ["specializedProducts"],
		queryFn: getSpecializedProducts,
	});

	if (error) {
		return (
			<p className="text-center text-lg font-medium">
				Something went wrong. Please reload the page.
			</p>
		);
	}

	return (
		<div className="py-12">
			<div className="text-center font-semibold text-4xl pb-12 uppercase">
				Specialized Products
			</div>
			<div className="bg-[#E4E4E6] py-8 min-h-[300px]">
				{isLoading ? (
					<div className="flex items-center justify-center">
						<DNA
							visible={true}
							height="400"
							width="400"
							ariaLabel="dna-loading"
							wrapperStyle={{}}
							wrapperClass="dna-wrapper"
						/>
					</div>
				) : (
					<motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={slideInAnimationRight}
					>
						<Swiper
							breakpoints={breakpoints}
							spaceBetween={30}
							centeredSlides={true}
							initialSlide={1}
							pagination={{
								clickable: true,
							}}
						>
							{data?.map((product: any) => (
								<SwiperSlide key={product.SPECIAL_ID}>
									<SpecializedProductCard
										src={product.INSERT_FILES}
										title={product.SPECIAL_NAME}
										id={product.SPECIAL_ID}
										// description={product.description}
										// link={product.link}
									/>
								</SwiperSlide>
							))}
							{/* <SwiperSlide>
								<Link href="/product-category/soft-capsule">
									<SpecializedProductCard
										src="/assets/images/home/specialized/capsule.png"
										title="Soft Capsule"
									/>
								</Link>
							</SwiperSlide>
							 */}
						</Swiper>
					</motion.div>
				)}
			</div>
		</div>
	);
}

export default SpecializedProducts;

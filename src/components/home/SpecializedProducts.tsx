"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SpecializedProductCard from "./SpecializedProductCard";
import { useQuery } from "@tanstack/react-query";
import { getSpecializedProducts } from "@/api/api";
import { DNA } from "react-loader-spinner";
import { useTranslations } from "next-intl";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function SpecializedProducts() {
	const t = useTranslations("Home");

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
			<div className="text-center text-xl font-md py-8">
				Something went wrong. Please reload
			</div>
		);
	}

	return (
		<div className="py-12">
			<div className="text-center font-semibold text-3xl md:text-4xl pb-12 uppercase">
				{/* Specialized Products */}
				{t("specializedProductsTitle")}
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
						<div className="container mx-auto">
							<Swiper
								breakpoints={breakpoints}
								spaceBetween={30}
								// centeredSlides={true}
								modules={[Navigation]}
								loop={true}
								navigation={{
									nextEl: ".navigation-next-el",
									prevEl: ".navigation-prev-el",
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
								<button className="navigation-prev-el absolute left-4 top-1/2 z-10 cursor-pointer bg-primary hover:bg-hoverPrimary text-white text-2xl rounded-full p-2">
									<IoIosArrowBack />
								</button>

								<button className="navigation-next-el absolute right-4 top-1/2 z-10 cursor-pointer bg-primary hover:bg-hoverPrimary text-white text-2xl rounded-full p-2">
									<IoIosArrowForward />
								</button>
							</Swiper>
						</div>
					</motion.div>
				)}
			</div>
		</div>
	);
}

export default SpecializedProducts;

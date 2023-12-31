"use client";

import Image from "next/image";
import styles from "@/styles/Herbal.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
	return (
		<div
			className={`min-h-screen flex items-center justify-center ${styles.background1}`}
		>
			<div className="container mx-auto flex flex-col md:flex-row gap-8">
				<div className="w-full md:w-1/2 px-4 md:px-0">
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						loop={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
					>
						<SwiperSlide>
							<Image
								src="/assets/images/herbal/slider/1.png"
								width={500}
								height={500}
								alt="herbal"
								className="mx-auto"
							/>
						</SwiperSlide>

						<SwiperSlide>
							<Image
								src="/assets/images/herbal/slider/2.png"
								width={500}
								height={500}
								alt="herbal"
								className="mx-auto"
							/>
						</SwiperSlide>

						<SwiperSlide>
							<Image
								src="/assets/images/herbal/slider/3.png"
								width={500}
								height={500}
								alt="herbal"
								className="mx-auto"
							/>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="w-full px-4 pb-4 md:w-1/2 md:px-0 text-white">
					<p className="font-medium text-3xl md:font-semibold md:text-5xl md:leading-[60px] uppercase mb-4">
						Discover Nature&apos;s
						<br />
						Healing Touch
					</p>
					<p className="text-base md:text-lg mb-16">
						Herbal Innovations for a healthier tomorrow with <br /> Drug
						International Herbal Ltd
					</p>

					<button className="bg-[#FBEEE2] text-herbalPrimary font-medium px-5 py-3 rounded-md text-sm flex items-center gap-2 uppercase transition-all hover:scale-110">
						See Our Products <FaArrowRightLong />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;

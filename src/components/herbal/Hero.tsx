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
			className={`h-screen flex items-center justify-center ${styles.background}`}
		>
			<div className="container mx-auto flex gap-8">
				<div className="w-1/2">
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

				<div className="w-1/2 text-white">
					<p className="font-semibold text-5xl leading-[60px] uppercase mb-4">
						Discover Nature&apos;s
						<br />
						Healing Touch
					</p>
					<p className="text-lg mb-16">
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

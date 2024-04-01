"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Lottie from "lottie-react";
import animation from "../../../public/assets/animation/beehive-2.json";

import Image from "next/image";
import styles from "@/styles/Herbal.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

function Hero() {
	const t = useTranslations("Herbal");
	const locale = useLocale();
	const slideInAnimationRight = {
		hidden: { opacity: 0, x: 300 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
	};

	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: true });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<div
			className={`relative h-screen max-h-[1200px] flex items-center justify-center ${styles.background1}`}
		>
			<div className="absolute w-[300px] top-0 right-0 hidden lg:block">
				<Lottie animationData={animation} loop={true} />
			</div>
			<div className="container mx-auto flex flex-col md:flex-row md:items-center gap-8 z-10">
				<div className="w-full md:w-1/2 px-4 md:px-0">
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						loop={true}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
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
				{/* <video
					autoPlay={true}
					loop={true}
					muted={true}
					playsInline={true}
					className="absolute top-0 right-0"
				>
					<source src="/assets/videoes/honeycomb.mp4" type="video/mp4" />
				</video> */}
				{/* <Image
					src="/assets/videoes/honeycomb-2.gif"
					width={200}
					height={200}
					alt="honeycomb"
					className="absolute top-0 right-0"
				/> */}

				<div className="w-full px-4 pb-4 md:w-1/2 md:px-0 text-white">
					<motion.div
						ref={ref}
						initial="hidden"
						animate={controls}
						variants={slideInAnimationRight}
					>
						<p
							className="font-medium text-3xl md:font-semibold md:text-5xl md:leading-[60px] uppercase mb-4"
							dangerouslySetInnerHTML={{ __html: t.raw("heroTitle") }}
						>
							{/* Discover Nature&apos;s
              <br />
              Healing Touch */}
						</p>
						<p
							className="text-base md:text-lg mb-16 uppercase"
							dangerouslySetInnerHTML={{ __html: t.raw("heroSubTitle") }}
						>
							{/* Herbal Innovations for a healthier tomorrow with <br /> Drug
              International Herbal Ltd */}
						</p>

						<Link href={`/${locale}/products/all-products?id=2`}>
							<button className="bg-[#FBEEE2] text-herbalPrimary font-medium px-5 py-3 rounded-md text-sm flex items-center gap-2 uppercase transition-all hover:scale-110">
								{/* See Our Products <FaArrowRightLong /> */}
								{t("heroButton")} <FaArrowRightLong />
							</button>
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Hero;

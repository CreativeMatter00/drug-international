"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonPrimary from "../ui/button/ButtonPrimary";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Hero() {
	const t = useTranslations("Home");

	return (
		<div className="relative container px-4 lg:-mt-4 mx-auto mb-8 overflow-hidden min-h-screen">
			<div className="flex flex-col min-h-screen gap-4 md:flex-row">
				{/* <div className="flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
            }}
          >
            <Image
              src="/assets/images/home/cap.jpg"
              height={468}
              width={624}
              alt="hero"
            />
          </motion.div>
        </div> */}
				<div className="flex items-center justify-center w-full md:w-1/2 px-4 md:px-0">
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						effect={"fade"}
						loop={true}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
						}}
						modules={[EffectFade, Autoplay]}
					>
						<SwiperSlide>
							<Image
								src="/assets/images/home/hero/1.jpg"
								width={600}
								height={450}
								sizes="(min-width: 1300px) 600px, (min-width: 1040px) 496px, (min-width: 780px) 368px, (min-width: 680px) 576px, calc(94.44vw - 47px)"
								alt="herbal"
								className="mx-auto"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src="/assets/images/home/hero/2.jpg"
								width={600}
								height={450}
								sizes="(min-width: 1300px) 600px, (min-width: 1040px) 496px, (min-width: 780px) 368px, (min-width: 680px) 576px, calc(94.44vw - 47px)"
								alt="herbal"
								className="mx-auto"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src="/assets/images/home/hero/3.jpg"
								width={600}
								height={450}
								sizes="(min-width: 1300px) 600px, (min-width: 1040px) 496px, (min-width: 780px) 368px, (min-width: 680px) 576px, calc(94.44vw - 47px)"
								alt="herbal"
								className="mx-auto"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src="/assets/images/home/hero/4.jpg"
								width={600}
								height={450}
								sizes="(min-width: 1300px) 600px, (min-width: 1040px) 496px, (min-width: 780px) 368px, (min-width: 680px) 576px, calc(94.44vw - 47px)"
								alt="herbal"
								className="mx-auto"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src="/assets/images/home/hero/5.jpg"
								width={600}
								height={450}
								sizes="(min-width: 1300px) 600px, (min-width: 1040px) 496px, (min-width: 780px) 368px, (min-width: 680px) 576px, calc(94.44vw - 47px)"
								alt="herbal"
								className="mx-auto"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src="/assets/images/home/hero/6.jpg"
								width={600}
								height={450}
								sizes="(min-width: 1300px) 600px, (min-width: 1040px) 496px, (min-width: 780px) 368px, (min-width: 680px) 576px, calc(94.44vw - 47px)"
								alt="herbal"
								className="mx-auto"
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="flex items-center justify-center text-right font-medium">
					<motion.div
						initial={{ x: 800 }}
						animate={{ x: 0 }}
						transition={{
							duration: 1,
						}}
					>
						<h1 className="text-5xl uppercase text-textPrimary mb-10">
							{/* Better life through
							<br />
							Better <span className="text-primary"> Medicine </span> */}
							{t("heroTitle")}
						</h1>
						<p className="text-textPrimary text-sm mb-20">
							{/* Drug International Limited was incorporated under the Registrar of
							Joint Stock Companies in 1974 as a Private Limited Company. The
							company commenced formulation and production in 1983 and emerged
							as a pioneer in Bangladesh for adding a state of the art oral
							solid dosage plant. */}
							{t("heroSubtitle")}
						</p>
						<div className="ml-auto w-fit">
							<Link href="/products">
								<ButtonPrimary> SEE OUR PRODUCTS </ButtonPrimary>
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Hero;

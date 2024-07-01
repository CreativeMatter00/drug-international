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
import LatestProductsCard from "./LatestProductsCard";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function LatestProducts() {
	const t = useTranslations("Home");
	const locale = useLocale();

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
		768: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		0: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
	};

	return (
		<div className="min-h-[560px] mb-12">
			<h1 className="text-3xl md:text-4xl font-semibold text-textPrimary uppercase text-center mb-12 ">
				{t("latestProductTitle")}
			</h1>

			<motion.div
				ref={ref}
				initial="hidden"
				animate={controls}
				variants={slideInAnimationRight}
			>
				<div className="container mx-auto">
					<Swiper
						breakpoints={breakpoints}
						spaceBetween={120}
						// centeredSlides={true}
						modules={[Navigation]}
						loop={true}
						navigation={{
							nextEl: ".navigation-next-el",
							prevEl: ".navigation-prev-el",
						}}
					>
						<SwiperSlide>
							<Link href={`/${locale}/products/1094`}>
								<LatestProductsCard
									src="https://www.drug-international.com/uploads/product_images/Toposar50mg.jpg"
									title="Toposar"
									genericName="Etoposide"
									theraputicName="Oncology"
								/>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href={`/${locale}/products/1154`}>
								<LatestProductsCard
									src="https://www.drug-international.com/uploads/product_images/Dobixin_01.jpg"
									title="Dobixin"
									genericName="Doxorubicin"
									theraputicName="Oncology"
								/>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href={`/${locale}/products/1215`}>
								<LatestProductsCard
									src="https://www.drug-international.com/uploads/product_images/Mylostat.jpg"
									title="Mylostat Capsule"
									genericName="Hydroxyurea"
									theraputicName="Oncology"
								/>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href={`/${locale}/products/1311`}>
								<LatestProductsCard
									src="https://www.drug-international.com/uploads/product_images/15699998851522141958Varox.jpg%20(2).jpg"
									title="Varox"
									genericName="Rivaroxaban"
									theraputicName="Cardiovascular"
								/>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href={`/${locale}/products/1313`}>
								<LatestProductsCard
									src="https://www.drug-international.com/uploads/product_images/1531116782Sonib%20-c.jpg"
									title="Sonib"
									genericName="Sorafenib"
									theraputicName="Oncology"
								/>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href={`/${locale}/products/1318`}>
								<LatestProductsCard
									src="https://www.drug-international.com/uploads/product_images/1525760112Depomed_4.jpg"
									title="Depomed"
									genericName="Methylprednisolone"
									theraputicName="Steroid"
								/>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href={`/${locale}/products/1319`}>
								<LatestProductsCard
									src="https://www.drug-international.com/uploads/product_images/1525760942Ontaxel_30.jpg"
									title="Ontaxel-30"
									genericName="Paclitaxel"
									theraputicName="Oncology"
								/>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href={`/${locale}/products/1321`}>
								<LatestProductsCard
									src="https://www.drug-international.com/uploads/product_images/1525948609Foly_tab.jpg"
									title="Foly"
									genericName="Folinic"
									theraputicName="Vitamin"
								/>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href={`/${locale}/products/1322`}>
								<LatestProductsCard
									src="https://www.drug-international.com/uploads/product_images/1526549123Dezco.jpg"
									title="Dezco"
									genericName="Deflazacort"
									theraputicName="Steroid"
								/>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href={`/${locale}/products/1324`}>
								<LatestProductsCard
									src="https://www.drug-international.com/uploads/product_images/1528785317Foly%20_%20In.jpg.jpg"
									title="Foly Injection"
									genericName="Folinic"
									theraputicName="Steroid"
								/>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href={`/${locale}/products/1331`}>
								<LatestProductsCard
									src="https://www.drug-international.com/uploads/product_images/1534563816Epiruba_50c.jpg"
									title="Epiruba-50"
									genericName="Epirubicin"
									theraputicName="Oncology"
								/>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link href={`/${locale}/products/1340`}>
								<LatestProductsCard
									src="https://www.drug-international.com/uploads/product_images/1537877176Mes-D-%20Carton%20Pic.jpg"
									title="Mes-D"
									genericName="Mesna"
									theraputicName="Oncology"
								/>
							</Link>
						</SwiperSlide>
						<button className="navigation-prev-el absolute left-4 top-1/2 z-10 cursor-pointer bg-primary hover:bg-hoverPrimary text-white text-2xl rounded-full p-2">
							<IoIosArrowBack />
						</button>

						<button className="navigation-next-el absolute right-4 top-1/2 z-10 cursor-pointer bg-primary hover:bg-hoverPrimary text-white text-2xl rounded-full p-2">
							<IoIosArrowForward />
						</button>
					</Swiper>
				</div>
			</motion.div>
		</div>
	);
}

export default LatestProducts;

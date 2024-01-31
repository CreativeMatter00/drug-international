"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import LatestProductsCard from "./LatestProductsCard";

function LatestProducts() {
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

  return (
    <div className="min-h-[560px] mb-12">
      <h1 className="text-3xl font-semibold text-textPrimary uppercase text-center mb-12 ">
        Latest Products
      </h1>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={slideInAnimationRight}
      >
        <Swiper
          breakpoints={breakpoints}
          spaceBetween={120}
          centeredSlides={true}
          initialSlide={1}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <LatestProductsCard
              src="https://www.drug-international.com/uploads/product_images/Toposar50mg.jpg"
              title="Toposar"
              genericName="Etoposide"
              theraputicName="Oncology"
            />
          </SwiperSlide>

          <SwiperSlide>
            <LatestProductsCard
              src="https://www.drug-international.com/uploads/product_images/Dobixin_01.jpg"
              title="Dobixin"
              genericName="Doxorubicin"
              theraputicName="Oncology"
            />
          </SwiperSlide>

          <SwiperSlide>
            <LatestProductsCard
              src="https://www.drug-international.com/uploads/product_images/Mylostat.jpg"
              title="Mylostat Capsule"
              genericName="Hydroxyurea"
              theraputicName="Oncology"
            />
          </SwiperSlide>

          <SwiperSlide>
            <LatestProductsCard
              src="https://www.drug-international.com/uploads/product_images/15699998851522141958Varox.jpg%20(2).jpg"
              title="Varox"
              genericName="Rivaroxaban"
              theraputicName="Cardiovascular"
            />
          </SwiperSlide>

          <SwiperSlide>
            <LatestProductsCard
              src="https://www.drug-international.com/uploads/product_images/1531116782Sonib%20-c.jpg"
              title="Sonib"
              genericName="Sorafenib"
              theraputicName="Oncology"
            />
          </SwiperSlide>

          <SwiperSlide>
            <LatestProductsCard
              src="https://www.drug-international.com/uploads/product_images/1525760112Depomed_4.jpg"
              title="Depomed"
              genericName="Methylprednisolone"
              theraputicName="Steroid"
            />
          </SwiperSlide>

          <SwiperSlide>
            <LatestProductsCard
              src="https://www.drug-international.com/uploads/product_images/1525760942Ontaxel_30.jpg"
              title="Ontaxel-30"
              genericName="Paclitaxel"
              theraputicName="Oncology"
            />
          </SwiperSlide>

          <SwiperSlide>
            <LatestProductsCard
              src="https://www.drug-international.com/uploads/product_images/1525948609Foly_tab.jpg"
              title="Foly"
              genericName="Folinic"
              theraputicName="Vitamin"
            />
          </SwiperSlide>

          <SwiperSlide>
            <LatestProductsCard
              src="https://www.drug-international.com/uploads/product_images/1526549123Dezco.jpg"
              title="Dezco"
              genericName="Deflazacort"
              theraputicName="Steroid"
            />
          </SwiperSlide>

          <SwiperSlide>
            <LatestProductsCard
              src="https://www.drug-international.com/uploads/product_images/1528785317Foly%20_%20In.jpg.jpg"
              title="Foly Injection"
              genericName="Folinic"
              theraputicName="Steroid"
            />
          </SwiperSlide>

          <SwiperSlide>
            <LatestProductsCard
              src="https://www.drug-international.com/uploads/product_images/1534563816Epiruba_50c.jpg"
              title="Epiruba-50"
              genericName="Epirubicin"
              theraputicName="Oncology"
            />
          </SwiperSlide>

          <SwiperSlide>
            <LatestProductsCard
              src="https://www.drug-international.com/uploads/product_images/1537877176Mes-D-%20Carton%20Pic.jpg"
              title="Mes-D"
              genericName="mesna"
              theraputicName="Oncology"
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
}

export default LatestProducts;

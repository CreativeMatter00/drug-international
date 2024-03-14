"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

function Oncology() {
  const t = useTranslations("Facilities");

  const slideInAnimationTop = {
    hidden: { opacity: 0, y: 400 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInAnimationTop}
    >
      <p className="font-medium text-3xl uppercase text-primary mb-10">
        {/* Oncology */}
        {t("oncology")}
      </p>

      <SlideshowLightbox className="container grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto ">
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_1.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_7.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_9.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_12.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_13.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_14.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_15.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_16.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_17.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_18.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_20.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_21.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_22.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_23.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_33.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_34.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_35.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_36.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology-01.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology-03.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology-04.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology-05.jpg"
        />
        <img
          className="w-full rounded-lg h-48"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/oncology/oncology_box.jpg"
        />
      </SlideshowLightbox>

      <div className="font-medium text-base text-textSecondary mt-8">
        <p className="">{t("oncologyDescription")}</p>
      </div>
    </motion.div>
  );
}

export default Oncology;

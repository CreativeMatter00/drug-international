"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

function Unit3() {
  const t = useTranslations("Facilities");

  const slideInAnimationTop = {
    hidden: { opacity: 0, y: 400 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleContextMenu = (event: any) => {
    event.preventDefault();
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInAnimationTop}
    >
      <p className="font-medium text-3xl uppercase text-primary mb-10">
        {t("unit3")}
      </p>

      <SlideshowLightbox className="container grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
        <img
          className="w-full rounded-lg h-96"
          //   src="https://source.unsplash.com/pAKCx4y2H6Q/1400x1200"
          src="/assets/images/facilities/unit-3/unint_3_1.jpg"
        />
        <img
          className="w-full rounded-lg h-96"
          src="/assets/images/facilities/unit-3/unint_3_2.jpg"
        />
        <img
          className="w-full rounded-lg h-96"
          src="/assets/images/facilities/unit-3/unint_3-311111.jpg"
        />
        <img
          className="w-full rounded-lg h-96"
          src="/assets/images/facilities/unit-3/unint_3_4.jpg"
        />
        <img
          className="w-full rounded-lg h-96"
          src="/assets/images/facilities/unit-3/unint_3_5.jpg"
        />
      </SlideshowLightbox>

      <div className="font-medium text-base text-textSecondary">
        <p className=""></p>
      </div>
    </motion.div>
  );
}

export default Unit3;

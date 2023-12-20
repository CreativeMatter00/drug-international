"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import LatestProductsCard from "./LatestProductsCard";

function LatestProducts() {
  const breakpoints = {
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

      <Swiper
        breakpoints={breakpoints}
        spaceBetween={120}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <LatestProductsCard
            src="/assets/images/home/latest/1.solina.png"
            title="solina"
            genericName="solifenacin"
            theraputicName="Urology preparation"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestProductsCard
            src="/assets/images/home/latest/2.geludrox.png"
            title="geludrox"
            genericName="solifenacin"
            theraputicName="Urology preparation"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestProductsCard
            src="/assets/images/home/latest/3.ivtin.png"
            title="ivtin"
            genericName="solifenacin"
            theraputicName="Urology preparation"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestProductsCard
            src="/assets/images/home/latest/4.famotid.png"
            title="famotid"
            genericName="solifenacin"
            theraputicName="Urology preparation"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestProductsCard
            src="/assets/images/home/latest/5.mypart.png"
            title="mypart"
            genericName="solifenacin"
            theraputicName="Urology preparation"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestProductsCard
            src="/assets/images/home/latest/6.ocuberry.png"
            title="ocuberry"
            genericName="solifenacin"
            theraputicName="Urology preparation"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestProductsCard
            src="/assets/images/home/latest/7.menoherb.png"
            title="menoherb"
            genericName="solifenacin"
            theraputicName="Urology preparation"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestProductsCard
            src="/assets/images/home/latest/8.dilavir.png"
            title="dilavir"
            genericName="solifenacin"
            theraputicName="Urology preparation"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestProductsCard
            src="/assets/images/home/latest/9.favira.png"
            title="favira"
            genericName="solifenacin"
            theraputicName="Urology preparation"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LatestProductsCard
            src="/assets/images/home/latest/10.charm.png"
            title="charm"
            genericName="solifenacin"
            theraputicName="Urology preparation"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default LatestProducts;

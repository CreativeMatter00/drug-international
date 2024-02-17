"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import styles from "@/styles/Unani.module.css";
import Image from "next/image";
import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";
import { useLocale } from "next-intl";

function OurProducts() {
  const slideInAnimationTop = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const locale = useLocale();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="font-medium">
      <p className="bg-[#159A48] text-white py-12 text-3xl text-center uppercase">
        Our Products
      </p>
      <div className={`${styles.background2} py-32`}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideInAnimationTop}
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-y-12">
            <div className="flex flex-col justify-center items-center mx-auto group">
              <div className="bg-[#BDE9CE] rounded-md mb-4 h-[300px] w-[300px]">
                <Image
                  src="/assets/images/unani/products/1.png"
                  width={300}
                  height={300}
                  alt="D-Aloevera"
                  className="mx-auto group-hover:scale-105 transition-all"
                />
              </div>
              <div className="mb-6 text-center">
                <p className="text-2xl text-[#04672A] uppercase"> D-ALOVERA </p>
                <p className="text-base text-[#49CF7C] capitalize">
                  Sharbat Gheekowar
                </p>
              </div>
              <button className="mx-auto bg-[#159A48] text-base py-3 px-5 text-white rounded-md">
                View Product
              </button>
            </div>

            <div className="flex flex-col justify-center items-center mx-auto group">
              <div className="bg-[#BDE9CE] rounded-md mb-4 h-[300px] w-[300px]">
                <Image
                  src="/assets/images/unani/products/2.png"
                  width={300}
                  height={300}
                  alt="Amlabery"
                  className="mx-auto group-hover:scale-105 transition-all"
                />
              </div>
              <div className="mb-6 text-center">
                <p className="text-2xl text-[#04672A] uppercase"> Amlabery </p>
                <p className="text-base text-[#49CF7C] capitalize">
                  Sharbat Amla
                </p>
              </div>
              <button className="mx-auto bg-[#159A48] text-base py-3 px-5 text-white rounded-md">
                View Product
              </button>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto group">
              <div className="bg-[#BDE9CE] rounded-md mb-4 h-[300px] w-[300px]">
                <Image
                  src="/assets/images/unani/products/3.png"
                  width={300}
                  height={300}
                  alt="Naturovit"
                  className="mx-auto group-hover:scale-105 transition-all"
                />
              </div>
              <div className="mb-6 text-center">
                <p className="text-2xl text-[#04672A] uppercase"> Naturovit </p>
                <p className="text-base text-[#49CF7C] capitalize">
                  Syrup Misali
                </p>
              </div>
              <button className="mx-auto bg-[#159A48] text-base py-3 px-5 text-white rounded-md">
                View Product
              </button>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto group">
              <div className="bg-[#BDE9CE] rounded-md mb-4 h-[300px] w-[300px]">
                <Image
                  src="/assets/images/unani/products/4.png"
                  width={300}
                  height={300}
                  alt="Livro"
                  className="mx-auto group-hover:scale-105 transition-all"
                />
              </div>
              <div className="mb-6 text-center">
                <p className="text-2xl text-[#04672A] uppercase"> Livro </p>
                <p className="text-base text-[#49CF7C] capitalize">
                  Syrup Deenar
                </p>
              </div>
              <button className="mx-auto bg-[#159A48] text-base py-3 px-5 text-white rounded-md">
                View Product
              </button>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto group">
              <div className="bg-[#BDE9CE] rounded-md mb-4 h-[300px] w-[300px]">
                <Image
                  src="/assets/images/unani/products/5.png"
                  width={300}
                  height={300}
                  alt="Hemosaf"
                  className="mx-auto group-hover:scale-105 transition-all"
                />
              </div>
              <div className="mb-6 text-center">
                <p className="text-2xl text-[#04672A] uppercase"> Hemosaf </p>
                <p className="text-base text-[#49CF7C] capitalize">
                  Syrup Musaffi
                </p>
              </div>
              <button className="mx-auto bg-[#159A48] text-base py-3 px-5 text-white rounded-md">
                View Product
              </button>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto group">
              <div className="bg-[#BDE9CE] rounded-md mb-4 h-[300px] w-[300px]">
                <Image
                  src="/assets/images/unani/products/6.png"
                  width={300}
                  height={300}
                  alt="Jarira"
                  className="mx-auto group-hover:scale-105 transition-all"
                />
              </div>
              <div className="mb-6 text-center">
                <p className="text-2xl text-[#04672A] uppercase"> Jarira </p>
                <p className="text-base text-[#49CF7C] capitalize">
                  Sharbat Gheekowar
                </p>
              </div>
              <button className="mx-auto bg-[#159A48] text-base py-3 px-5 text-white rounded-md">
                View Product
              </button>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto group">
              <div className="bg-[#BDE9CE] rounded-md mb-4 h-[300px] w-[300px]">
                <Image
                  src="/assets/images/unani/products/7.png"
                  width={300}
                  height={300}
                  alt="D-Sefa"
                  className="mx-auto group-hover:scale-105 transition-all"
                />
              </div>
              <div className="mb-6 text-center">
                <p className="text-2xl text-[#04672A] uppercase"> D-Sefa </p>
                <p className="text-base text-[#49CF7C] capitalize">
                  Black Seed Oil
                </p>
              </div>
              <button className="mx-auto bg-[#159A48] text-base py-3 px-5 text-white rounded-md">
                View Product
              </button>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto group">
              <div className="bg-[#BDE9CE] rounded-md mb-4 h-[300px] w-[300px]">
                <Image
                  src="/assets/images/unani/products/8.png"
                  width={300}
                  height={300}
                  alt="Ridex"
                  className="mx-auto group-hover:scale-105 transition-all"
                />
              </div>
              <div className="mb-6 text-center">
                <p className="text-2xl text-[#04672A] uppercase"> Ridex </p>
                <p className="text-base text-[#49CF7C] capitalize">
                  Habbe Nishat
                </p>
              </div>
              <button className="mx-auto bg-[#159A48] text-base py-3 px-5 text-white rounded-md">
                View Product
              </button>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto group">
              <div className="bg-[#BDE9CE] rounded-md mb-4 h-[300px] w-[300px]">
                <Image
                  src="/assets/images/unani/products/9.png"
                  width={300}
                  height={300}
                  alt="Zurid"
                  className="mx-auto group-hover:scale-105 transition-all"
                />
              </div>
              <div className="mb-6 text-center">
                <p className="text-2xl text-[#04672A] uppercase"> Zurid </p>
                <p className="text-base text-[#49CF7C] capitalize">
                  Syrup Buzuri
                </p>
              </div>
              <button className="mx-auto bg-[#159A48] text-base py-3 px-5 text-white rounded-md">
                View Product
              </button>
            </div>
          </div>
        </motion.div>
        <div>
          <Link href={`/${locale}/products/all-products?id=3`}>
            <button className="flex items-center justify-center w-full pt-20 gap-4 text-[#04672A]">
              View All <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonPrimary from "../ui/button/ButtonPrimary";

function Hero() {
  return (
    <div className="container px-4 mx-auto mb-8 overflow-hidden min-h-screen">
      <div className="grid grid-cols-1 min-h-screen md:grid-cols-2">
        <div className="flex items-center justify-center">
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
        </div>
        <div className="flex items-center justify-center text-right font-medium">
          <motion.div
            initial={{ x: 800 }}
            animate={{ x: 0 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          >
            <h1 className="text-5xl uppercase text-textPrimary mb-10">
              Better life through
              <br />
              Better <span className="text-primary"> Medicine </span>
            </h1>
            <p className="text-textPrimary text-sm mb-20">
              Drug International Limited was incorporated under the Registrar of
              Joint Stock Companies in 1974 as a Private Limited Company. The
              company commenced formulation and production in 1983 and emerged
              as a pioneer in Bangladesh for adding a state of the art oral
              solid dosage plant.
            </p>
            <div className="ml-auto w-fit">
              <ButtonPrimary> SEE OUR PRODUCTS </ButtonPrimary>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

/* eslint-disable react/no-unescaped-entities */

"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Banner from "../ui/Banner";

function OurLegacy() {
  const slideInAnimationTop = {
    hidden: { opacity: 0, y: 400 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <div className="relative">
        <Banner src="/assets/images/ourLegacy/banner.png" title="Our Legacy" />

        <div className="relative mt-[-100px] w-full mb-10">
          <div className="container mx-auto bg-white py-8 md:py-14 px-4 md:px-12 rounded-2xl shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.75)]">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={slideInAnimationTop}
            >
              <div className="mb-10 font-medium">
                <p className="text-textSecondary uppercase text-sm mb-2">
                  A Timeless Odyssey:
                </p>
                <p className="text-textPrimary uppercase text-lg">
                  We Are Cultivating Excellence Over the Decades
                </p>
              </div>
              <p className="text-textLight text-base">
                Starting a journey tied to our history, our story is all about
                sticking to being excellent and always moving forward. We began
                small but achieved big things, blending old ways with new
                dreams. With lots of successes, we respect where we came from
                and look forward to breaking limits and creating what's next.
                Our story isn't just a look back; it's proof that we keep going
                strong. Get ready for a story that's both classic and looking
                ahead!
              </p>

              <div className="hidden lg:block container mx-auto w-full h-full font-medium">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2-2 absolute border-[#E4E4E6] h-full border"
                    style={{ left: "50%" }}
                  ></div>

                  <div className="mb-8 flex justify-center gap-4 items-center w-full right-timeline">
                    <div className="order-1 w-5/12 text-right text-primary text-4xl">
                      1974
                    </div>
                    <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-4 h-4 rounded-full"></div>
                    <div className="group order-1 bg-white rounded-lg border border-[#E4E4E6] primaryShadow w-5/12 px-6 py-4 hover:bg-primary hover:transition-all hover:duration-300">
                      <h3 className="mb-4 text-textPrimary text-2xl uppercase group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Company Inception
                      </h3>
                      <p className="text-sm text-textSecondary group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Drug International Limited was founded in 1974, marking
                        the beginning of a journey dedicated to pharmaceutical
                        excellence. The company was incorporated under the
                        Registrar of Joint Stock Companies as a Private Limited
                        Company.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-center gap-4 flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12 text-left text-primary text-4xl">
                      1980
                    </div>

                    <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-4 h-4 rounded-full"></div>

                    <div className="order-1 bg-white rounded-lg border border-[#E4E4E6] primaryShadow w-5/12 px-6 py-4 group hover:bg-primary hover:transition-all hover:duration-300">
                      <h3 className="mb-4 text-textPrimary text-2xl uppercase group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Formulation Initiation
                      </h3>
                      <p className="text-sm text-textSecondary group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Drug International Limited embarked on the formulation
                        and production journey in 1980, laying the groundwork
                        for becoming a pioneer in pharmaceutical manufacturing
                        in Bangladesh.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-center gap-4 items-center w-full right-timeline">
                    <div className="order-1 w-5/12 text-right text-primary text-4xl">
                      1985
                    </div>
                    <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-4 h-4 rounded-full"></div>
                    <div className="order-1 bg-white rounded-lg border border-[#E4E4E6] primaryShadow w-5/12 px-6 py-4 group hover:bg-primary hover:transition-all hover:duration-300">
                      <h3 className="mb-4 text-textPrimary text-2xl uppercase group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Oral Solid Dosage Plant
                      </h3>
                      <p className="text-sm text-textSecondary group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        The year 1985 witnessed a significant milestone with the
                        establishment of a state-of-the-art oral solid dosage
                        plant, solidifying the company's commitment to quality
                        pharmaceuticals.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-center gap-4 flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12 text-left text-primary text-4xl">
                      1990
                    </div>

                    <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-4 h-4 rounded-full"></div>

                    <div className="order-1 bg-white rounded-lg border border-[#E4E4E6] primaryShadow w-5/12 px-6 py-4 group hover:bg-primary hover:transition-all hover:duration-300">
                      <h3 className="mb-4 text-textPrimary text-2xl uppercase group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Soft Gelatin Cap Innovation
                      </h3>
                      <p className="text-sm text-textSecondary group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Drug International Limited achieved a breakthrough in
                        1990 by becoming the first company in Bangladesh to
                        formulate medicines in soft gelatin capsule form,
                        optimizing absorption and retention properties.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-center gap-4 items-center w-full right-timeline">
                    <div className="order-1 w-5/12 text-right text-primary text-4xl">
                      1995
                    </div>
                    <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-4 h-4 rounded-full"></div>
                    <div className="order-1 bg-white rounded-lg border border-[#E4E4E6] primaryShadow w-5/12 px-6 py-4 group hover:bg-primary hover:transition-all hover:duration-300">
                      <h3 className="mb-4 text-textPrimary text-2xl uppercase group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Company Inc. Introduction
                      </h3>
                      <p className="text-sm text-textSecondary group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        In 1995, the company introduced GYNOMIX, a soft gelatin
                        capsule vaginal suppository with anti-bacterial and
                        anti-fungal properties, showcasing innovation in women's
                        healthcare.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-center gap-4 flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12 text-left text-primary text-4xl">
                      2000
                    </div>

                    <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-4 h-4 rounded-full"></div>

                    <div className="order-1 bg-white rounded-lg border border-[#E4E4E6] primaryShadow w-5/12 px-6 py-4 group hover:bg-primary hover:transition-all hover:duration-300">
                      <h3 className="mb-4 text-textPrimary text-2xl uppercase group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Formulation Initiation
                      </h3>
                      <p className="text-sm text-textSecondary group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Drug International Limited embarked on the formulation
                        and production journey in 1980, laying the groundwork
                        for becoming a pioneer in pharmaceutical manufacturing
                        in Bangladesh.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-center gap-4 items-center w-full right-timeline">
                    <div className="order-1 w-5/12 text-right text-primary text-4xl">
                      2005
                    </div>
                    <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-4 h-4 rounded-full"></div>
                    <div className="order-1 bg-white rounded-lg border border-[#E4E4E6] primaryShadow w-5/12 px-6 py-4 group hover:bg-primary hover:transition-all hover:duration-300">
                      <h3 className="mb-4 text-textPrimary text-2xl uppercase group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Pharmaceutical Exportsption
                      </h3>
                      <p className="text-sm text-textSecondary group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Drug International Limited expanded its global footprint
                        in 2000 by exporting pharmaceutical products to numerous
                        countries, contributing to the company's international
                        recognition.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-center gap-4 flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12 text-left text-primary text-4xl">
                      2010
                    </div>

                    <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-4 h-4 rounded-full"></div>

                    <div className="order-1 bg-white rounded-lg border border-[#E4E4E6] primaryShadow w-5/12 px-6 py-4 group hover:bg-primary hover:transition-all hover:duration-300">
                      <h3 className="mb-4 text-textPrimary text-2xl uppercase group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Supply Chain Management
                      </h3>
                      <p className="text-sm text-textSecondary group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        The adoption of unique supply chain management
                        principles in 2005 became a hallmark for Drug
                        International Limited, ensuring optimized versions of
                        medicines and immediate market release.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-center gap-4 items-center w-full right-timeline">
                    <div className="order-1 w-5/12 text-right text-primary text-4xl">
                      2015
                    </div>
                    <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-4 h-4 rounded-full"></div>
                    <div className="order-1 bg-white rounded-lg border border-[#E4E4E6] primaryShadow w-5/12 px-6 py-4 group hover:bg-primary hover:transition-all hover:duration-300">
                      <h3 className="mb-4 text-textPrimary text-2xl uppercase group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Focus on Patient Welfare
                      </h3>
                      <p className="text-sm text-textSecondary group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Drug International Limited reinforced its commitment to
                        patient welfare in 2010, aligning formulating principles
                        to enhance the quality of life for patients and
                        customers.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-center gap-4 flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12 text-left text-primary text-4xl">
                      2024
                    </div>

                    <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-4 h-4 rounded-full"></div>

                    <div className="order-1 bg-white rounded-lg border border-[#E4E4E6] primaryShadow w-5/12 px-6 py-4 group hover:bg-primary hover:transition-all hover:duration-300">
                      <h3 className="mb-4 text-textPrimary text-2xl uppercase group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        Continued Excellence
                      </h3>
                      <p className="text-sm text-textSecondary group-hover:text-white group-hover:transition-all group-hover:duration-300">
                        In 2023, Drug International Limited continues its legacy
                        of excellence, utilizing refined production processes to
                        export pharmaceutical products worldwide, contributing
                        to the well-being of communities globally.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* // * Mobile View  */}

              <div className="block lg:hidden container mx-auto w-full h-full font-medium">
                <div className="relative wrap overflow-hidden py-10 h-full">
                  <div
                    className="mb-8 grid gap-4 items-center w-full right-timeline"
                    style={{ gridTemplateColumns: "1fr 10fr" }}
                  >
                    <div className="text-right text-primary text-4xl">1974</div>

                    <div className="bg-white rounded-lg border border-[#E4E4E6] primaryShadow px-6 py-4">
                      <h3 className="mb-4 text-textPrimary text-xl uppercase">
                        Company Inception
                      </h3>
                      <p className="text-sm text-textSecondary">
                        Drug International Limited was founded in 1974, marking
                        the beginning of a journey dedicated to pharmaceutical
                        excellence. The company was incorporated under the
                        Registrar of Joint Stock Companies as a Private Limited
                        Company.
                      </p>
                    </div>

                    <div className="text-right text-primary text-4xl">1980</div>

                    <div className="bg-white rounded-lg border border-[#E4E4E6] primaryShadow px-6 py-4">
                      <h3 className="mb-4 text-textPrimary text-xl uppercase">
                        Formulation Initiation
                      </h3>
                      <p className="text-sm text-textSecondary">
                        Drug International Limited embarked on the formulation
                        and production journey in 1980, laying the groundwork
                        for becoming a pioneer in pharmaceutical manufacturing
                        in Bangladesh.
                      </p>
                    </div>

                    <div className="text-right text-primary text-4xl">1985</div>

                    <div className="bg-white rounded-lg border border-[#E4E4E6] primaryShadow px-6 py-4">
                      <h3 className="mb-4 text-textPrimary text-xl uppercase">
                        Oral Solid Dosage Plant
                      </h3>
                      <p className="text-sm text-textSecondary">
                        The year 1985 witnessed a significant milestone with the
                        establishment of a state-of-the-art oral solid dosage
                        plant, solidifying the company's commitment to quality
                        pharmaceuticals.
                      </p>
                    </div>

                    <div className="text-right text-primary text-4xl">1990</div>

                    <div className="bg-white rounded-lg border border-[#E4E4E6] primaryShadow px-6 py-4">
                      <h3 className="mb-4 text-textPrimary text-xl uppercase">
                        Soft Gelatin Cap Innovation
                      </h3>
                      <p className="text-sm text-textSecondary">
                        Drug International Limited achieved a breakthrough in
                        1990 by becoming the first company in Bangladesh to
                        formulate medicines in soft gelatin capsule form,
                        optimizing absorption and retention properties.
                      </p>
                    </div>

                    <div className="text-right text-primary text-4xl">1995</div>

                    <div className="bg-white rounded-lg border border-[#E4E4E6] primaryShadow px-6 py-4">
                      <h3 className="mb-4 text-textPrimary text-xl uppercase">
                        Company Inc. Introduction
                      </h3>
                      <p className="text-sm text-textSecondary">
                        In 1995, the company introduced GYNOMIX, a soft gelatin
                        capsule vaginal suppository with anti-bacterial and
                        anti-fungal properties, showcasing innovation in women's
                        healthcare.
                      </p>
                    </div>

                    <div className="text-right text-primary text-4xl">2000</div>

                    <div className="bg-white rounded-lg border border-[#E4E4E6] primaryShadow px-6 py-4">
                      <h3 className="mb-4 text-textPrimary text-xl uppercase">
                        Formulation Initiation
                      </h3>
                      <p className="text-sm text-textSecondary">
                        Drug International Limited embarked on the formulation
                        and production journey in 1980, laying the groundwork
                        for becoming a pioneer in pharmaceutical manufacturing
                        in Bangladesh.
                      </p>
                    </div>

                    <div className="text-right text-primary text-4xl">2005</div>

                    <div className="bg-white rounded-lg border border-[#E4E4E6] primaryShadow px-6 py-4">
                      <h3 className="mb-4 text-textPrimary text-xl uppercase">
                        Pharmaceutical Exportsption
                      </h3>
                      <p className="text-sm text-textSecondary">
                        Drug International Limited expanded its global footprint
                        in 2000 by exporting pharmaceutical products to numerous
                        countries, contributing to the company's international
                        recognition.
                      </p>
                    </div>

                    <div className="text-right text-primary text-4xl">2010</div>

                    <div className="bg-white rounded-lg border border-[#E4E4E6] primaryShadow px-6 py-4">
                      <h3 className="mb-4 text-textPrimary text-xl uppercase">
                        Supply Chain Management
                      </h3>
                      <p className="text-sm text-textSecondary">
                        The adoption of unique supply chain management
                        principles in 2005 became a hallmark for Drug
                        International Limited, ensuring optimized versions of
                        medicines and immediate market release.
                      </p>
                    </div>

                    <div className="text-right text-primary text-4xl">2015</div>

                    <div className="bg-white rounded-lg border border-[#E4E4E6] primaryShadow px-6 py-4">
                      <h3 className="mb-4 text-textPrimary text-xl uppercase">
                        Focus on Patient Welfare
                      </h3>
                      <p className="text-sm text-textSecondary">
                        Drug International Limited reinforced its commitment to
                        patient welfare in 2010, aligning formulating principles
                        to enhance the quality of life for patients and
                        customers.
                      </p>
                    </div>

                    <div className="text-right text-primary text-4xl">2024</div>

                    <div className="bg-white rounded-lg border border-[#E4E4E6] primaryShadow px-6 py-4">
                      <h3 className="mb-4 text-textPrimary text-xl uppercase">
                        Continued Excellence
                      </h3>
                      <p className="text-sm text-textSecondary">
                        In 2023, Drug International Limited continues its legacy
                        of excellence, utilizing refined production processes to
                        export pharmaceutical products worldwide, contributing
                        to the well-being of communities globally.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurLegacy;

/* eslint-disable react/no-unescaped-entities */

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

function Page() {
  const locale = useLocale();
  return (
    <div>
      <div className="pt-20 mb-4">
        <div className="pb-6 border-b-2 border-[#E4E4E6] mb-16">
          <div className="container mx-auto">
            <Link
              href={`/${locale}/news`}
              className="text-primary font-medium flex items-center gap-4 px-4"
            >
              <FaArrowLeftLong /> Go Back
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <p className="font-medium text-primary uppercase mb-6">
            Drug Discoveries
          </p>
          <div className="flex items-center justify-center mb-16">
            <Image
              src="/assets/images/news/1.jpg"
              width={720}
              height={480}
              className="max-h-[480px] w-auto"
              alt="news"
            />
          </div>
          <div>
            <p className="text-textPrimary font-medium text-2xl uppercase mb-10">
              Breakthrough in Cancer Treatment
            </p>
            <p className="text-textPrimary text-base mb-8">
              In a pivotal moment for healthcare, Drug International Limited
              proudly announces a groundbreaking advancement in cancer
              treatment. Our tireless commitment to innovation and patient
              well-being has led to the development of a revolutionary
              pharmaceutical solution that holds immense promise, particularly
              in the realm of advanced cancer care.
              <br />
              <br />
              This breakthrough is the result of years of dedicated research and
              development by our exceptional team of scientists and healthcare
              professionals. The newly unveiled pharmaceutical innovation
              represents a beacon of hope for patients facing the challenges of
              advanced-stage cancers. With a focus on efficacy, safety, and
              patient-centered care, this breakthrough marks a significant
              stride forward in the fight against one of the most formidable
              adversaries in the medical world.
              <br />
              <br />
              The innovation is not just about a new drug; it symbolizes a
              paradigm shift in our approach to cancer treatment. It encompasses
              personalized medicine, targeting specific genetic markers and
              pathways, thereby offering a more tailored and effective
              therapeutic strategy. This precision medicine approach is a
              testament to our commitment to providing treatments that not only
              combat cancer but also enhance the overall quality of life for
              patients.
              <br />
              <br />
              Beyond the scientific achievement, this breakthrough reinforces
              Drug International Limited's dedication to advancing global
              health. We understand the profound impact a cancer diagnosis can
              have on individuals and their families. Therefore, our mission is
              not merely to develop pharmaceuticals but to bring about
              transformative solutions that inspire hope and contribute to a
              future where cancer is more manageable, if not entirely
              conquerable.
              <br />
              <br />
              As we celebrate this milestone, we extend our gratitude to the
              entire healthcare community, patients, and their families who
              inspire and motivate us daily. This breakthrough is a shared
              victory, and we are eager to continue this journey, working
              collaboratively towards a world where cancer is no longer an
              insurmountable challenge but a hurdle we can overcome together.
              <br />
              <br />
              As we celebrate this milestone, we extend our gratitude to the
              entire healthcare community, patients, and their families who
              inspire and motivate us daily. This breakthrough is a shared
              victory, and we are eager to continue this journey, working
              collaboratively towards a world where cancer is no longer an
              insurmountable challenge but a hurdle we can overcome together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

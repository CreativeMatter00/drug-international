"use client";

import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function UpcomingProducts() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-2">
      <div className="">
        <div className="pb-6 border-b-2 border-[#E4E4E6] mb-4">
          <div className="container mx-auto">
            <button
              className="text-textPrimary font-medium flex items-center gap-4 px-4 hover:text-primary"
              onClick={handleBack}
            >
              <FaArrowLeft /> Back
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className=" text-xl font-medium  md:text-justify py-20 max-w-[1024px] p-4 max-md:py-10">
            Drug Int. Ltd represents a promising frontier in healthcare,
            offering innovative treatments for various diseases and conditions.
            Our imminent medicines represent diverse therapeutic modalities
            poised to revolutionize healthcare and improve patient outcomes.
            Through ongoing research and collaboration, we are advancing the
            development and delivery of these innovative treatments to patients.
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingProducts;

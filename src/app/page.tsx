// "use client";

// import CapsuleButton from "@/components/share/CapsuleButton";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { SlSocialLinkedin } from "react-icons/sl";
// import { SlSocialFacebook } from "react-icons/sl";
// import { SlSocialYoutube } from "react-icons/sl";
// import styles from "@/styles/Unani.module.css";

// const page = () => {
//   const img = 'url("gif/ERxI.gif")';
//   const videoSource = "/assets/videoes/capsule.mp4";
//   // const videoSource = "/assets/videoes/capsule.mp4";

//   const x = "-38vh";

//   return (
//     // <div className="bg-[#E4E4E6] futura relative">
//     //   <div className="h-screen overflow-hidden">
//     //     <div className="bg-clip-text bg-cover text-transparent flex h-full w-full uppercase max-lg:relative">
//     //       <div className="h-full w-3/6 text-[75vh] text-right">
//     //         <video
//     //           className="h-full w-full object-cover"
//     //           autoPlay
//     //           loop
//     //           muted
//     //           playsInline
//     //           style={{
//     //             objectFit: "cover",
//     //           }}
//     //         >
//     //           <source src="/assets/videoes/capsule.mp4" type="video/mp4" />
//     //           Your browser does not support the video tag.
//     //         </video>

//     //         {/* Your text content */}
//     //         <div className="text-transparent -mt-[96vh]">
//     //           <p className="leading-[49vh] mb-[2vh] tracking-[-0.1em]">19</p>
//     //           <p className="leading-[49vh] tracking-[-0.15em]">74</p>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     // <div className="bg-[#E4E4E6] futura relative">
//     //   <div className="h-screen overflow-hidden">
//     //     <div
//     //       className="bg-clip-text bg-cover text-transparent flex h-full w-full uppercase max-lg:relative"
//     //       style={{ backgroundImage: img }}
//     //     >
//     //       <div className="h-full w-3/6 text-[75vh] text-right ">
//     //         <p className="leading-[49vh] mb-[2vh] tracking-[-0.1em]">19</p>
//     //         <p className="leading-[49vh] tracking-[-0.15em]">74</p>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default page;

"use client";

import CapsuleButton from "@/components/share/CapsuleButton";
import Link from "next/link";
import { motion } from "framer-motion";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";

const page = () => {
  const img = 'url("gif/ERxI.gif")';
  const videoSource = "/assets/videoes/capsule.mp4";

  const x = "-38vh";

  return (
    <div className="bg-[#E4E4E6] futura relative">
      <div className="h-screen overflow-hidden">
        <div
          className="bg-clip-text bg-cover text-transparent flex h-full w-full uppercase max-lg:relative"
          style={{ backgroundImage: img }}
        >
          <div className="h-full w-3/6 text-[75vh] text-right ">
            <p className="leading-[49vh] mb-[2vh] tracking-[-0.1em]">19</p>
            <p className="leading-[49vh] tracking-[-0.15em]">74</p>
          </div>

          {/* <div className="h-full w-3/6 max-lg:w-5/6 max-md:w-full"> */}
          <div className="h-full w-3/6 max-lg:absolute max-lg:w-5/6">
            <div className="h-[51vh]"></div>
            <div className="h-[49vh]">
              <div className="h-[30vh] overflow-hidden ml-[5vh]  max-lg:h-[36vh]">
                <motion.div
                  initial={{ x: x }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <p className="text-primary font-bold text-[5vh] leading-[4.5vh]">
                    First ever <br /> company <br />
                    to formulate <br />
                    medicines <br />
                    in
                    <br />
                    soft capsule
                    <br />
                  </p>
                </motion.div>
              </div>
              <div className="h-[29vh] ml-[20vh] mt-[5vh] max-lg:mt-[2vh]">
                <Link href="/home">
                  <CapsuleButton buttonName="Enter" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute  inset-y-0 right-0 w-[14vh] h-screen overflow-hidden flex items-end">
        <div className="flex flex-col items-end  mb-[10vh] gap-[5vh] pl-[2vh]">
          <Link href="https://www.facebook.com/drugintltd/" target="_blank">
            <SlSocialFacebook
              className="h-[3vh] w-[3vh] hover:scale-150 duration-300 cursor-pointer"
              color="#C4161C"
            />
          </Link>

          <Link
            href="https://bd.linkedin.com/company/drug-international-limited"
            target="_blank"
          >
            <SlSocialLinkedin
              className="h-[3vh] w-[3vh] hover:scale-125 duration-300 cursor-pointer z-10 overflow-visible"
              color="#C4161C"
            />
          </Link>

          <Link
            href="https://www.youtube.com/@druginternationalltd.6126/featured"
            target="_blank"
          >
            <SlSocialYoutube
              className="h-[3vh] w-[3vh] hover:scale-125 duration-300 cursor-pointer "
              color="#C4161C"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

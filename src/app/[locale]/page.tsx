"use client";

import CapsuleButton from "@/components/share/CapsuleButton";
import Link from "next/link";
import { motion } from "framer-motion";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { useLocale } from "next-intl";

const Page = () => {
	const x = "-38vh";

	const locale = useLocale();

	return (
		<div className="bg-[#E4E4E4] futura relative">
			<div className="h-screen overflow-hidden">
				<div className="flex h-full w-full uppercase max-lg:relative ">
					<div className="h-full w-7/12 max-lg:w-full flex justify-end items-center relative">
						<video
							autoPlay={true}
							loop={true}
							muted={true}
							playsInline={true}
							className="w-[75vh] max-lg:w-[100vh]"
						>
							<source src="/1974.mp4" type="video/mp4" />
						</video>
						<div className="absolute border-4 border-[#E4E4E4] h-full"></div>
					</div>

					{/* <div className="h-full w-3/6 max-lg:w-5/6 max-md:w-full"> */}
					<div className="h-full w-5/12 max-lg:absolute max-lg:w-5/6">
						<div className="h-[51vh]"></div>
						<div className="h-[49vh]">
							<div className="h-[30vh] overflow-hidden -ml-[6vh] max-lg:ml-[2vh] max-lg:h-[36vh]">
								{/* <div className="h-[30vh] overflow-hidden ml-[5vh]  max-lg:h-[36vh]"> */}
								<motion.div
									initial={{ x: x }}
									animate={{ x: 0 }}
									transition={{
										duration: 1,
									}}
								>
									<p className="text-white font-bold text-[4vh] leading-[4vh] mt-[0.5vh]  text-shadow lg:text-primary">
										First ever <br /> company <br /> in <br /> Bangladesh <br />
										to formulate <br />
										medicines in
										<br />
										soft capsule
										<br />
									</p>
								</motion.div>
							</div>
							<div className="h-[29vh] ml-[17vh] mt-[5vh] max-lg:mt-[2vh]">
								<Link href={`/${locale}/home`}>
									<CapsuleButton buttonName="Enter" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute inset-y-0 right-0 w-[14vh] h-screen overflow-hidden flex items-end">
				<div className="flex flex-col items-end mb-[10vh] gap-[5vh] pl-[2vh]">
					<Link href="https://www.facebook.com/drugintltd" target="_blank">
						<SlSocialFacebook className="h-[3vh] w-[3vh] hover:scale-150 duration-300 cursor-pointer text-primary max-lg:text-white text-shadow max-lg:h-[5vh] max-lg:w-[5vh]" />
					</Link>

					<Link
						href="https://bd.linkedin.com/company/drug-international-limited"
						target="_blank"
					>
						<SlSocialLinkedin className="h-[3vh] w-[3vh] hover:scale-125 duration-300 cursor-pointer z-10 overflow-visible text-primary max-lg:text-white text-shadow max-lg:h-[4vh] max-lg:w-[4vh]" />
					</Link>

					<Link
						href="https://www.youtube.com/@druginternationalltd.6126"
						target="_blank"
					>
						<SlSocialYoutube className="h-[3vh] w-[3vh] hover:scale-125 duration-300 cursor-pointer text-primary max-lg:text-white text-shadow max-lg:h-[4vh] max-lg:w-[4vh]" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Page;

// "use client";

// import CapsuleButton from "@/components/share/CapsuleButton";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { SlSocialLinkedin } from "react-icons/sl";
// import { SlSocialFacebook } from "react-icons/sl";
// import { SlSocialYoutube } from "react-icons/sl";
// import { useLocale } from "next-intl";
// import styles from "@/styles/Test.module.css";

// const Page = () => {
//   const x = "-38vh";

//   const locale = useLocale();

//   return (
//     <div className="bg-[#E4E4E4] futura relative">
//       {/* Grid background */}
//       <div className={`${styles.gridContainer} z-[5000000000000000]`}>
//         {/* Page content */}
//         <div className="h-screen overflow-hidden">
//           <div className="flex h-full w-full uppercase max-lg:relative ">
//             <div className="h-full w-7/12 max-lg:w-full flex justify-end items-center relative">
//               <video
//                 autoPlay={true}
//                 loop={true}
//                 muted={true}
//                 playsInline={true}
//                 className="w-[75vh] max-lg:w-[100vh]"
//               >
//                 <source src="/1974.mp4" type="video/mp4" />
//               </video>
//               <div className="absolute border-4 border-[#E4E4E4] h-full"></div>
//             </div>

//             <div className="h-full w-5/12 max-lg:absolute max-lg:w-5/6">
//               <div className="h-[51vh]"></div>
//               <div className="h-[49vh]">
//                 <div className="h-[30vh] overflow-hidden -ml-[6vh] max-lg:ml-[2vh] max-lg:h-[36vh]">
//                   <motion.div
//                     initial={{ x: x }}
//                     animate={{ x: 0 }}
//                     transition={{
//                       duration: 1,
//                     }}
//                   >
//                     <p className="text-white font-bold text-[5vh] leading-[4.5vh] mt-[0.5vh]  text-shadow lg:text-primary">
//                       First ever <br /> company <br />
//                       to formulate <br />
//                       medicines <br />
//                       in
//                       <br />
//                       soft capsule
//                       <br />
//                     </p>
//                   </motion.div>
//                 </div>
//                 <div className="h-[29vh] ml-[17vh] mt-[5vh] max-lg:mt-[2vh]">
//                   <Link href={`/${locale}/home`}>
//                     <CapsuleButton buttonName="Enter" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Social icons */}
//       <div className="absolute inset-y-0 right-0 w-[14vh] h-screen overflow-hidden flex items-end">
//         <div className="flex flex-col items-end mb-[10vh] gap-[5vh] pl-[2vh]">
//           <Link href="https://www.facebook.com/drugintltd" target="_blank">
//             <SlSocialFacebook className="h-[3vh] w-[3vh] hover:scale-150 duration-300 cursor-pointer text-primary max-lg:text-white text-shadow max-lg:h-[5vh] max-lg:w-[5vh]" />
//           </Link>

//           <Link
//             href="https://bd.linkedin.com/company/drug-international-limited"
//             target="_blank"
//           >
//             <SlSocialLinkedin className="h-[3vh] w-[3vh] hover:scale-125 duration-300 cursor-pointer z-10 overflow-visible text-primary max-lg:text-white text-shadow max-lg:h-[4vh] max-lg:w-[4vh]" />
//           </Link>

//           <Link
//             href="https://www.youtube.com/@druginternationalltd.6126"
//             target="_blank"
//           >
//             <SlSocialYoutube className="h-[3vh] w-[3vh] hover:scale-125 duration-300 cursor-pointer text-primary max-lg:text-white text-shadow max-lg:h-[4vh] max-lg:w-[4vh]" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

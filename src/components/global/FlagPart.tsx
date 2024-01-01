"use client";

import styles from "@/styles/Global.module.css";
import Image from "next/image";
import { useState } from "react";

const FlagPart = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageArray = [
    {
      slNo: 1,
      name: "Bangladesh",
      path: "/assets/images/global/Flags/Bangladesh.png",
    },
    { slNo: 2, name: "USA", path: "/assets/images/global/Flags/usa.png" },
    {
      slNo: 3,
      name: "United kingdom",
      path: "/assets/images/global/Flags/United-kingdom.png",
    },
    {
      slNo: 4,
      name: "Venezuela",
      path: "/assets/images/global/Flags/Venezuela.png",
    },
    { slNo: 5, name: "Yemen", path: "/assets/images/global/Flags/Yemen.png" },
    {
      slNo: 6,
      name: "Sierra-Leone",
      path: "/assets/images/global/Flags/Sierra-Leone.png",
    },
    {
      slNo: 7,
      name: "Vietnam",
      path: "/assets/images/global/Flags/Vietnam.png",
    },
    {
      slNo: 8,
      name: "Ukraine",
      path: "/assets/images/global/Flags/Ukraine.png",
    },
    {
      slNo: 9,
      name: "Uganda",
      path: "/assets/images/global/Flags/Uganda.png",
    },
    {
      slNo: 10,
      name: "srilanka",
      path: "/assets/images/global/Flags/srilanka.png",
    },
    {
      slNo: 11,
      name: "phillipine",
      path: "/assets/images/global/Flags/phillipine.png",
    },
    {
      slNo: 12,
      name: "thailand",
      path: "/assets/images/global/Flags/thailand.png",
    },
    {
      slNo: 13,
      name: "Togo",
      path: "/assets/images/global/Flags/Togo.png",
    },
    {
      slNo: 14,
      name: "Moldova",
      path: "/assets/images/global/Flags/Moldova.png",
    },
    {
      slNo: 15,
      name: "Myanmar",
      path: "/assets/images/global/Flags/Myanmar.png",
    },
    {
      slNo: 16,
      name: "nepal",
      path: "/assets/images/global/Flags/nepal.png",
    },
    {
      slNo: 17,
      name: "somalia",
      path: "/assets/images/global/Flags/somalia.png",
    },
    {
      slNo: 18,
      name: "Somaliland",
      path: "/assets/images/global/Flags/Somaliland.png",
    },
    {
      slNo: 19,
      name: "South-africa",
      path: "/assets/images/global/Flags/South-africa.png",
    },
    {
      slNo: 20,
      name: "ghana",
      path: "/assets/images/global/Flags/ghana.png",
    },
    {
      slNo: 21,
      name: "Georgia",
      path: "/assets/images/global/Flags/Georgia.png",
    },
    {
      slNo: 22,
      name: "El_salvador",
      path: "/assets/images/global/Flags/El_salvador.png",
    },
    {
      slNo: 23,
      name: "Kenya",
      path: "/assets/images/global/Flags/Kenya.png",
    },
    {
      slNo: 24,
      name: "Colombia",
      path: "/assets/images/global/Flags/Colombia.png",
    },
    {
      slNo: 25,
      name: "Bahamas",
      path: "/assets/images/global/Flags/Bahamas.png",
    },
    {
      slNo: 26,
      name: "Belarus",
      path: "/assets/images/global/Flags/Belarus.png",
    },
    {
      slNo: 27,
      name: "Bhutan",
      path: "/assets/images/global/Flags/Bhutan.png",
    },
    {
      slNo: 28,
      name: "Botswana",
      path: "/assets/images/global/Flags/Botswana.png",
    },
    {
      slNo: 29,
      name: "afghanistan",
      path: "/assets/images/global/Flags/afghanistan.png",
    },
    {
      slNo: 30,
      name: "combodia",
      path: "/assets/images/global/Flags/combodia.png",
    },

    {
      slNo: 31,
      name: "Dominican-republic",
      path: "/assets/images/global/Flags/Dominican-republic.png",
    },
    {
      slNo: 32,
      name: "honduras",
      path: "/assets/images/global/Flags/honduras.png",
    },
    {
      slNo: 33,
      name: "Hungary",
      path: "/assets/images/global/Flags/Hungary.png",
    },
    {
      slNo: 34,
      name: "malawi",
      path: "/assets/images/global/Flags/malawi.png",
    },
    {
      slNo: 35,
      name: "Nicaragua",
      path: "/assets/images/global/Flags/Nicaragua.png",
    },
    {
      slNo: 36,
      name: "nigeria",
      path: "/assets/images/global/Flags/nigeria.png",
    },
    {
      slNo: 37,
      name: "Oman",
      path: "/assets/images/global/Flags/Oman.png",
    },
  ];

  const handleImageClick = (name: string) => {
    setSelectedImage(name);
  };

  return (
    <div className="flex justify-center items-center my-6">
      <div className="container">
        <div
          className={`border-[0.5px] border-[#7B7B7B55]  uppercase mb-16 py-6 rounded-md flex items-center justify-center gap-4 w-full ${styles.globalPresenceShadow}`}
        >
          <div className="border border-t-primaryShade w-[20%]" />
          <div className="text-2xl font-medium text-center uppercase">
            {selectedImage}
          </div>
          <div className="border border-t-primaryShade w-[20%]" />
        </div>

        <div
          className={`${styles.mapShadow} border border-[#E4E4E6] rounded-lg p-4`}
        >
          <div className="flex">
            {imageArray.map(({ name, path }, index) => (
              <Image
                key={index}
                src={path} // pass the correct path
                width={38}
                height={38}
                alt={name}
                className="m-auto cursor-pointer"
                onClick={() => handleImageClick(name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagPart;

// import styles from "@/styles/Global.module.css";
// import Image from "next/image";

// const FlagPart = () => {
//   const imageArray = [
//     { name: "Bangladesh", path: "/assets/images/global/Flags/Bangladesh.png" },
//     { name: "usa", path: "/assets/images/global/Flags/usa.png" },
//     { name: "UK", path: "/assets/images/global/Flags/uk.png" },
//     { name: "rsa", path: "/assets/images/global/Flags/rsa.png" },
//     { name: "nepal", path: "/assets/images/global/Flags/nepal.png" },
//     { name: "bhutan", path: "/assets/images/global/Flags/bhutan.png" },
//   ];

//   return (
//     <div className="flex justify-center items-center my-6">
//       {imageArray.map(({ name, path }, index) => (
//         <div className="container" key={index}>
//           <div
//             className={`border-[0.5px] border-[#7B7B7B55]  uppercase mb-16 py-6 rounded-md flex items-center justify-center gap-4 w-full ${styles.globalPresenceShadow}`}
//           >
//             <div className="border border-t-primaryShade w-[20%]" />
//             <div className="text-2xl font-medium text-center">{name}</div>
//             <div className="border border-t-primaryShade w-[20%]" />
//           </div>

//           <div
//             className={`${styles.mapShadow} border border-[#E4E4E6] rounded-lg p-4`}
//           >
//             <div className="flex">
//               <Image
//                 src={path} // pass the correct path
//                 width={38}
//                 height={38}
//                 alt={name}
//                 className="m-auto"
//               />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FlagPart;

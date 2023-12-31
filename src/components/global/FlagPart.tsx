"use client";

import styles from "@/styles/Global.module.css";
import Image from "next/image";
import { useState } from "react";

const FlagPart = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageArray = [
    { name: "Bangladesh", path: "/assets/images/global/Flags/Bangladesh.png" },
    { name: "USA", path: "/assets/images/global/Flags/usa.png" },
    {
      name: "United kingdom",
      path: "/assets/images/global/Flags/United-kingdom.png",
    },
    { name: "Venezuela", path: "/assets/images/global/Flags/Venezuela.png" },
    { name: "Yemen", path: "/assets/images/global/Flags/Yemen.png" },
    {
      name: "Sierra-Leone",
      path: "/assets/images/global/Flags/Sierra-Leone.png",
    },
    {
      name: "Vietnam",
      path: "/assets/images/global/Flags/Vietnam.png",
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

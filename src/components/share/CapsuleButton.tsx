"use client";

import styles from "@/styles/Test.module.css";
import { useEffect, useState } from "react";

interface CapsuleButtonProps {
  buttonName: string;
}

const CapsuleButton: React.FC<CapsuleButtonProps> = ({ buttonName }) => {
  const [showCapsule, setShowCapsule] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCapsule(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  console.log("showCapsule", showCapsule);

  return (
    <button
      className={`flex group rounded-full text-center justify-center items-center relative z-30 ${styles.boxShadow}`}
    >
      <div
        className={`bg-[#FF0000]  rounded-l-full  z-30 w-[7vh] h-[5vh] `}
      ></div>

      <div
        className={`bg-[#D3D3D3] duration-700 ease-in-out rounded-r-full  z-10 w-[7vh] h-[5vh] border border-[#c0bfbf] ${
          showCapsule ? `translate-x-[8.5vh]` : ``
        }`}
      ></div>

      <div className={`left-0 absolute text-[3vh] overflow-hidden`}>
        <div className={`rounded-2xl ml-[7.5vh]`}>
          <div
            className={`w-0 text-left duration-500 opacity-0 ease-in-out scale-75 ${
              showCapsule ? `w-[10vh] opacity-100 scale-100` : ``
            }`}
          >
            <p
              className={`-ml-[5vh] duration-700 text-[#808080] ${
                showCapsule ? `ml-0` : ``
              }`}
            >
              {buttonName}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default CapsuleButton;

// import styles from "@/styles/Test.module.css";

// interface CapsuleButtonProps {
//   buttonName: string;
// }

// const CapsuleButton: React.FC<CapsuleButtonProps> = ({ buttonName }) => {
//   return (
//     <button
//       className={`flex group rounded-full text-center justify-center items-center relative z-30 ${styles.boxShadow}`}
//     >
//       <div
//         className={`bg-[#FF0000]  rounded-l-full  z-30 w-[7vh] h-[5vh] `}
//       ></div>

//       <div
//         className={`bg-[#D3D3D3] group-hover:translate-x-[8.5vh] duration-500 ease-in-out rounded-r-full  z-10 w-[7vh] h-[5vh] border border-[#c0bfbf] `}
//       ></div>

//       <div className={`left-0 absolute text-[3vh] overflow-hidden`}>
//         <div className={`rounded-2xl ml-[7.5vh]`}>
//           <div className="w-0 group-hover:w-[10vh] text-left duration-500 opacity-0 group-hover:opacity-100 ease-in-out scale-75 group-hover:scale-100">
//             <p className="-ml-[5vh] group-hover:ml-0 duration-500 text-[#808080]">
//               {buttonName}
//             </p>
//           </div>
//         </div>
//       </div>
//     </button>
//   );
// };

// export default CapsuleButton;

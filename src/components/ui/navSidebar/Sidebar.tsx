"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/styles/NavSidebar.module.css";

const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(
    window.innerWidth > 767
  );

  const handleSidebarToggle = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth > 767);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={`${
        isSidebarVisible
          ? `ease-in-out duration-700 left-0 ${styles.navShadow}`
          : "ease-in-out duration-700 -left-20 "
      } text-white h-screen fixed w-20 z-40 overflow-hidden`}
    >
      <div className="w-20 h-screen border bg-white relative ">
        <div className="flex h-full text-black justify-center items-center flex-col -mt-16 gap-2">
          <div className="group cursor-pointer flex items-center flex-col uppercase font-bold text-sm text-[#CC7A2D]">
            <Image
              src={`/assets/icons/sidebar/Herbals.svg`}
              width={44}
              height={44}
              alt="Herbals"
              className="h-auto group-hover:hidden"
            />
            <Image
              src={`/assets/icons/sidebar/Herbal hovers.svg`}
              width={44}
              height={44}
              alt="Herbal hovers"
              className="h-auto hidden group-hover:block"
            />
            HERBAL
          </div>

          <div className="group cursor-pointer flex items-center flex-col uppercase font-bold text-sm text-[#159A48]">
            <Image
              src={`/assets/icons/sidebar/Unanis.svg`}
              width={44}
              height={44}
              alt="Unanis"
              className="h-auto group-hover:hidden"
            />
            <Image
              src={`/assets/icons/sidebar/Unanis Hovers.svg`}
              width={44}
              height={44}
              alt="Unanis Hovers"
              className="h-auto hidden group-hover:block"
            />
            Unani
          </div>
        </div>

        <button
          className={`left-0 top-[48vh] -ml-0.5 text-black rounded-r-md p-0.5 fixed z-50 bg-white
            ${
              isSidebarVisible
                ? "max-md:ml-0 ease-in-out duration-700 left-20"
                : "max-md:pl-0 ease-in-out duration-700 left-0"
            }
            ${styles.navShadow}`}
          onClick={handleSidebarToggle}
        >
          {isSidebarVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
            >
              <path
                d="M13.012 5.75781L7.83154 10.9382L13.012 16.1187"
                stroke="#272727"
                stroke-width="1.29511"
                stroke-linecap="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
            >
              <path
                d="M7.90258 16.1182L13.083 10.9377L7.90258 5.75731"
                stroke="#272727"
                stroke-width="1.29511"
                stroke-linecap="round"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// const Sidebar = () => {
//   const [isSidebarVisible, setSidebarVisible] = useState(
//     window.innerWidth > 767
//   );

//   const handleSidebarToggle = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setSidebarVisible(window.innerWidth > 767);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return (
//     <div
//       className={`${
//         isSidebarVisible
//           ? "ease-in-out duration-700 left-0 shadow-lg shadow-gray-500/50"
//           : "ease-in-out duration-700 -left-20 "
//       } bg-head text-white h-screen fixed w-20 z-40 overflow-hidden`}
//     >
//       <div className="w-20 h-screen border bg-white relative">
//         <div className="flex h-full text-black justify-center items-center flex-col -mt-16 gap-2">
//           <div className="group cursor-pointer flex items-center flex-col uppercase font-bold text-sm text-[#CC7A2D]">
//             <Image
//               src={`/assets/icons/sidebar/Herbals.svg`}
//               width={44}
//               height={44}
//               alt="Herbals"
//               className="h-auto group-hover:hidden"
//               // className="h-auto block hover:hidden"
//             />
//             <Image
//               src={`/assets/icons/sidebar/Herbal hovers.svg`}
//               width={44}
//               height={44}
//               alt="Herbal hovers"
//               className="h-auto hidden group-hover:block"
//             />
//             HERBAL
//           </div>

//           <div className="group cursor-pointer flex items-center flex-col uppercase font-bold text-sm text-[#159A48]">
//             <Image
//               src={`/assets/icons/sidebar/Unanis.svg`}
//               width={44}
//               height={44}
//               alt="Unanis"
//               className="h-auto group-hover:hidden"
//             />
//             <Image
//               src={`/assets/icons/sidebar/Unanis Hovers.svg`}
//               width={44}
//               height={44}
//               alt="Unanis Hovers"
//               className="h-auto hidden group-hover:block"
//             />
//             Unani
//           </div>
//         </div>

//         <button
//           className={` left-0 top-[50vh] text-black rounded-r-md p-0.5 fixed z-50 bg-white
//             ${
//               isSidebarVisible
//                 ? "max-md:ml-0 ease-in-out duration-700 left-20"
//                 : "max-md:pl-0 ease-in-out duration-700 left-0"
//             }
//             shadow-lg shadow-gray-500/50`}
//           onClick={handleSidebarToggle}
//         >
//           {isSidebarVisible ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="21"
//               height="22"
//               viewBox="0 0 21 22"
//               fill="none"
//             >
//               <path
//                 d="M13.012 5.75781L7.83154 10.9382L13.012 16.1187"
//                 stroke="#272727"
//                 stroke-width="1.29511"
//                 stroke-linecap="round"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="21"
//               height="22"
//               viewBox="0 0 21 22"
//               fill="none"
//             >
//               <path
//                 d="M7.90258 16.1182L13.083 10.9377L7.90258 5.75731"
//                 stroke="#272727"
//                 stroke-width="1.29511"
//                 stroke-linecap="round"
//               />
//             </svg>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

"use client";

import CapsuleButton from "@/components/share/CapsuleButton";
import Image from "next/image";
import { useEffect, useState } from "react";
// import svgIcon from "/assets/icons/search.svg";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";

const Test = () => {
  const img = 'url("gif/ERxI.gif")';

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
    <div className="bg-[#E4E4E6] h-screen ">
      <nav className="top-0 border border-green-500 flex justify-center bg-white">
        <div className="container h-20 w-full  px-1 py-2">
          <div className="flex  h-full w-full justify-between">
            <div className="flex items-center">
              <Image
                src={`/assets/DRUG INT LOGO.png`}
                width={170}
                height={61}
                alt="latest products"
                className="h-auto"
              />
            </div>

            <div className="flex justify-between gap-1 items-center text-[#272727] text-sm font-medium uppercase">
              <div className="p-2.5 cursor-pointer">About Us</div>
              <div className="p-2.5 cursor-pointer">Our Legacy</div>
              <div className="p-2.5 cursor-pointer">products</div>
              <div className="p-2.5 cursor-pointer">facilities</div>
              <div className="p-2.5 cursor-pointer">career</div>
              <div className="p-2.5 cursor-pointer">Contact</div>
            </div>

            <div className="flex gap-2 items-center ">
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-[#5B5B5B] hover:fill-primary"
                >
                  <path d="M18.6659 17.7231L23.8047 22.8619C24.0651 23.1223 24.0651 23.5444 23.8047 23.8047C23.5444 24.0651 23.1223 24.0651 22.8619 23.8047L17.7231 18.6659C15.8426 20.326 13.3723 21.3333 10.6667 21.3333C4.77563 21.3333 0 16.5577 0 10.6667C0 4.77563 4.77563 0 10.6667 0C16.5577 0 21.3333 4.77563 21.3333 10.6667C21.3333 13.3723 20.326 15.8426 18.6659 17.7231ZM10.6667 20C15.8213 20 20 15.8213 20 10.6667C20 5.51201 15.8213 1.33333 10.6667 1.33333C5.51201 1.33333 1.33333 5.51201 1.33333 10.6667C1.33333 15.8213 5.51201 20 10.6667 20Z" />
                </svg>
              </div>

              <div className="group cursor-pointer">
                <Image
                  src={`/assets/icons/Language Hover.png`}
                  width={25}
                  height={25}
                  alt="latest products"
                  className="h-auto hidden group-hover:block"
                />
                <Image
                  src={`/assets/icons/Language.png`}
                  width={25}
                  height={25}
                  alt="latest products"
                  className="h-auto  block group-hover:hidden"
                />
              </div>

              <div className="border border-primary rounded-lg py-0.5 px-1 flex justify-center items-center gap-2 text-sm font-bold bg-primary text-white hover:text-primary hover:bg-white group cursor-pointer uppercase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="stroke-[#5B5B5B] hover:stroke-primary group-hover:animate-spin"
                >
                  <path
                    d="M12.7734 24.5467C19.2756 24.5467 24.5467 19.2756 24.5467 12.7734C24.5467 6.27111 19.2756 1 12.7734 1C6.27111 1 1 6.27111 1 12.7734C1 19.2756 6.27111 24.5467 12.7734 24.5467Z"
                    className="stroke-[#FFFFFF] group-hover:stroke-primary"
                    stroke-width="0.85"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.7733 1V24.5467M12.7733 1C9.1738 1 6.25586 6.2711 6.25586 12.7734C6.25586 19.2756 9.1738 24.5467 12.7733 24.5467M12.7733 1C16.3727 1 19.2907 6.2711 19.2907 12.7734C19.2907 19.2756 16.3727 24.5467 12.7733 24.5467"
                    className="stroke-[#FFFFFF] group-hover:stroke-primary"
                    stroke-width="0.85"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24.5467 12.7734H1"
                    className="stroke-[#FFFFFF] group-hover:stroke-primary"
                    stroke-width="0.85"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.865 6.88672H2.68213"
                    className="stroke-[#FFFFFF] group-hover:stroke-primary"
                    stroke-width="0.85"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.865 18.66H2.68213"
                    className="stroke-[#FFFFFF] group-hover:stroke-primary"
                    stroke-width="0.85"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Global
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`${
          isSidebarVisible
            ? "ease-in-out duration-700 left-0"
            : "ease-in-out duration-700 -left-16"
        } bg-head text-white h-screen fixed w-16 z-40 overflow-hidden`}
      >
        <div className="w-20 h-screen border border-red-700 bg-white relative">
          <button
            className={` left-0 top-[50vh] text-black rounded-r-md p-0.5 fixed z-50 bg-white
            ${
              isSidebarVisible
                ? "max-md:ml-0 ease-in-out duration-700 left-16"
                : "max-md:pl-0 ease-in-out duration-700 left-0"
            }
            `}
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
    </div>
  );
};

export default Test;

// import CapsuleButton from "@/components/share/CapsuleButton";

// const Test = () => {
//   const img = 'url("gif/ERxI.gif")';

//   return (
//     <div className=" bg-[#E4E4E6] futura">
//       <div className="h-screen overflow-hidden">
//         <div
//           className="bg-clip-text bg-cover text-transparent flex h-full w-full uppercase"
//           style={{ backgroundImage: img }}
//         >
//           <div className="h-full w-3/6 text-[75vh] text-right">
//             <p className="leading-[49vh] mb-[2vh] tracking-[-0.1em]">19</p>
//             <p className="leading-[49vh] tracking-[-0.15em]">74</p>
//           </div>
//           <div className="h-full w-3/6">
//             <div className="h-[51vh]"></div>
//             <div className="h-[49vh]">
//               <div className="h-[30vh]">
//                 <p
//                   className="text-[#C4161C] font-bold text-[5vh] leading-[5vh] ml-[5vh]

//                 "
//                 >
//                   First-ever company <br />
//                   to formulate <br />
//                   medicines <br />
//                   in
//                   <br />
//                   soft capsule
//                   <br />
//                 </p>
//               </div>
//               <div className="h-[29vh] ml-[18vh] mt-[3vh]">
//                 <CapsuleButton buttonName="Enter" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;

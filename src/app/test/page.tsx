/* eslint-disable react/no-unescaped-entities */
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

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#E4E4E6] h-screen ">
      <nav className="top-0 border border-green-500 flex justify-center bg-white z-[100000]">
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
        } bg-head text-white h-screen fixed w-16  overflow-hidden top-0 z-10`}
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
      <div className="h-screen "></div>

      <footer
        className="rounded-t-xl  w-full py-16 flex justify-center"
        style={{
          background: "linear-gradient(115deg, #272727 60%, #5B5B5B 40%)",
        }}
      >
        <div className="container flex items-center justify-center h-full flex-col text-white  px-2">
          <div className="">
            <Image
              src={`/assets/logo/Drug Logo Vertical (White).png`}
              width={166}
              height={130}
              alt="Herbal hovers"
              className="h-auto"
            />
          </div>

          <div className="flex gap-16 my-16">
            <div className="flex flex-col basis-5/12">
              <div className="text-sm font-semibold mb-8">
                Drug International Limited, founded in 1974, is a prominent
                pharmaceutical company in Bangladesh. They're known for
                innovative soft gel capsules and diverse products. They excel in
                supply chain management and have diversified into multiple
                industries.
              </div>
              <div>
                <p className="uppercase text-lg font-medium underline mb-4">
                  Social networks
                </p>
                <div className="flex gap-4">
                  <Image
                    src={`/assets/icons/footer/facebook.svg`}
                    width={24}
                    height={24}
                    alt="Herbal hovers"
                    className="h-auto w-auto hover:scale-110 cursor-pointer duration-300"
                  />
                  <Image
                    src={`/assets/icons/footer/linkedin.svg`}
                    width={24}
                    height={24}
                    alt="Herbal hovers"
                    className="h-auto w-auto hover:scale-110 cursor-pointer duration-300"
                  />
                  <Image
                    src={`/assets/icons/footer/youtube.svg`}
                    width={24}
                    height={24}
                    alt="Herbal hovers"
                    className="h-auto w-auto hover:scale-110 cursor-pointer duration-300"
                  />
                </div>
              </div>
            </div>

            <div className="basis-2/12">
              <p className="uppercase text-lg font-medium underline mb-4">
                quick Links
              </p>
              <div className="flex flex-col uppercase text-base font-medium gap-2">
                <p className="cursor-pointer hover:ml-0.5 duration-200">
                  News & insights
                </p>
                <p className="cursor-pointer hover:ml-0.5 duration-200">
                  security check
                </p>
                <p className="cursor-pointer hover:ml-0.5 duration-200">
                  terms & conditions
                </p>
                <p className="cursor-pointer hover:ml-0.5 duration-200">faq</p>
                <p className="cursor-pointer hover:ml-0.5 duration-200">
                  cookie policy
                </p>
                <p className="cursor-pointer hover:ml-0.5 duration-200">
                  sitemap
                </p>
              </div>
            </div>

            <div className="basis-5/12 flex flex-col gap-2">
              <p className="uppercase text-lg font-medium underline">Contact</p>
              <div className="inline-flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M14.7071 11.7071L17.3552 14.3552C17.7113 14.7113 17.7113 15.2887 17.3552 15.6448C15.43 17.57 12.3821 17.7866 10.204 16.153L8.62857 14.9714C6.88504 13.6638 5.33622 12.115 4.02857 10.3714L2.84701 8.79601C1.21341 6.61788 1.43001 3.56999 3.35523 1.64477C3.71133 1.28867 4.28867 1.28867 4.64477 1.64477L7.29289 4.29289C7.68342 4.68342 7.68342 5.31658 7.29289 5.70711L6.27175 6.72825C6.10946 6.89054 6.06923 7.13846 6.17187 7.34373C7.35853 9.71706 9.28294 11.6415 11.6563 12.8281C11.8615 12.9308 12.1095 12.8905 12.2717 12.7283L13.2929 11.7071C13.6834 11.3166 14.3166 11.3166 14.7071 11.7071Z"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>

                <div className="flex flex-col uppercase text-base font-medium gap-1">
                  <p>(+880) 2 223362613-4</p>
                  <p>(+880)2 223362621</p>
                  <p>(+880) 2 223370257</p>
                </div>
              </div>

              <div className="inline-flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM18.33 6L12 10.75L5.67 6H18.33ZM19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V7.25L11.4 12.8C11.5731 12.9298 11.7836 13 12 13C12.2164 13 12.4269 12.9298 12.6 12.8L20 7.25V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18Z"
                    fill="white"
                  />
                </svg>

                <p className="flex flex-col uppercase text-base font-medium gap-2">
                  info@drug-international.com
                </p>
              </div>

              <div className="inline-flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.398 17.804L12.8585 18.6917L12.8585 18.6917L12.398 17.804ZM11.602 17.804L11.1415 18.6917L11.1415 18.6917L11.602 17.804ZM18 9C18 11.1458 16.9079 12.9159 15.545 14.2906C14.183 15.6644 12.6342 16.555 11.9376 16.9163L12.8585 18.6917C13.6448 18.2838 15.397 17.2805 16.9653 15.6987C18.5326 14.1178 20 11.8706 20 9H18ZM12 3C15.3137 3 18 5.68629 18 9H20C20 4.58172 16.4183 1 12 1V3ZM6 9C6 5.68629 8.68629 3 12 3V1C7.58172 1 4 4.58172 4 9H6ZM12.0624 16.9163C11.3658 16.555 9.81702 15.6644 8.45503 14.2906C7.09211 12.9159 6 11.1458 6 9H4C4 11.8706 5.46741 14.1178 7.03474 15.6987C8.60299 17.2805 10.3552 18.2838 11.1415 18.6917L12.0624 16.9163ZM11.9376 16.9163C11.9514 16.9091 11.9733 16.9023 12 16.9023C12.0267 16.9023 12.0486 16.9091 12.0624 16.9163L11.1415 18.6917C11.6831 18.9726 12.3169 18.9726 12.8585 18.6917L11.9376 16.9163ZM14 9C14 10.1046 13.1046 11 12 11V13C14.2091 13 16 11.2091 16 9H14ZM12 7C13.1046 7 14 7.89543 14 9H16C16 6.79086 14.2091 5 12 5V7ZM10 9C10 7.89543 10.8954 7 12 7V5C9.79086 5 8 6.79086 8 9H10ZM12 11C10.8954 11 10 10.1046 10 9H8C8 11.2091 9.79086 13 12 13V11Z"
                    fill="white"
                  />
                  <path
                    d="M19.7942 17.5C20.5841 17.9561 21 18.4734 21 19C21 19.5266 20.5841 20.0439 19.7942 20.5C19.0043 20.9561 17.8682 21.3348 16.5 21.5981C15.1318 21.8614 13.5798 22 12 22C10.4202 22 8.86817 21.8614 7.5 21.5981C6.13183 21.3348 4.99569 20.9561 4.20577 20.5C3.41586 20.0439 3 19.5266 3 19C3 18.4734 3.41586 17.9561 4.20577 17.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>

                <p className="flex flex-col uppercase text-base font-medium ">
                  Khwaja Enayetpuri (R) <br /> Tower17, Bir Uttam K.M. <br />
                  Shafiullah Road (Green Road), <br /> Dhaka-1205, Bangladesh
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            © 2001-{currentYear} Creative matter. All rights reserved. <br />
            Trade marks are owned by or licensed to the Drug international
            limited.
          </div>
        </div>
      </footer>
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

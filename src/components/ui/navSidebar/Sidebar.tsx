"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/NavSidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const pathName = usePathname().toString();

  return (
    <div
      className={`${
        isSidebarVisible
          ? `ease-in-out duration-700 left-0 ${styles.navShadow}`
          : "ease-in-out duration-700 -left-20 "
      } text-white h-screen fixed w-20 z-40 overflow-hidden top-0`}
    >
      <div className="w-20 h-screen border bg-white relative ">
        <div className="flex h-full text-black justify-center items-center flex-col gap-2">
          <Link href={"/home"}>
            <div
              className={`group cursor-pointer flex items-center flex-col uppercase font-bold text-sm text-primary ${
                pathName.includes("herbal") || pathName.includes("unani")
                  ? "block"
                  : "hidden"
              }`}
            >
              <Image
                src={`/assets/icons/sidebar/drug.png`}
                width={44}
                height={44}
                priority={true}
                alt="Drug International"
                className="h-auto group-hover:hidden"
              />
              <Image
                src={`/assets/icons/sidebar/drug-inverted.png`}
                width={44}
                height={44}
                priority={true}
                alt="Drug International"
                className="h-auto hidden group-hover:block"
              />
              DRUG
            </div>
          </Link>

          <Link href={"/herbal"}>
            <div
              className={`group cursor-pointer flex items-center flex-col uppercase font-bold text-sm text-[#CC7A2D] ${
                pathName.includes("herbal") ? "hidden" : "block"
              }`}
            >
              <Image
                src={`/assets/icons/sidebar/herbal.png`}
                width={44}
                height={44}
                priority={true}
                alt="Drug International"
                className="h-auto group-hover:hidden"
              />
              <Image
                src={`/assets/icons/sidebar/herbal-inverted.png`}
                width={44}
                height={44}
                priority={true}
                alt="Drug International"
                className="h-auto hidden group-hover:block"
              />
              HERBAL
            </div>
          </Link>

          <Link href={"/unani"}>
            <div
              className={`group cursor-pointer flex items-center flex-col uppercase font-bold text-sm text-[#159A48] ${
                pathName.includes("unani") ? "hidden" : "block"
              }`}
            >
              <Image
                src={`/assets/icons/sidebar/unani-1.png`}
                width={44}
                height={44}
                priority={true}
                alt="Drug International"
                className="h-auto group-hover:hidden"
              />
              <Image
                src={`/assets/icons/sidebar/unani-inverted.png`}
                width={44}
                height={44}
                priority={true}
                alt="Drug International"
                className="h-auto hidden group-hover:block"
              />
              UNANI
            </div>
          </Link>
        </div>

        <button
          className={`left-0 top-[49vh] text-black rounded-r-md p-0.5 fixed z-50 bg-white
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
                strokeWidth="1.29511"
                strokeLinecap="round"
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
                strokeWidth="1.29511"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

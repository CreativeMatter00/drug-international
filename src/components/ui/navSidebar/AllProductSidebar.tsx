"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/NavSidebar.module.css";

interface visibleProps {
  isAllSidebarVisible: boolean;
}

const AllProductSidebar: React.FC<visibleProps> = ({ isAllSidebarVisible }) => {
  //   const [isSidebarVisible, setSidebarVisible] = useState(true);

  //   const handleSidebarToggle = () => {
  //     setSidebarVisible(!isSidebarVisible);
  //   };

  return (
    <div
      className={`${
        isAllSidebarVisible
          ? `ease-in-out duration-700 right-0 `
          : "ease-in-out duration-700 right-20"
      } text-white h-screen fixed w-20 z-[99999] overflow-hidden border-4 border-red-500 top-0`}
    >
      <div className="w-20 h-screen  relative ">
        <div className="flex h-full text-black justify-center items-center flex-col -mt-16 gap-2 ">
          <div className="group cursor-pointer flex items-center flex-col uppercase font-bold text-sm text-[#CC7A2D] ">
            HERBAL
          </div>

          <div className="group cursor-pointer flex items-center flex-col uppercase font-bold text-sm text-[#159A48]">
            Unani
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductSidebar;

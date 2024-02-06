"use client";

import SearchOption from "./SearchOption";
import styles from "@/styles/NavSidebar.module.css";
import { useQuery } from "@tanstack/react-query";
import { getProductNameByClass } from "@/api/api";
import { useState } from "react";

interface visibleProps {
  setIsAllSidebarVisible: Function;
  isAllSidebarVisible: boolean;
  isOverlayVisible: boolean;
  setIsOverlayVisible: Function;
  setTherapeuticId: Function;
}

const AllProductSidebar: React.FC<visibleProps> = ({
  isAllSidebarVisible,
  setIsAllSidebarVisible,
  isOverlayVisible,
  setIsOverlayVisible,
  setTherapeuticId,
}) => {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const handleItemClick = (therapeutic: string) => {
    setSelectedItem(therapeutic);
  };

  const handleAllSideToggle = () => {
    setIsAllSidebarVisible(!isAllSidebarVisible);
    setIsOverlayVisible(!isOverlayVisible);
  };

  const handleSearch = () => {
    setTherapeuticId(selectedItem?.TH_GRP_ID);
    setIsAllSidebarVisible(!isAllSidebarVisible);
    setIsOverlayVisible(!isOverlayVisible);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["ProductNameByClass"],
    queryFn: getProductNameByClass,
  });

  return (
    <div
      className={`${
        isAllSidebarVisible
          ? `ease-in-out duration-700 right-0 `
          : "ease-in-out duration-700 -right-[529px]"
      } text-[#272727] h-screen fixed w-[529px] z-[999999] overflow-hidden top-0 rounded-l-xl max-md:w-full ${
        styles.allProductShadow
      }`}
    >
      <div className="w-[529px] h-screen p-4 bg-[#FFFFFF] flex flex-col justify-between  max-md:w-full">
        <div className="flex justify-between uppercase font-medium max-md:pb-2">
          <p className="text-base">Filter And Sort</p>

          <div
            className="flex text-xs items-center justify-center gap-1 text-center  underline cursor-pointer"
            onClick={handleAllSideToggle}
          >
            Close
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path d="M0 0H20V20H0V0Z" fill="white" fill-opacity="0.01" />
              <path
                d="M3.33789 3.33325L16.6712 16.6666"
                stroke="#5B5B5B"
                strokeWidth="1.66667"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.33789 16.6666L16.6712 3.33325"
                stroke="#5B5B5B"
                strokeWidth="1.66667"
                strokeLinecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className=" h-full overflow-auto p-4 uppercase">
          <div className="flex flex-col gap-1">
            {data?.therapiticGroupProduct?.map((therapeutic: any) => (
              <SearchOption
                key={therapeutic?.TH_GRP_ID}
                optionName={therapeutic?.TH_GRP_NAME}
                isSelected={selectedItem?.TH_GRP_ID === therapeutic?.TH_GRP_ID}
                onItemClick={() => handleItemClick(therapeutic)}
              />
            ))}
          </div>
        </div>

        <div className="items-center justify-center py-8 max-md:py-4 flex">
          <button
            className={`rounded-lg px-4 py-2 text-white flex gap-2 justify-center items-center uppercase  ${
              selectedItem === null
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-primary-dark cursor-pointer"
            }`}
            onClick={handleSearch}
            disabled={selectedItem === null}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 21 21"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.739 0C15.109 0 19.477 4.368 19.477 9.738C19.477 12.2715 18.5047 14.5823 16.9136 16.3165L20.0444 19.4407C20.3374 19.7337 20.3384 20.2077 20.0454 20.5007C19.8994 20.6487 19.7064 20.7217 19.5144 20.7217C19.3234 20.7217 19.1314 20.6487 18.9844 20.5027L15.8159 17.343C14.1491 18.6778 12.0357 19.477 9.739 19.477C4.369 19.477 0 15.108 0 9.738C0 4.368 4.369 0 9.739 0ZM9.739 1.5C5.196 1.5 1.5 5.195 1.5 9.738C1.5 14.281 5.196 17.977 9.739 17.977C14.281 17.977 17.977 14.281 17.977 9.738C17.977 5.195 14.281 1.5 9.739 1.5Z"
                fill="white"
              />
            </svg>
            search
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProductSidebar;

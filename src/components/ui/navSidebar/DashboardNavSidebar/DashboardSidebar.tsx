"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useState } from "react";
import { FaChartBar } from "react-icons/fa";

interface DashboardSidebarProps {
  isSidebarVisible: boolean;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  isSidebarVisible,
}) => {
  const [expandedButtonIndex, setExpandedButtonIndex] = useState<number | null>(
    null
  );

  const handleToggle = (index: number) => {
    if (expandedButtonIndex === index) {
      setExpandedButtonIndex(null);
    } else {
      setExpandedButtonIndex(index);
    }
  };

  const pathName = usePathname().toString();

  console.log("pathName", pathName);

  return (
    <div
      className={`${
        isSidebarVisible
          ? "ease-in-out duration-500 left-0"
          : "ease-in-out duration-500 left-[-18rem]"
      } print:hidden bg-white text-primary h-screen fixed w-72 z-40 overflow-auto p-2 border scrollbar`}
    >
      <div className="mb-10 py-2 px-3">
        <p className="text-xl font-bold text-center">Drug</p>
      </div>
      <Link href="/admin/dashboard">
        <div
          className={`hover:bg-[#F3F4F6]  cursor-pointer pl-4 py-2 pr-2 rounded-2xl mb-3 flex justify-between w-full hover:text-red-700 ${
            expandedButtonIndex === 0
              ? "bg-[#F3F4F6] text-indigo-700"
              : "text-[#0B181C]"
          } ${
            pathName === "/admin/dashboard"
              ? "bg-[#F3F4F6] text-red-700"
              : "bg-white"
          }`}
          onClick={() => handleToggle(0)}
        >
          <p className="flex items-center text-sm font-semibold ">
            <FaChartBar className="h-5 w-5 mr-2" />
            Dashboard
          </p>
        </div>
      </Link>
      <Link href="/admin/medicine-setup">
        <div
          className={`hover:bg-[#F3F4F6]  cursor-pointer pl-4 py-2 pr-2 rounded-2xl mb-3 flex justify-between w-full hover:text-red-700 ${
            expandedButtonIndex === 0
              ? "bg-[#F3F4F6] text-indigo-700"
              : "text-[#0B181C]"
          } ${
            pathName === "/admin/medicine-setup"
              ? "bg-[#F3F4F6] text-red-700"
              : "bg-white"
          }`}
          onClick={() => handleToggle(1)}
        >
          <p className="flex items-center text-sm font-semibold ">
            <FaChartBar className="h-5 w-5 mr-2" />
            Medicine setup
          </p>
        </div>
      </Link>
    </div>
  );
};

export default DashboardSidebar;

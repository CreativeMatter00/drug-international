"use client";

import { useState } from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import { TbSearch } from "react-icons/tb";
import { SiMicrosoftexcel } from "react-icons/si";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

interface FilterDivProps {
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
  table: any;
}

const FilterDiv: React.FC<FilterDivProps> = ({
  filtering,
  setFiltering,
  table,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  console.log("table", table);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleExportPDF = () => {
    window.print();
    setShowOptions(!showOptions);
    console.log("Exporting as PDF");
  };

  const handleExportExcel = () => {
    // const worksheet = XLSX.utils.json_to_sheet(page.map((row) => row.original));
    // const workbook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    // const excelBuffer = XLSX.write(workbook, {
    //   bookType: "xlsx",
    //   type: "array",
    // });
    // const excelBlob = new Blob([excelBuffer], {
    //   type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    // });
    // saveAs(excelBlob, "table_data.xlsx");
    // setShowOptions(!showOptions);
  };

  return (
    <div className="flex justify-between max-md:flex-col gap-4 mb-4 print:hidden">
      <div>
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <TbSearch className="h-5 w-5 text-slate-300" />
          </span>
          <input
            className=" placeholder:text-slate-400 block bg-white w-full border border-indigo-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
            value={filtering || ""}
            onChange={(e) => setFiltering(e.target.value)}
            maxLength={50}
          />
        </label>
      </div>

      <div className="flex justify-center items-center max-lg:w-full gap-2">
        <div className="relative inline-block">
          <button
            onClick={handleButtonClick}
            className="btn btn-sm bg-white border-indigo-300 text-[#0B181C]  hover:bg-indigo-100 hover:text-indigo-600 flex w-32 gap-2 font-medium"
          >
            Export
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm4 3a1 1 0 100 2h4a1 1 0 100-2H6zm0 4a1 1 0 100 2h2a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {showOptions && (
            <div className="absolute mt-1 bg-white border py-2 rounded-lg  right-0 top-8 w-48 animation">
              <div className="divide-y divide-blue-200 flex flex-col ">
                <button
                  onClick={handleExportPDF}
                  className={`hover:bg-[#F3F4F6]  cursor-pointer flex justify-between w-full hover:text-indigo-700 py-2 px-4 `}
                >
                  <p className="flex items-center text-sm font-semibold ">
                    <FaRegFilePdf className="h-5 w-5 mr-2" />
                    Export as PDF
                  </p>
                </button>

                <button
                  //   onClick={handleExportExcel}
                  className={`hover:bg-[#F3F4F6]  cursor-pointer flex justify-between w-full hover:text-indigo-700 py-2 px-4 `}
                >
                  <p className="flex items-center text-sm font-semibold ">
                    <SiMicrosoftexcel className="h-5 w-5 mr-2" />
                    Export as Excel
                  </p>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterDiv;

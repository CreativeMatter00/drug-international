"use client";

import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import { TbSearch } from "react-icons/tb";
import { SiMicrosoftexcel } from "react-icons/si";
import { MdVisibility } from "react-icons/md";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

interface FilterDivProps {
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
  table: any;
  data: any;
}

const FilterDiv: React.FC<FilterDivProps> = ({
  filtering,
  setFiltering,
  table,
  data,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleExportPDF = () => {
    window.print();
    setShowOptions(!showOptions);
    console.log("Exporting as PDF");
  };

  console.log("table", table);

  const title = "title";

  const handleExportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      table
        .getPaginationRowModel()
        .flatRows.map((row: { original: any }) => row.original)
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const excelBlob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(excelBlob, `${title}.xlsx`);
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
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-sm bg-white border border-gray-300"
          >
            Export
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => window.print()}>
              <a>PDF</a>
            </li>
            <li onClick={() => handleExportExcel()}>
              <a>Excel</a>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-sm bg-white border-indigo-300 text-[#0B181C]  hover:bg-indigo-100 hover:text-indigo-600 flex gap-2 font-medium "
          >
            <MdVisibility /> Column Visibility
          </label>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-white"
          >
            <div className="card-body">
              <div className="inline-block">
                <div className="px-1 ">
                  <label>
                    <input
                      className="mr-2"
                      {...{
                        type: "checkbox",
                        checked: table.getIsAllColumnsVisible(),
                        onChange: table.getToggleAllColumnsVisibilityHandler(),
                      }}
                    />
                    Toggle All
                  </label>
                </div>
                {table.getAllLeafColumns().map((column: any) => {
                  return (
                    <div key={column.id} className="px-1">
                      <label>
                        <input
                          className="mr-2"
                          {...{
                            type: "checkbox",
                            checked: column.getIsVisible(),
                            onChange: column.getToggleVisibilityHandler(),
                          }}
                        />
                        {column.columnDef.header}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <select
          className=" placeholder:text-slate-400 block bg-white w-full border border-indigo-300 rounded-md py-1 px-2 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm hover:bg-indigo-100 cursor-pointer hover:text-indigo-700"
          // className="btn btn-sm bg-white border-indigo-300 text-[#0B181C]  hover:bg-indigo-100 hover:text-indigo-600 flex w-32 gap-2 font-medium"
          value={table.setPageSize.length}
          // value={pageSize}
          onChange={(e) => {
            const value =
              e.target.value === "all" ? data.length : Number(e.target.value);
            // setPageSize(value);
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option
              className="mr-4 cursor-pointer bg-white"
              key={pageSize}
              value={pageSize}
            >
              Show {pageSize}
            </option>
          ))}
          <option
            className="mr-4 cursor-pointer animation bg-white"
            value={data?.length}
          >
            Show All
          </option>
        </select>
      </div>
    </div>
  );
};

export default FilterDiv;

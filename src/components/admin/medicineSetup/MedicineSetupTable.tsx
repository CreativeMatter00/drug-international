"use client";

import { getPosts } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
import TableModel from "../tableComponents/TableModel";
import TableHeading from "../tableComponents/TableHeading";
import AddModal from "@/components/share/Modal/AddModal";
import FilterDiv from "../tableComponents/FilterDiv";

const MedicineSetupTable = () => {
  const COLUMNS = [
    {
      header: "ID",
      accessorKey: "id",
      enableColumnFilter: false,
    },

    {
      header: "userId",
      accessorKey: "userId",
    },

    {
      header: "Title",
      accessorKey: "title",
    },
    // {
    // 	header: "Serial No",
    // 	accessorKey: "serialNo",
    // },
    // {
    // 	header: "Active Status",
    // 	accessorKey: "activeStatus",
    // 	cell: (row) => (
    // 		<>
    // 			{row.row.original.activeStatus ? (
    // 				<div className="badge badge-success gap-2">Active</div>
    // 			) : (
    // 				<div className="badge badge-error gap-2">Inactive</div>
    // 			)}
    // 		</>
    // 	),
    // },
    // {
    // 	header: "Edit",
    // 	accessor: "edit",
    // 	disableSortBy: true,
    // 	cell: (row) => (
    // 		<button
    // 			className="btn btn-xs btn-primary border-none text-white"
    // 			onClick={() => editData(row.row.original)}
    // 		>
    // 			{<FaEdit />}
    // 		</button>
    // 	),
    // },
  ];

  const dataVisibility = true;

  const {
    isLoading,
    isError,
    data: posts,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => posts, [posts]);

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});

  const table = useReactTable({
    data,
    columns,
    // allColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
      columnVisibility: columnVisibility,
    },
    // onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onColumnVisibilityChange: setColumnVisibility,
  });

  console.log("data", data);

  return (
    <div className="border bg-white p-4 mt-4 rounded-lg print:p-0">
      <TableHeading
        headName="Medicine Details"
        buttonName="Add Medicine"
      ></TableHeading>

      <FilterDiv
        filtering={filtering}
        setFiltering={setFiltering}
        table={table}
        data={data}
      />

      {!isLoading && <TableModel table={table} />}
      <AddModal modalHead="Add Medicine">dddd</AddModal>
    </div>
  );
};

export default MedicineSetupTable;

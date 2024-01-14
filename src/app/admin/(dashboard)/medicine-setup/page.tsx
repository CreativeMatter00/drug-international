"use client";

import { getPosts } from "@/api/api";
import TableModel from "@/components/admin/tableComponents/TableModel";
import { useQuery } from "@tanstack/react-query";
import {
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const Page = () => {
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

	console.log(data);

	const [sorting, setSorting] = useState([]);
	const [filtering, setFiltering] = useState("");
	const [columnVisibility, setColumnVisibility] = useState({});

	const table = useReactTable({
		data,
		columns,
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

	return (
		<div>
			<div className="text-xl font-bold mb-4 mt-2">Medicine setup</div>
			abc
			{!isLoading && <TableModel table={table} />}
		</div>
	);
};

export default Page;

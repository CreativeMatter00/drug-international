import React from "react";
import {
	BsFillSkipBackwardFill,
	BsFillSkipStartFill,
	BsFillSkipEndFill,
	BsFillSkipForwardFill,
} from "react-icons/bs";

function Pagination({ table }: { table: any }) {
	return (
		<div>
			{table?.getRowModel().rows.length > 0 && (
				<div className="flex flex-col items-center justify-between pagination-container p-2 gap-4 md:flex-row">
					<div>
						<select
							value={table.getState().pagination.pageSize}
							onChange={(e) => {
								table.setPageSize(Number(e.target.value));
							}}
						>
							{[10, 20].map((pageSize) => (
								<option key={pageSize} value={pageSize}>
									Show {pageSize} entries
								</option>
							))}
							<option value={table.getCoreRowModel().rows.length}>
								Show all entries
							</option>
						</select>
					</div>
					<div className="flex items-center gap-2">
						Go to page:
						<input
							type="number"
							defaultValue={table.getState().pagination.pageIndex + 1}
							onChange={(e) => {
								const page = e.target.value ? Number(e.target.value) - 1 : 0;
								table.setPageIndex(page);
							}}
							className="border p-1 rounded w-16"
						/>
					</div>
					<div className="flex gap-2">
						<button
							disabled={!table.getCanPreviousPage()}
							onClick={() => table.setPageIndex(0)}
							className="btn btn-sm btn-circle btn-primary"
						>
							<BsFillSkipBackwardFill />
						</button>
						<button
							disabled={!table.getCanPreviousPage()}
							onClick={() => table.previousPage()}
							className="btn btn-sm btn-circle btn-primary"
						>
							<BsFillSkipStartFill />
						</button>
						<button
							disabled={!table.getCanNextPage()}
							onClick={() => table.nextPage()}
							className="btn btn-sm btn-circle btn-primary"
						>
							<BsFillSkipEndFill />
						</button>
						<button
							disabled={!table.getCanNextPage()}
							onClick={() => table.setPageIndex(table.getPageCount() - 1)}
							className="btn btn-sm btn-circle btn-primary"
						>
							<BsFillSkipForwardFill />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Pagination;

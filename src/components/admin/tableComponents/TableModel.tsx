import { flexRender } from "@tanstack/react-table";
import { PiCaretUpFill, PiCaretDownFill } from "react-icons/pi";
import { ICellType, IHeaderGroupType } from "./tableDataTypes";

function TableModel({ table }: { table: any }) {
  return (
    <div className="rounded-md bg-white p-2">
      <div className="max-w-full overflow-x-auto">
        {/* {table?.getRowModel().rows.length === 0 ? (
					<div className="text-center font-semibold text-lg p-4">
						No information available
					</div>
				) : ( */}
        <table className="data-table w-full">
          <thead className="bg-stone-100">
            {table
              .getHeaderGroups()
              .map((headerGroup: { id: string; headers: any[] }) => (
                <tr key={headerGroup.id as string} className="border">
                  {headerGroup.headers.map((header: IHeaderGroupType) => (
                    <th
                      key={header.id as string}
                      className="p-2 last:pb-10 first:pb-10"
                    >
                      <div onClick={header.column.getToggleSortingHandler()}>
                        <div className="flex items-center gap-2 justify-center cursor-pointer select-none">
                          <div>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </div>
                          <div className="sort-icon">
                            {
                              {
                                asc: <PiCaretUpFill />,
                                desc: <PiCaretDownFill />,
                              }[(header.column.getIsSorted() as string) ?? null]
                            }
                          </div>
                        </div>
                      </div>
                      {header.column.getCanFilter() ? (
                        <div>
                          <input
                            type="text"
                            className="input input-bordered input-sm w-full px-2 column-filter bg-white"
                            onChange={(e) =>
                              header.column.setFilterValue(e.target.value)
                            }
                          />
                        </div>
                      ) : null}
                    </th>
                  ))}
                </tr>
              ))}
          </thead>

          <tbody>
            {table
              .getRowModel()
              .rows.map((row: { id: string; getVisibleCells: () => any[] }) => (
                <tr key={row.id as string}>
                  {row.getVisibleCells().map((cell: ICellType) => (
                    <td key={cell.id as string} className="px-4 py-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        {/* )} */}
      </div>
    </div>
  );
}

export default TableModel;

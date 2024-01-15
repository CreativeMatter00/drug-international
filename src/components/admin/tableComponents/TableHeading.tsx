import { handleAddModalOpen } from "@/redux/Reducer/MainSlice";
import { useDispatch } from "react-redux";

interface TableHeadingProps {
  headName: string;
  buttonName: string;
}

const TableHeading: React.FC<TableHeadingProps> = ({
  headName,
  buttonName,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between mb-2 print:hidden">
      <div className="mb-2 text-base font-semibold text-sky-600">
        {headName}
      </div>
      <button
        onClick={() => dispatch(handleAddModalOpen())}
        // htmlFor="my_modal_2"
        className="bg-primary hover:bg-red-800  py-1 px-4 rounded-lg text-sm font-bold text-white flex items-center justify-center"
      >
        {buttonName}
      </button>
    </div>
  );
};

export default TableHeading;

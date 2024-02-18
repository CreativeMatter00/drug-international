import {
  RootState,
  handleAddModalClose,
  handleAddModalOpen,
} from "@/redux/Reducer/MainSlice";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

interface AddModalProps {
  children: ReactNode;
  modalHead: string;
}

const AddModal: React.FC<AddModalProps> = ({ children, modalHead }) => {
  const dispatch = useDispatch();
  const addModalOpen = useSelector((state: RootState) => state.Initial.add);

  return (
    <div className="z-[10000000000]">
      <input
        type="checkbox"
        id="my_modal_7"
        className="modal-toggle"
        checked={addModalOpen}
        onChange={() => dispatch(handleAddModalOpen())}
      />
      <div className="modal z-[10000000000]">
        <div className="modal-box w-10/12 max-w-4xl">
          <button
            onClick={() => dispatch(handleAddModalClose())}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-xl underline text-center">
            {modalHead}
          </h3>
          <div className="py-4">{children}</div>
        </div>
        <label
          className="modal-backdrop"
          htmlFor="my_modal_7"
          onClick={() => dispatch(handleAddModalClose())}
        >
          Close
        </label>
      </div>
    </div>
  );
};

export default AddModal;

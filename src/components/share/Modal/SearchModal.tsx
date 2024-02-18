import {
  RootState,
  handleInitialSearch,
  handleInitialSearchStop,
} from "@/redux/Reducer/MainSlice";
import { ReactNode } from "react";
import { useSelector, useDispatch } from "react-redux";

interface ModalProps {
  children: ReactNode;
  modalHead: string;
}

const SearchModal: React.FC<ModalProps> = ({ children, modalHead }) => {
  const dispatch = useDispatch();
  const searchModalOpen = useSelector(
    (state: RootState) => state.Initial.search
  );

  return (
    <div className="z-[10000000000]">
      <input
        type="checkbox"
        id="my_modal_8"
        className="modal-toggle"
        checked={searchModalOpen}
        onChange={() => dispatch(handleInitialSearch())}
      />
      <div className="modal z-[10000000000]">
        <div className="modal-box w-10/12 max-w-7xl h-[70vh] ">
          <button
            onClick={() => dispatch(handleInitialSearchStop())}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">{modalHead}</h3>
          <div className="py-4">{children}</div>
        </div>
        <label
          className="modal-backdrop"
          htmlFor="my_modal_8"
          onClick={() => dispatch(handleInitialSearchStop())}
        >
          Close
        </label>
      </div>
    </div>
  );
};

export default SearchModal;

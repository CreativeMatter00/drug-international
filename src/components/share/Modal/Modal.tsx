import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  modalHead: string;
  addModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({
  children,
  modalHead,
  addModalOpen,
  setModalOpen,
}) => {
  return (
    <div className="z-[10000000000]">
      <input
        type="checkbox"
        id="my_modal_7"
        className="modal-toggle"
        checked={addModalOpen}
        onChange={(e) =>
          e.target.checked ? setModalOpen(false) : setModalOpen(true)
        }
      />
      <div className="modal">
        <div className="modal-box w-10/12 max-w-4xl">
          <button
            onClick={() => setModalOpen(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">{modalHead}</h3>
          <div className="py-4">{children}</div>
        </div>
        <label
          className="modal-backdrop"
          htmlFor="my_modal_7"
          onClick={() => setModalOpen(false)}
        >
          Close
        </label>
      </div>
    </div>
  );
};

export default Modal;

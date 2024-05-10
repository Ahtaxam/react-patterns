import React, { useState } from "react";

function Modal({ children }) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <button className="border m-4 p-2" onClick={openModal}>
        Open
      </button>
      {showModal && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto bg-black opacity-50"
          onClick={closeModal}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative bg-white p-8 rounded-lg">
              <button
                className="absolute top-0 right-0 m-4 border"
                onClick={closeModal}
              >
                Close
              </button>
              <div onClick={(e) => e.stopPropagation()}>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;

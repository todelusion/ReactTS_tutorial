import React from "react";
import ReactDOM from "react-dom";

function Loading(): JSX.Element {
  return (
    <div className="fixed top-0 z-40 flex h-screen w-full flex-col items-center justify-center">
      <div className="mb-14 h-14 w-20 animate-spin rounded-[100%] border-2 border-blue-700 md:h-20 md:w-32" />
    </div>
  );
}

function Modal(): JSX.Element {
  const modalRoot = document.getElementById("modal-root") as HTMLElement;

  return <>{ReactDOM.createPortal(<Loading />, modalRoot)}</>;
}

export default Modal;
